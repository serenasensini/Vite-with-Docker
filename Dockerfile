FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm i && npm install -g npm@9.6.2

COPY . .

RUN mkdir /.npm && \
    chgrp -R 0 /app && \
    chmod -R ug+rwX /app && \
    chown -R 1001:0 /app && \
    chgrp -R 0 /.npm && \
    chmod -R ug+rwX /.npm && \
    chown -R 1001:0 /.npm;

EXPOSE 5173

USER 1001

CMD ["npm", "run", "dev"]
