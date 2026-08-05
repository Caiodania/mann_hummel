# MANN+HUMMEL — Carga & Pipeline

MVP interno de gestão de projetos: matriz de **Carga da equipe**, **Pipeline**
(kanban de estágios) e **Gantt**.

- **Frontend:** React 19 + Vite + TypeScript. Estado global via Context API
  própria (`src/store.tsx`), sem Redux/Zustand.
- **Backend:** Express + Prisma (`server/src`).
- **Banco:** SQLite por padrão (`server/prisma/dev.db`). Postgres opcional via
  `docker-compose.yml`.

O frontend consome um único endpoint `GET /api/state` (single source of truth),
faz polling a cada 8s e usa atualização otimista antes de confirmar com o
servidor.

## Setup

```bash
# 1. dependências do frontend
npm install

# 2. backend: instala deps, gera client, cria e popula o banco
cp server/.env.example server/.env      # cria server/.env (SQLite por padrão)
npm run setup                            # install + prisma generate + db push + seed

# 3. rodar tudo (API na 3001 + web na 5173)
npm run dev
```

O `server/.env` **precisa existir** com `DATABASE_URL` — o Prisma Client em
runtime não carrega `.env` sozinho (só o Prisma CLI carrega). O carregamento é
feito por `server/src/env.ts` (via `dotenv`), importado antes de instanciar o
Prisma Client. Sem isso, toda query falha com
`Environment variable not found: DATABASE_URL`.

## Variáveis de ambiente (`server/.env`)

| Var            | Padrão            | Descrição                                                        |
| -------------- | ----------------- | ---------------------------------------------------------------- |
| `DATABASE_URL` | `file:./dev.db`   | Conexão do Prisma. Caminho SQLite relativo ao `schema.prisma`.   |
| `API_PORT`     | `3001`            | Porta da API (o proxy do Vite aponta para 3001).                 |
| `NODE_ENV`     | —                 | Em `production`, respostas de erro 500 são sanitizadas.          |
| `API_KEY`      | — (auth desligada)| Se definido, rotas de escrita exigem header `x-api-key`.         |

Frontend (opcional): `VITE_API_KEY` faz o cliente enviar o `x-api-key` quando a
API estiver protegida.

## Trocar SQLite ↔ Postgres

O container Postgres (`docker-compose.yml`) e o schema (SQLite por padrão) exigem
edição manual. Para usar Postgres:

1. `docker compose up -d`
2. Em `server/prisma/schema.prisma`, troque o `provider` do bloco `datasource`
   de `"sqlite"` para `"postgresql"`.
3. Em `server/.env`:
   `DATABASE_URL="postgresql://mh:mh@localhost:5432/mannhummel?schema=public"`
4. `npm --prefix server run prisma:generate && npm --prefix server run db:push && npm --prefix server run db:seed`

> Nota: `Float`/`String`/`String?` do schema são portáveis entre os dois
> providers, então nenhuma outra alteração de modelo é necessária.

## Revisão geral (item 9) — dívidas técnicas conhecidas

Pontos avaliados mas **não** alterados nesta rodada, com recomendação:

- **Toda mutação recarrega o estado inteiro do banco.** Cada rota de escrita
  responde com `getAppState()` (3 `findMany` com `include`). Com o dataset atual
  (73 projetos / 824 atividades) é aceitável, mas o custo cresce O(n) por
  clique. Caminho recomendado quando escalar: responder apenas a entidade
  alterada (delta) e reconciliar no cliente, mantendo o `GET /api/state` só para
  a carga inicial e o polling.
- **IDs gerados no cliente (`uid()` em `src/store.tsx`).** Necessários para o
  update otimista (a entidade precisa de id antes do round-trip). Já migrado para
  `crypto.randomUUID()` com fallback — colisão deixa de ser preocupação sem mudar
  a arquitetura. Migrar para cuid/uuid no servidor exigiria abandonar o id
  otimista imediato; não compensa para este MVP.
- **`docker-compose` (Postgres) vs `schema.prisma` (SQLite).** A troca de
  provider é manual; documentada na seção acima. Automatizar (ex.: dois schemas
  ou variável de provider) só se o uso de Postgres virar rotina.

Validação de entrada (zod) fica em `server/src/validation.ts`; mantenha os enums
em sincronia com `src/types.ts`.
