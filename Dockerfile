FROM node:16-alpine AS BUILD_IMAGE

RUN mkdir /app/
WORKDIR /app/

COPY package.json yarn.lock ./


# install dependencies
RUN yarn --frozen-lockfile

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY . .

RUN yarn install

RUN yarn run build

FROM node:16-alpine


ENV NODE_ENV=production
ENV PORT=8080


RUN mkdir /app/
WORKDIR /app/

COPY --from=BUILD_IMAGE /app/node_modules /app/node_modules
COPY --from=BUILD_IMAGE /app/build /app/build
COPY --from=BUILD_IMAGE /app/public /app/public
ADD . .

ENTRYPOINT [ "yarn" ]

CMD [ "run", "start" ]