FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN chgrp -R 0 /usr/src/app/ && \
    chmod -R g=u /usr/src/app && \
    chown -R 1001:0 /usr/src/app;
#    chgrp -R 0 /.npm && \
#    chmod -R g=u /.npm && \
#    chown -R 1001:0 /.npm;

EXPOSE 5173

USER 1001

CMD ["npm", "run", "dev"]
