const expressJwt = require('express-jwt');
const config = require('config.json');
const userService = require('../futurePedia/controllers/Admin.controller');
module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            // public routes that don't require authenticationss
            '/api/futurePedia/addUser',
            '/api/futurePedia/userById',
            '/api/futurePedia/userUpdate',
            '/api/futurePedia/userDelete',
            '/api/futurePedia/addcategory',
            '/api/futurePedia/addFeature',
            '/api/futurePedia/addPricing',
            '/api/futurePedia/addproduct',
            '/api/futurePedia/productList',
            '/api/futurePedia/home',
            '/api/futurePedia/newssdata',
            '/api/futurePedia/RegexApi',
            '/api/futurePedia/socialregister',
            '/api/futurePedia/productById',
            '/api/futurePedia/Favourites',
            '/api/futurePedia/login',
            '/api/futurePedia/categoryList',
            '/api/futurePedia/dropdown',
            '/api/futurePedia/categoryListbtType',
            '/api/futurePedia/addnews',
            '/api/futurePedia/newsList',
            '/api/futurePedia/favouritesList',
            '/api/futurePedia/filter',
            '/api/futurePedia/userList',
            '/api/futurePedia/discover',
            '/api/futurePedia/addBlog',
            '/api/futurePedia/BlogList',
            '/api/futurePedia/BlogById',
            '/api/futurePedia/todayTools',
            '/api/futurePedia/todaynews',
            
        ]
    });
}
async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);
    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }
    done();
}; 
