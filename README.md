# Instruções

```bash
nvm use 21
```

# Como subir o projeto

```bash
docker compose up -d

cd autopericiado && nvm use 21 && npm run start:dev
```

# Cola para comandos cli

```bash
npm install --save @nestjs/typeorm typeorm pg
npm install dotenv
npm install class-validator 

npm install --save @nestjs/swagger swagger-ui-express

nest generate module modelo-de-laudo
nest generate controller modelo-de-laudo
#precisei fazer alterações nos scripts do package.json
npm run typeorm migration:generate src/migrations/cria_template_modelo_laudo_franquiador_comum
npm run typeorm migration:run
```