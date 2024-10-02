# Instruções

```bash
nvm use 21
```

# Como subir o projeto

# Cola para comandos cli

```bash
npm install --save @nestjs/typeorm typeorm pg
npm install dotenv
nest generate module modelo-de-laudo
nest generate controller modelo-de-laudo
#precisei fazer alterações nos scripts do package.json
npm run typeorm migration:generate -- -n CreateAllTables
npm run typeorm migration:run
npm run typeorm -- migration:run -d src/config/data-source.ts"
```
 ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js --d src/config/data-source.ts migration:generate -n CreateAllTables src/migrations

"typeorm": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js",