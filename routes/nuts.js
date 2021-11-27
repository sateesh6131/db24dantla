var express = require('express'); 
const nuts_controlers= require('../controllers/nuts'); 
var router = express.Router(); 
 
/* GET nutss */ 
router.get('/', nuts_controlers.nuts_view_all_Page ); 

/* GET detail nuts page */ 
router.get('/detail', nuts_controlers.nuts_view_one_Page); 

// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
/* GET create nuts page */ 
router.get('/create',secured, nuts_controlers.nuts_create_Page); 
/* GET create update page */ 
router.get('/update',secured, nuts_controlers.nuts_update_Page); 
/* GET create nuts page */ 
router.get('/delete',secured, nuts_controlers.nuts_delete_Page); 
module.exports = router; 
 
 