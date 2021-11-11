var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var nuts_controller = require('../controllers/nuts'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// nuts ROUTES /// 
 
// POST request for creating a nuts.  
router.post('/nuts', nuts_controller.nuts_create_post); 
 
// DELETE request to delete nuts. 
router.delete('/nuts/:id', nuts_controller.nuts_delete); 
 
// PUT request to update nuts. 
router.put('/nuts/:id', 
nuts_controller.nuts_update_put); 
 
// GET request for one nuts. 
router.get('/nuts/:id', nuts_controller.nuts_detail); 
 
// GET request for list of all nuts items. 
router.get('/nuts', nuts_controller.nuts_list); 
 
module.exports = router; 