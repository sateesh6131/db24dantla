var express = require('express'); 
const nuts_controlers= require('../controllers/nuts'); 
var router = express.Router(); 
 
/* GET nutss */ 
router.get('/', nuts_controlers.nuts_view_all_Page ); 

/* GET detail nuts page */ 
router.get('/detail', nuts_controlers.nuts_view_one_Page); 
/* GET create nuts page */ 
router.get('/create', nuts_controlers.nuts_create_Page); 
/* GET create update page */ 
router.get('/update', nuts_controlers.nuts_update_Page); 
/* GET create nuts page */ 
router.get('/delete', nuts_controlers.nuts_delete_Page); 
module.exports = router; 
 
 