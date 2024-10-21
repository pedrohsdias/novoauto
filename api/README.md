# Rodando apenas o back

```bash
npm run start:dev
```

Libs instaladas

```bash
npm install --save @nestjs/typeorm typeorm pg
npm install @nestjs/config
npm install dotenv
npm install bcrypt
npm install class-validator
npm install --save @nestjs/swagger swagger-ui-express
npm install @nestjs/jwt @nestjs/passport passport passport-jwt
npm install -D @types/bcrypt
```
Comandos comuns
```bash
nest generate module modelo-de-laudo
nest generate controller modelo-de-laudo
#precisei fazer alterações nos scripts do package.json
npm run typeorm migration:generate src/migrations/cria_tabelas_iniciais
npm run typeorm migration:run
npm run seed
npm run seed:dev
```