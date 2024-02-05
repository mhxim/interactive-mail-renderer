FROM node:alpine
WORKDIR /usr
COPY package.json ./
COPY tsconfig.json ./
COPY index.js ./
COPY server.jsx ./
COPY .env.production ./
COPY src ./src
COPY protos ./protos
RUN ls -a
RUN npm install
# RUN npm run build
EXPOSE 666
CMD npm run start