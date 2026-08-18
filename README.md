# MANN+HUMMEL — Carga & Pipeline

MVP interno de gestão de projetos: matriz de **Carga da equipe**, **Pipeline**
(kanban de estágios) e **Gantt**.

- **Frontend:** React 19 + Vite + TypeScript. Estado global via Context API
  própria (`src/store.tsx`), sem Redux/Zustand.
- **Backend:** Express + Prisma (`server/src`).
- **Banco:** PostgreSQL (`server/prisma/schema.prisma`). Local via
  `docker-compose.yml`, ou apontando para o mesmo Postgres gerenciado usado em
  produção — ver `server/.env.example`.

O frontend consome um único endpoint `GET /api/state` (single source of truth),
faz polling a cada 8s e usa atualização otimista antes de confirmar com o
servidor.

## Setup

```bash
# 1. dependências do frontend
npm install

# 2. backend: instala deps, gera client, cria e popula o banco
cp server/.env.example server/.env      # cria server/.env — edite DATABASE_URL (Postgres)
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
| `DATABASE_URL` | —                 | Connection string do Postgres (local via Docker ou gerenciado).  |
| `API_PORT`     | `3001`            | Porta da API (o proxy do Vite aponta para 3001).                 |
| `NODE_ENV`     | —                 | Em `production`, respostas de erro 500 são sanitizadas.          |
| `API_KEY`      | — (auth desligada)| Se definido, rotas de escrita exigem header `x-api-key`.         |

Frontend (opcional): `VITE_API_KEY` faz o cliente enviar o `x-api-key` quando a
API estiver protegida.

## Rodar o Postgres local (Docker)

`docker-compose.yml` sobe um Postgres local para dev (credenciais `mh`/`mh`,
banco `mannhummel`):

1. `docker compose up -d`
2. Em `server/.env`:
   `DATABASE_URL="postgresql://mh:mh@localhost:5432/mannhummel?schema=public"`
3. `npm --prefix server run prisma:generate && npm --prefix server run db:push && npm --prefix server run db:seed`

Sem Docker instalado, use direto o Postgres gerenciado (mesma connection
string do ambiente de produção) — ver `server/.env.example`.

## Deploy (Render) — banco persistente

O SQLite antigo vivia num arquivo no disco efêmero do serviço web: cada
deploy do Render recria o container do zero, então o arquivo (nunca versionado,
`*.db` no `.gitignore`) sumia e o build reseedava do zero, apagando qualquer
edição feita pelos usuários. Por isso o banco agora é Postgres — roda como um
serviço separado, então sobrevive a redeploys do serviço web.

1. No dashboard do Render, crie um **PostgreSQL** (New → PostgreSQL).
2. Copie a **Internal Database URL** e defina como `DATABASE_URL` nas
   variáveis de ambiente do **serviço web** (Environment).
3. Redeploy. O `render-build` já roda `prisma db push` +
   `db:seed:if-empty` — cria o schema e popula os dados na primeira vez;
   deploys seguintes só aplicam mudanças de schema e nunca tocam em dados
   existentes.

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
Validação de entrada (zod) fica em `server/src/validation.ts`; mantenha os enums
em sincronia com `src/types.ts`.
