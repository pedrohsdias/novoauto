# Instruções

```bash
nvm use 21
```

# Como subir o projeto

```bash
docker compose up -d
```
```bash
cd api && nvm use 21 && npm run start:dev
```
```bash
cd web && nvm use 21 && npm run dev

npm install && npm run dev

```

### Usuario  inicial do seed:

```json
{
  "email": "root@email.com",
  "senha": "123"
}

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
```
docker-compose up
```
### Passo 3: Iniciar a sessão de debug
* Selecione a configuração de execução que você criou (Attach to API in Docker).
* Clique no ícone de play para iniciar o processo de attach.

## Config debug da api no vscode
* No menu lateral esquerdo, vá até a aba "Run and Debug"
* Clique na engrenagem para abrir o arquivo launch.json e adicione:
```
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