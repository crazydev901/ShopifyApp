const dotenv = require('dotenv');

dotenv.config();

const configData = { 
    apiKey: process.env.SHOPIFY_API_KEY,
};

export default configData;