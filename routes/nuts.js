var express = require('express'); 
const nuts_controlers= require('../controllers/nuts'); 
var router = express.Router(); 
 
/* GET nutss */ 
router.get('/', nuts_controlers.nuts_view_all_Page ); 
module.exports = router; 