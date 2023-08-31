**BFF Auth Proof of Concept (PoC) - README**

This README provides an overview and instructions for Proof of Concept (PoC) implementation of the Backend-for-Frontend (BFF) authentication pattern. The PoC demonstrates the authentication flow, token management, and API invocation using a Node.js environment.

## Table of Contents

1. Introduction
2. Prerequisites
3. Getting Started
4. Project Structure
5. Configuration
6. Usage
7. Further Steps
8. Credits
9. License

## 1. Introduction

The Node.js Proof of Concept (PoC) demonstrates the implementation of the Backend-for-Frontend (BFF) authentication pattern. It showcases how the frontend communicates with the backend to handle user authentication, token management, and secure API invocations.

## 2. Prerequisites

- Node.js (version 20.0.0)
- NPM (Node Package Manager)

## 3. Getting Started

1. Clone this repository to your local machine using:
   ```
   git clone git@github.com:janakunft/bff-auth-poc.git
   ```

2. Navigate to the project directory:
   ```
   cd bff-auth-poc
   ```

3. Install project dependencies:
   ```
   npm install
   ```

## 4. Project Structure

- `server/`: Contains the Node.js server implementation.
  - `routes/`: Route handlers for different endpoints.
  - `config.js`: Configuration settings for the server.
  - `index.js`: Entry point of the Node.js server.

- `client/`: Contains a sample frontend application to interact with the server.
  - `src/`: Frontend source code.
  - `public/`: Public assets.

## 5. Configuration

Adjust the configuration in `server/config.js` to match your environment:

- `clientID`: Your EQ Connect client ID.
- `clientSecret`: Your EQ Connect client secret.
- `fusionAuthPort`: Port number for EQ Connect (e.g., 9011).
- `serverPort`: Port number for the Node.js server (e.g., 3000).

## 6. Usage

1. Set up FusionAuth:
   - Follow the instructions provided by FusionAuth in their tutorial: [How to Authenticate Your React App](https://fusionauth.io/blog/how-to-authenticate-your-react-app).
   - Start FusionAuth using Docker or your preferred method. For example, if using Docker, it might run on port 9001.

2. Start the client:
   ```
   cd client
   npm start
   ```

3. Start the Node.js server:
   ```
   cd server
   node index.js
   ```

4. Open a browser and access the sample frontend by navigating to `http://localhost:3000`.

5. Follow the interactive steps on the frontend to simulate user authentication and API invocations.

## 7. Further Steps

This PoC provides a simplified demonstration. For production, consider the following:

- Enhanced error handling and security practices.
- Integration with your chosen authentication service.
- Deployment to a secure server environment.

## 8. Credits

This project is based on the tutorial provided by FusionAuth: [How to Authenticate Your React App](https://fusionauth.io/blog/how-to-authenticate-your-react-app). Credit goes to FusionAuth for their valuable guidance and resources.

## 9. License

This project is licensed under the [MIT License](LICENSE).

---

By following these instructions, you can set up and explore the Node.js Proof of Concept (PoC) that demonstrates the Backend-for-Frontend (BFF) authentication pattern. The PoC helps you understand the flow of user authentication, token management, and secure API invocations within a Node.js environment. Special credit is given to FusionAuth for their tutorial that contributed to the development of this PoC. Remember to follow the steps to set up FusionAuth and run the client and server components on their respective ports.