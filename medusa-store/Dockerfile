FROM node:20-alpine

WORKDIR /app/medusa

COPY package.json .
COPY reset.sh .
COPY yarn.* .

# Install dependencies
RUN yarn --network-timeout 1000000

# Install medusa CLI
RUN yarn global add @medusajs/medusa-cli

RUN yarn global add typescript

COPY . .

RUN yarn build

# Add the remaining files
COPY . .

# reset
ENTRYPOINT "./reset.sh"