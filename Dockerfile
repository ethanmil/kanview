FROM node:12.2.0

WORKDIR /usr/app

COPY package.json /usr/app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9

COPY . /app

CMD ng serve --host 0.0.0.0