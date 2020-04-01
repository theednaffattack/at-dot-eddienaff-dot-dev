# REPOSITORY:
# docker.io/theednaffattack/at-client_production
# TAG NAME(S):
# theednaffattack/at-client_production
# TAG SUFFIX(S):
# :first_try
#
# Builder stage.
# This state compile our TypeScript to get the JavaScript code
#
FROM node:12.13.0 AS builder


# RUN mkdir -p .next
# RUN chown node .next
# USER node
# RUN chmod a+rwx -R .next/
WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

# COPY --chown=node:node package*.json ./
# COPY --chown=node:node yarn.lock ./

# COPY --chown=node:node . .
# COPY . .

COPY next.config.js ./
COPY tsconfig.json ./
COPY next-env.d.ts ./
COPY .graphql-let.yml ./
COPY lib/ ./lib
COPY pages/ ./pages
COPY components/ ./components
COPY public/ ./public
COPY utils/ ./utils
COPY typings/ ./typings
COPY .env .

RUN yarn install --frozen-lockfile && yarn build

#
# Production stage.
# This state compile get back the JavaScript code from builder stage
# It will also install the production package only
#
FROM node:12.13.0-slim

# USER node
WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile --production

## We just need the build to execute the command
COPY --from=builder /usr/src/app/.next ./.next
# Not sure if copying the env is a good idea. Maybe just for dev
COPY .env .
# COPY wait-for-postgres.sh .
# COPY wait-for-it.sh .

# Inform Docker that the container is listening on the specified port at runtime.
# EXPOSE 6000

# start the app 
CMD ["yarn", "start"]