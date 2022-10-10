const { Schema, model } = require('mongoose');

const productSchema = new Schema(
    {
        name: {
            type: String,
            required:[true, 'Please input name of the product'],
            unique :true
        },
        displaysize: String,
        color: String,
        storage : String,
        price : Number,
        image: String,
        about:[String],
        specs:[String]
    },
    {
        timestamps: true
    }
);

module.exports = model('Product', productSchema);