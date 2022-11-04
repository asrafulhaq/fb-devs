import mongoose from "mongoose";


// create student schema
const productSchema = mongoose.Schema({

    name : {
        type : String,
        required : true,
        trim : true
    },
    regular_price : {
        type : Number,
        required : true,
    },
    sale_price : {
        type : Number,
    },
    stock : {
        type : Number,
    },
    photo : {
        type : String
    },

  

}, {
    timestamps : true
});




// export model 
export default mongoose.model('Product', productSchema);