var nuts = require('../models/nuts'); 
 
// List of all nutss 
exports.nuts_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: nuts list'); 
}; 
 
// for a specific nuts. 
exports.nuts_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: nuts detail: ' + req.params.id); 
}; 
 
// Handle nuts create on POST. 
exports.nuts_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: nuts create POST'); 
}; 
 
// Handle nuts delete form on DELETE. 
exports.nuts_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: nuts delete DELETE ' + req.params.id); 
}; 
 
// Handle nuts update form on PUT. 
exports.nuts_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: nuts update PUT' + req.params.id); 
}; 
// List of all nutss 
exports.nuts_list = async function(req, res) { 
    try{ 
        thenutss = await nuts.find(); 
        res.send(thenutss); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.nuts_view_all_Page = async function(req, res) { 
    try{ 
        thenutss = await nuts.find(); 
        res.render('nuts', { title: 'nuts Search Results', results: thenutss }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// Handle nuts create on POST. 
exports.nuts_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new nuts(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"nuts_type":"goat", "cost":12, "size":"large"} 
    document.nuts_type = req.body.nuts_type; 
    document.Weight = req.body.Weight; 
    document.Cost = req.body.Cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 