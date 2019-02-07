var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var productSchema = mongoose.Schema({
	productID : Number, 
	uniqueID : Number, 
	price : Number,
	quantity : Number, 
	isPrime : String, 
	inCart : String, 
	cartQuantity : Number, 
	store : String;
})

var Product = mongoose.model('Product', productSchema);

