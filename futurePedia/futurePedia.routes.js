const express = require("express");
const router = express.Router();
const config = require("config.json");
const jwt = require("jsonwebtoken");
const db = require("_helpers/db");
const path = require("path");
const {uploadPhoto} = require('../futurePedia/middleware/uploadPhoto');
const adminController = require("../futurePedia/controllers/Admin.controller");
const userController = require("../futurePedia/controllers/User.controller")
// ------ADMIN----------

// ----adminuser--------
router.post("/addUser",addUser);
router.get("/userList",userList);
router.post("/userById",userById);
router.post("/userUpdate",userUpdate);
router.post("/userDelete",userDelete)
// ----product--------
router.post("/addproduct",uploadPhoto("product", [{ name: "image", maxCount: 1 }]),addproduct);
router.get("/productList",productList);
router.post("/productById",productById);
router.post("/productUpdate",uploadPhoto("product", [{ name: "image", maxCount: 1 }]),productUpdate);
router.post("/productStatusUpdate",productStatusUpdate)
// ----news--------
router.post("/addnews",uploadPhoto("news", [{ name: "image", maxCount: 1 }]),addnews);
router.get("/newsList",newsList);
router.post("/newsById",newsById);
router.post("/newsUpdate",uploadPhoto("news", [{ name: "image", maxCount: 1 }]),newsUpdate);
router.post("/newsStatusUpdate",newsStatusUpdate)
// ----category--------
router.post("/addcategory",addcategory);
router.get("/categoryList",categoryList);
router.post("/categoryById",categoryById);
router.post("/categoryUpdate",categoryUpdate);
router.post("/categoryDelete",  categoryDelete)
// ---- Feature--------
router.post("/addFeature",addFeature);
router.get("/FeatureList",FeatureList);
router.post("/featureById",featureById);
router.post("/featureUpdate",featureUpdate);
router.post("/featureDelete",  featureDelete)
// ----Pricing--------
router.get("/PricingList",PricingList);
router.post("/addPricing",addPricing);
router.post("/pricingById",pricingById);
router.post("/pricingUpdate",pricingUpdate);
router.post("/PricingDelete",PricingDelete)
// ----Blog--------
router.get("/BlogList",BlogList);
router.post("/addBlog",uploadPhoto("blog", [{ name: "image", maxCount: 1 }]),addBlog);
router.post("/BlogById",BlogById);
router.post("/BlogUpdate",BlogUpdate);
router.post("/BlogDelete",BlogDelete)



router.post("/home",HomePage)
router.post("/RegexApi",RegexApi)
router.post("/socialregister",socialregister)
router.post("/Favourites",Favourites)
router.post("/login",login)
router.post("/categoryListbtType",categoryListbtType)
router.post("/dropdown",dropdown)
router.post("/newssdata",newssdata)
router.post("/favouritesList",favouritesList)
router.post("/filter",filter)
router.post("/discover",discover)
router.post("/todayTools",todayTools)
router.post("/todaynews",todaynews)
module.exports = router;




// ------ADMIN----------

// ----adminuser--------
function addUser(req, res,next){
  adminController
    .addUser(req, res)
    .then((data) => console.log("addUser"))
    .catch((err) => next(err));
}
function userList(req, res,next){
  adminController
    .userList(req, res)
    .then((data) => console.log("userList"))
    .catch((err) => next(err));
}
function userById(req, res,next){
  adminController
    .userById(req, res)
    .then((data) => console.log("userById"))
    .catch((err) => next(err));}
function userUpdate(req, res,next){
  adminController
    .userUpdate(req, res)
    .then((data) => console.log("userUpdate"))
    .catch((err) => next(err));
}
function userDelete(req, res,next){
  adminController
    .userDelete(req, res)
    .then((data) => console.log("userDelete"))
    .catch((err) => next(err));
}

// ----product--------

function addproduct(req, res,next){
  adminController
    .addproduct(req, res)
    .then((data) => console.log("addproduct"))
    .catch((err) => next(err));
}
function productList(req, res,next){
  adminController
    .productList(req, res)
    .then((data) => console.log("productList"))
    .catch((err) => next(err));
}
function productById(req, res,next){
  adminController
    .productById(req, res)
    .then((data) => console.log("productById"))
    .catch((err) => next(err));}
function productUpdate(req, res,next){
  adminController
    .productUpdate(req, res)
    .then((data) => console.log("productUpdate"))
    .catch((err) => next(err));
}
function productStatusUpdate(req, res,next){
  adminController
    .productStatusUpdate(req, res)
    .then((data) => console.log("productStatusUpdate"))
    .catch((err) => next(err));
}


// ----news--------

function addnews(req, res,next){
  adminController
    .addnews(req, res)
    .then((data) => console.log("addnews"))
    .catch((err) => next(err));
}
function newsList(req, res,next){
  adminController
    .newsList(req, res)
    .then((data) => console.log("newsList"))
    .catch((err) => next(err));
}
function newsUpdate(req, res,next){
  adminController
    .newsUpdate(req, res)
    .then((data) => console.log("newsUpdate"))
    .catch((err) => next(err));}
function newsById(req, res,next){
  adminController
    .newsById(req, res)
    .then((data) => console.log("newsById"))
    .catch((err) => next(err));
}
function newsStatusUpdate(req, res,next){
  adminController
    .newsStatusUpdate(req, res)
    .then((data) => console.log("newsStatusUpdate"))
    .catch((err) => next(err));
}


// ----category--------

function addcategory(req, res,next){
  adminController
    .addcategory(req, res)
    .then((data) => console.log("addcategory"))
    .catch((err) => next(err));
}
function categoryList(req, res,next){
  adminController
    .categoryList(req, res)
    .then((data) => console.log("categoryList"))
    .catch((err) => next(err));
}
function categoryById(req, res,next){
  adminController
    .categoryById(req, res)
    .then((data) => console.log("categoryById"))
    .catch((err) => next(err));}
function categoryUpdate(req, res,next){
  adminController
    .categoryUpdate(req, res)
    .then((data) => console.log("categoryUpdate"))
    .catch((err) => next(err));
}
function categoryDelete(req, res,next){
  adminController
    .categoryDelete(req, res)
    .then((data) => console.log("categoryDelete"))
    .catch((err) => next(err));
}


// ----feature--------

function addFeature(req, res,next){
  adminController
    .addFeature(req, res)
    .then((data) => console.log("addFeature"))
    .catch((err) => next(err));
}
function FeatureList(req, res,next){
  adminController
    .FeatureList(req, res)
    .then((data) => console.log("FeatureList"))
    .catch((err) => next(err));
}
function featureById(req, res,next){
  adminController
    .featureById(req, res)
    .then((data) => console.log("featureById"))
    .catch((err) => next(err));}
function featureUpdate(req, res,next){
  adminController
    .featureUpdate(req, res)
    .then((data) => console.log("featureUpdate"))
    .catch((err) => next(err));
}
function featureDelete(req, res,next){
  adminController
    .featureDelete(req, res)
    .then((data) => console.log("featureDelete"))
    .catch((err) => next(err));
}


// ----pricing--------

function addPricing(req, res,next){
  adminController
    .addPricing(req, res)
    .then((data) => console.log("addPricing"))
    .catch((err) => next(err));
}
function PricingList(req, res,next){
  adminController
    .PricingList(req, res)
    .then((data) => console.log("PricingList"))
    .catch((err) => next(err));
}
function pricingById(req, res,next){
  adminController
    .pricingById(req, res)
    .then((data) => console.log("pricingById"))
    .catch((err) => next(err));}
function pricingUpdate(req, res,next){
  adminController
    .pricingUpdate(req, res)
    .then((data) => console.log("pricingUpdate"))
    .catch((err) => next(err));
}
function PricingDelete(req, res,next){
  adminController
    .PricingDelete(req, res)
    .then((data) => console.log("PricingDelete"))
    .catch((err) => next(err));
}




// ----Blog--------

function addBlog(req, res,next){
  adminController
    .addBlog(req, res)
    .then((data) => console.log("addBlog"))
    .catch((err) => next(err));
}
function BlogList(req, res,next){
  adminController
    .BlogList(req, res)
    .then((data) => console.log("BlogList"))
    .catch((err) => next(err));
}
function BlogById(req, res,next){
  adminController
    .BlogById(req, res)
    .then((data) => console.log("BlogById"))
    .catch((err) => next(err));}
function BlogUpdate(req, res,next){
  adminController
    .BlogUpdate(req, res)
    .then((data) => console.log("BlogUpdate"))
    .catch((err) => next(err));
}
function BlogDelete(req, res,next){
  adminController
    .BlogDelete(req, res)
    .then((data) => console.log("BlogDelete"))
    .catch((err) => next(err));
}




function HomePage(req, res,next){
  userController
    .HomePage(req, res)
    .then((data) => console.log("HomePage"))
    .catch((err) => next(err));
}

function RegexApi(req, res,next){
  userController
    .RegexApi(req, res)
    .then((data) => console.log("RegexApi"))
    .catch((err) => next(err));
}
function socialregister(req, res,next){
  userController
    .socialregister(req, res)
    .then((data) => console.log("socialregister"))
    .catch((err) => next(err));
}
function Favourites(req, res,next){
  userController
    .Favourites(req, res)
    .then((data) => console.log("Favourites"))
    .catch((err) => next(err));
}
function login(req, res,next){
  userController
    .login(req, res)
    .then((data) => console.log("login"))
    .catch((err) => next(err));
}
function dropdown(req, res,next){
  userController
    .dropdown(req, res)
    .then((data) => console.log("dropdown"))
    .catch((err) => next(err));
}
function categoryListbtType(req, res,next){
  userController
    .categoryListbtType(req, res)
    .then((data) => console.log("categoryListbtType"))
    .catch((err) => next(err));
}
function newssdata(req, res,next){
  console.log("newssdata")
  userController
    .newssdata(req, res)
    .then((data) => console.log("newssdata"))
    .catch((err) => next(err));
}

function favouritesList(req, res,next){
  console.log("favouritesList")
  userController
    .favouritesList(req, res)
    .then((data) => console.log("favouritesList"))
    .catch((err) => next(err));
}

function filter(req, res,next){
  console.log("filter")
  userController
    .filter(req, res)
    .then((data) => console.log("filter"))
    .catch((err) => next(err));
}
function discover(req, res,next){
  console.log("discover")
  userController
    .discover(req, res)
    .then((data) => console.log("discover"))
    .catch((err) => next(err));
}
function todayTools(req, res,next){
  console.log("todayTools")
  userController
    .todayTools(req, res)
    .then((data) => console.log("todayTools"))
    .catch((err) => next(err));
}
function todaynews(req, res,next){
  console.log("todaynews")
  userController
    .todaynews(req, res)
    .then((data) => console.log("todaynews"))
    .catch((err) => next(err));
}
