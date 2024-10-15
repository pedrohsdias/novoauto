# Instruções

```bash
nvm use 21
```

# Como subir o projeto

```bash
docker compose up -d

cd api && nvm use 21 && npm run start:dev
```

# Cola para comandos cli

```bash
npm install --save @nestjs/typeorm typeorm pg
npm install dotenv
npm install class-validator
npm install --save @nestjs/swagger swagger-ui-express
npm install @nestjs/jwt @nestjs/passport passport passport-jwt
npm install -D @types/bcrypt

nest generate module modelo-de-laudo
nest generate controller modelo-de-laudo
#precisei fazer alterações nos scripts do package.json
npm run typeorm migration:generate src/migrations/cria_tabelas_iniciais
npm run typeorm migration:run
npm run seed
```

### Usuario  inicial do seed:

```json
{
  "email": "root@email.com",
  "senha": "12"
}

```