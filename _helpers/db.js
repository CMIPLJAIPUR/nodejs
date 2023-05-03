const mongoose = require('mongoose');

const config = require('config.json');

try {
    const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
        mongoose.connect(config.connectionString, connectionOptions);
        mongoose.Promise = global.Promise;
        console.log(`Database connected : ${mongoose.connection.host}`)
        
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
module.exports = {
    Product: require("../futurePedia/models/product.model"),
    Favourites: require("../futurePedia/models/Favourites.model"),
    News: require("../futurePedia/models/news.model"),
    User: require("../futurePedia/models/user.model"),
    Category: require("../futurePedia/models/category.model"),
    Feature: require("../futurePedia/models/Feature.model"),
    Pricing: require("../futurePedia/models/pricing.model"),
    Blog: require("../futurePedia/models/blog.model"),

};