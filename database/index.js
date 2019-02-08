var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fetcher');


var productSchema = new mongoose.Schema({
	uniqueID : Number, 
	price : Number, 
	quantity : Number, 
	isPrime : String, 
	inCart : Number, 
	cartQuantity : Number
})

var Product = mongoose.model('Product', productSchema); 


  var uniqueIDs = [ 1,   2,   3,   4,   5,   6,   7,   8,   9,   10,   11,   12,   13,
    14,   15,   16,   17,   18,   19,   20,   21,   22,   23,   24,   25,
    26,   27,   28,   29,   30,   31,   32,   33,   34,   35,   36,   37,
    38,   39,   40,   41,   42,   43,   44,   45,   46,   47,   48,   49,
    50,   51,   52,   53,   54,   55,   56,   57,   58,   59,   60,   61,
    62,   63,   64,   65,   66,   67,   68,   69,   70,   71,   72,   73,
    74,   75,   76,   77,   78,   79,   80,   81,   82,   83,   84,   85,
    86,   87,   88,   89,   90,   91,   92,   93,   94,   95,   96,   97,
    98,   99,   100 ];

  var isPrime = [false,   true,   false,   false,   false,   false, true,
    true,   true,   false,   false,   false,   false,   false, false,   false,
    true,   false,   false,   false,   false,   true, false,   false,   false,
    false,   true,   true,   false,   false, true,   true,   false,   true,
    true,   true,   true,   true, false,   true,   false,   false,   false,
    true,   false,   true, false,   false,   true,   true,   true,   true,
    false,   true, false,   false,   true,   true,   true,   false,   true,
    true, false,   false,   true,   false,   false,   false,   true,   false,
    false,   true,   true,   false,   true,   false,   true,   true, true,   true,
    false,   true,   true,   false,   true,   true, false,   false,   false,
    true,   true,   true,   true,   false, true,   false,   true,   false,
    false,   true ];

  var randomPrices = [ 98.86,   94.91,   65.39,   46.23,   59.8,
    23.44,   11.02,   93.47,   22.53,   84.09,   18.68,   93.29,   45.99,
    55.19,   29.85,   28.06,   50.37,   29.21,   11.76,   52.34,   50.06,
    78.83,   77.14,   16.94,   62.4,   50.61,   33.74,   25.92,   18.41,
    21.06,   44.24,   69.28,   17.93,   13.74,   58.53,   20.56,   70.67,
    67.45,   78.01,   33.15,   88.87,   75.14,   24.74,   97.95,   63.65,
    87.57,   28.92,   80.02,   47.52,   45.45,   46.47,   36.71,   85.49,
    1.93,   34.23,   91.43,   93.5,   92.19,   10.59,   72.94,   26.93,
    51.13,   20.23,   55.3,   45.48,   73.04,   98.89,   74.03,   97.17,
    16.7,   26.91,   26.96,   88.51,   8.54,   22.72,   48.16,   34.94,
    22.45,   99.21,   63.8,   40.14,   7.38,   3.41,   61.77,   85.76,
    85.18,   92.74,   48.35,   43.15,   25.19,   98.91,   4.51,   93.24,
    59.91,   87.58,   45.07,   61.8,   68.72,   35.18,   75.98 ];

  var randomQuantity = [ 72,   68,   89,   58,   80,   78,   59,   59,
    72,   39,   6,   18,   20,   59,   51,   90,   52,   86,   37,   54,
    100,   38,   16,   72,   53,   45,   40,   66,   75,   36,   45,   57,
    0,   81,   29,   52,   6,   52,   39,   80,   10,   62,   37,   59,
    49,   97,   21,   41,   6,   74,   36,   53,   35,   70,   75,   40,
    70,   92,   98,   4,   30,   58,   28,   30,   18,   99,   27,   33,
    71,   65,   44,   57,   87,   56,   42,   44,   29,   74,   4,   72,
    20,   79,   93,   26,   41,   90,   72,   37,   69,   39,   32,   9,
    12,   75,   63,   18,   75,   90,   18,   8 ];

  var cartQuantity = [ 0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0 ];

  var inCart = [false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false,
    false, false];


  var i = 0;
  while(i !== 100){
    var productToCreate = new Product({
      uniqueID : uniqueIDs[i],
      price : randomPrices[i],
      quantity : randomQuantity[i],
      isPrime : isPrime[i],
      inCart : inCart[i],
      cartQuantity : cartQuantity[i]
    })
    productToCreate.save((err) => {
	  console.log('SAVED');
    })  
    i++;
 }

 

