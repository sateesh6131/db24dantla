var nuts = require('../models/nuts'); 
 
// List of all nutss 
exports.nuts_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: nuts list'); 
}; 
 
// for a specific nuts. 
exports.nuts_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await nuts.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle nuts create on POST. 
exports.nuts_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: nuts create POST'); 
}; 
 
// Handle nuts delete on DELETE. 
exports.nuts_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await nuts.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// Handle nuts update form on PUT. 
exports.nuts_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await nuts.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.nuts_type)  
               toUpdate.nuts_type = req.body.nuts_type; 
        if(req.body.Cost) toUpdate.Cost = req.body.Cost; 
        if(req.body.Weight) toUpdate.Weight = req.body.Weight; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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

// Handle a show one view with id specified by query
exports.nuts_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await nuts.findById( req.query.id)
        res.render('nutsdetail', {
            title: 'nuts Detail', 
            toShow: result
        });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a nuts.
// No body, no in path parameter, no query.
// Does not need to be async
exports.nuts_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('nutscreate', { title: 'nuts Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a nuts. 
// query provides the id 
exports.nuts_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await nuts.findById(req.query.id) 
        res.render('nutsupdate', { title: 'nuts Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.nuts_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await nuts.findById(req.query.id) 
        res.render('nutsdelete', { title: 'nuts Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
