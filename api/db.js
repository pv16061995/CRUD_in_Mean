const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/crud_db',(err)=>{
	if(!err)
		console.log('Connect with db successfully.');
});


module.exports=mongoose;