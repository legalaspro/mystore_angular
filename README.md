# MyStore

Welcome to MyStore, a simple e-commerce application!
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.2.

## Getting Started

To start the application, follow these steps:

1. Make sure you have Node.js and Angular CLI installed on your machine.
2. Clone this repository to your local machine.
3. Open a terminal or command prompt and navigate to the project's root directory.
4. Run the following command to install the dependencies:

   ```bash
   npm install
   ```

5. Once the installation is complete, run the following command to start the application:

   ```bash
   ng serve
   ```

6. Open your browser and navigate to `http://localhost:4200` to access MyStore.

## OAuth2 Support

MyStore incorporates OAuth2 authentication using Auth0. To use the authentication features, please ensure that you access the application via `http://localhost:4200`.

To get started with OAuth2 authentication:

1. On the MyStore main page, click the "Login" button.
2. If you don't have an existing account, click the "Sign Up" button to create a new account in the OAuth popup.
3. Follow the instructions provided to complete the signup process.
4. Once you've logged in or signed up successfully, you can use the application to add items to your cart, edit your cart contents, and confirm your order.

Please note that the OAuth2 authentication is specific to the `localhost:4200` URL for local development purposes.

## Features

MyStore offers the following features:

- Product List: Browse through the available products.
- Cart Management: Edit the cart contents, and remove items, add address, fullname, Credit Card.
- Order Confirmation: Finalize your order and confirm your purchase.
