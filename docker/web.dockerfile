FROM node:21

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

## Copia o package.json e package-lock.json para o contêiner
#COPY ../web/package*.json ./
## Instala as dependências
#RUN npm install
## Copia o código da aplicação
#COPY ../web .
## Compila a aplicação Next.js
#RUN npm run build

# Expõe a porta que o Next.js usará
EXPOSE 3000 9229

# Comando para iniciar a aplicação Next.js
CMD ["sh", "-c", "npm install && npm run start:dev"]
#CMD ["npm", "run", "dev"]
#CMD ["node", "--inspect=0.0.0.0:9229", "node_modules/.bin/next", "dev"]
