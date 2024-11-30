# Use an official Node.js image as the base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port Hardhat or any local blockchain will run on (if needed for local testing)
EXPOSE 8545

# Default command to run Hardhat (you can modify this based on your use case)
CMD ["npx", "hardhat", "node"]