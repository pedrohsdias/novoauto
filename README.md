# Instruções

## Como subir o projeto pela primeira vez
> Ambiente todo no docker
Construa e suba os containers:
```bash
docker compose up -d
```
Instale as dependencias dos dois projetos:
```bash
#frontend
docker exec -it web npm install

#backend
docker exec -it api npm install 
```
Crie a estrutura do banco:
```bash
docker exec -it api npm run typeorm migration:run
```
Popule o banco com dados iniciais:
```bash
docker exec -it api npm run seed
# ainda em construção
#docker exec -it api npm run seed:dev 
```
Suba os servidores:
```bash
#frontend
docker exec -it web npm run dev

#backend
docker exec -it api npm run start:dev
```
### Endpoints local
* PG Admin: http://localhost:5050/
* Frontend: http://localhost:3000/
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

## Config debug da api no webstorm
### Passo 1: Criar uma configuração de execução (Run/Debug Configuration)
* No WebStorm, clique em Run no menu superior e selecione Edit Configurations....
* Clique no ícone de "+" no canto superior esquerdo e escolha Attach to Node.js/Chrome.
* Configure as opções da seguinte maneira:
  * Name: Attach to API in Docker
  * Host: 127.0.0.1
  * Port: 9229
  * Remote host: Deixe em branco (pode ser opcional, dependendo da sua versão).
  * Remote root folder: /app (Esta é a pasta no contêiner, conforme definida no Dockerfile).
  * Local root folder: Selecione a pasta local do seu projeto, geralmente a raiz onde está o código da API.
### Passo 2: Rodar o Docker Compose
```bash
docker-compose up
```
### Passo 3: Iniciar a sessão de debug
* Selecione a configuração de execução que você criou (Attach to API in Docker).
* Clique no ícone de play para iniciar o processo de attach.

## Config debug da api no vscode
* No menu lateral esquerdo, vá até a aba "Run and Debug"
* Clique na engrenagem para abrir o arquivo launch.json e adicione:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach to Docker API",
      "port": 9229,
      "address": "127.0.0.1",
      "restart": true,
      "localRoot": "${workspaceFolder}/api",
      "remoteRoot": "/app",
      "protocol": "inspector"
    }
  ]
}
```
<!-- ## Como atualizar os containers

```bash
```

## Como resetar o banco
```bash
docker compose down
docker 
``` -->