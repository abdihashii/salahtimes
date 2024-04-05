FROM node:alpine

WORKDIR /usr/src/app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml
COPY package*.json pnpm-lock.yaml* ./

# Install project dependencies using pnpm
RUN pnpm install

# Copy the rest of the project files into the container
COPY . .

# Expose the port your app runs on (Next.js default is 3000)
EXPOSE 3000

# Define the command to run your app in development mode
CMD [ "pnpm", "run", "dev" ]
