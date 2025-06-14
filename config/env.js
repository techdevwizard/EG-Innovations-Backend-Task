require('dotenv').config()

const ENV = {
    PORT: process.env.PORT || 4000,
    MONGO_URL: process.env.MONGO_URL,
    JWT_TOKEN:process.env.JWT_TOKEN,
    USER_NAME:process.env.USER_NAME,
    PASSWORD:process.env.PASSWORD
}
module.exports = {ENV};