# Subindo o ambiente backend
## Comum
A partir do `.env.example`, gere um `.env` local, variáveis em branco são chaves unicas ou credenciais, gere as chaves ou pegue as credenciais com um responsavel
```bash
cp .env.example .env
```

## Docker
Suba o container
```bash
docker compose up -d
```
Caso seja a primeira vez instale as dependências:
```bash
docker exec -it auto_api npm install 
```
Rode as migrations:
```bash
docker exec -it auto_api npm run typeorm migration:run
```
Execute os seeds:
```bash
docker exec -it auto_api npm run seed

docker exec -it auto_api npm run seed:dev 
```
Por fim suba o servidor:
```bash
docker exec -it auto_api npm run start:dev
```
## Local
Caso não tenho o postgres local suba somenteo banco no docker
```bash 
docker-compose up postgres -d 
```
Depois execute os comandos normalmente:
```bash
npm install

npm run typeorm migration:run

npm run seed
npm run seed:dev
```
```bash
npm run start:dev
```

## Endpoints local
* PG Admin: http://localhost:5050/
* backend: http://localhost:3001/
### Usuario  inicial do seed:

```json
{
  "email": "root@email.com",
  "senha": "123"
}
```

### Credenciais de banco:
```yaml
POSTGRES_DB: yourdatabase
POSTGRES_USER: yourusername
POSTGRES_PASSWORD: yourpassword
```
### Credenciais do PG Admin
```yaml
PGADMIN_DEFAULT_EMAIL: your-email@example.com
PGADMIN_DEFAULT_PASSWORD: yourpassword
```
# Cola

Comandos utilizados na criação do projeto

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
```bash
docker-compose up postgres -d
docker exec -it auto_api npm run typeorm migration:generate src/migrations/cria_tabelas_iniciais
sudo rm ../api/src/migrations/
```

```bash
docker exec -it api npm run typeorm migration:revert
```