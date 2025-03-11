FROM node:22

LABEL authors="PedroDias"

WORKDIR /app

RUN npm install -g npm@11.1.0

EXPOSE 3000 9229

#CMD ["tail","-f","/dev/null"]
CMD ["npm", "run", "start:dev"]