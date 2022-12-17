# Cara Online Store

Cara Store is an e-commerce web app built with the MERN stack. It utilises responsive web design and user-friendly navigation to deliver a world class shopping experience, allowing users to browse products, add them to their cart, and seamlessly complete purchases with StripeJS Checkout.

## Technologies Used

- MongoDB for storing orders, product and user data
- Redux + Redux Toolkit to simplify state management
- Axios for making HTTP requests
- React Router to handle multi-page navigation
- JWT & CryptoJS for user authentication and encryption
- Bootstrap for frontend styling
- Cloudinary for storing and serving static assets
- Stripe for handling checkout and payment
- Material-UI for Admin Dashboard components
- Recharts for data visualisation in the Admin Dashboard

## Features

- Browse and purchase products
- Add items to a shopping cart
- Register and log in as a user
- Check out with Stripe
- View order history as a logged in user
- Admin Dashboard for managing store resources:
  - Adding, editing, and deleting products, users and orders
  - Viewing and fulfilling orders
  - Visualise sales data with charts

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- A MongoDB database set up and running
- A Cloudinary account
- A Stripe account

### Installation

1. Clone or download the repository

    `git clone https://github.com/dannysantino/cara-online-store.git`

2. Install all necessary dependencies

    ```
    cd cara-online-store/api && npm install

    cd ../client && npm install

    cd ../admin && npm install
    ```

3. In the root, client, and admin directories, create a `.env` file and input the following variables

    ROOT
    ```
    MONGO_URI=[your_mongodb_connection_string]
    CLIENT_DOMAIN=[client_app_url_e.g._http://localhost:3000]
    JWT_SECRET_KEY=[your_secret_string]
    CRYPTO_JS_SECRET=[your_secret_string]
    CLOUDINARY_CLOUD_NAME=[your_cloud_name]
    CLOUDINARY_KEY=[your_cloudinary_api_key]
    CLOUDINARY_SECRET=[your_cloudinary_api_secret]
    STRIPE_SECRET_KEY=[your_stripe_secret_key]
    STRIPE_SHIPPING_ID=[your_stripe_shipping_id]
    ```
    CLIENT
    ```
    REACT_APP_STRIPE_PUBLIC_KEY=[your_stripe_public_key]
    REACT_APP_API_BASE_URL=[http://localhost:5000/api]
    ```
    ADMIN
    ```
    REACT_APP_API_BASE_URL=[http://localhost:5000/api]
    PORT=3500
    ```

4. Start the development servers

    You can choose to run each app in separate terminals with `npm start`, `npm run client`, and `npm run admin` all from the root directory, or you can alternatively run `npm install` in the root directory to install **[concurrently](https://github.com/open-cli-tools/concurrently#readme)**—a tool with which you can run multiple commands at the same—and then start all servers with `npm run dev`

## Contributing

If you would like to contribute to this project, please follow these guidelines:
- Fork the repository and make yur changes on a separate branch
- Test your changes thoroughly to ensure they work as expected
- Open a pull request and describe your changes

All contributions are greatly appreciated!