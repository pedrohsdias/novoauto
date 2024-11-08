FROM node:21

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

## Copia o package.json e package-lock.json para o contêiner
#COPY ../api/package*.json ./
## Instala as dependências
#RUN npm install
## Copia o código da aplicação
#COPY ../api .
## Compila a aplicação NestJS
#RUN npm run build

# Expõe a porta que o NestJS usará
EXPOSE 3000 9229
CMD ["sh", "-c", "npm install && npm run dev"]
#CMD ["npm", "run", "start:dev"]
#CMD ["node", "--inspect=0.0.0.0:9229", "dist/main"]
#CMD ["nest", "start", "--debug", "--watch", "--inspect=0.0.0.0:9229"]
