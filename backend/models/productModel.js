const mongoose = require("mongoose");

const productSchema =new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please Enter Product Name"],
        trim: true
    },
    description: {
        type: String,
        require: [true, "Please Enter Product Description"]
    },
    price: {
        type: Number,
        require: [true, "Please Enter Product Price"],
        maxLength: [5, "Price connot 5 characters"]
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: Number,
                require: true
            },
            url: {
                type: Number,
                require: true
            },
        }

    ],
    category: {
        type: String,
        require: [true, "Please Enter Product Category"],
    },
    Stock: {
        type: Number,
        require: [true, "Please Enter Product Stock"],
        maxLength: [4, "Stock cannot exceed 4 characters"],
        default: 1
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
                required: true,
              },
            name: {
                type: String,
                require: true
            },
            ratings: {
                type: Number,
                require: true
            },
            comment: {
                type: String,
                require: true
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
    createdAt:{
        type:Date,
        default:Date.now 
    }

})
module.exports=mongoose.model("Product",productSchema);