const express=require("express");
const {
    getAllProducts,
    createProduct, 
    upDateProduct, 
    deleteProduct, 
    getProductDetails,
    createProductReview,
    getProductReviews,
    deleteReview,
}=require("../controlles/productControlles");
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");

const router=express.Router();


router.route("/products/").get(getAllProducts);
router.
route("/admin/products/new")
.post(isAuthenticatedUser,authorizeRoles("admin"), createProduct);
router
.route("/admin/products/:id")
.put(isAuthenticatedUser,authorizeRoles("admin"), upDateProduct)
.delete(isAuthenticatedUser,authorizeRoles("admin"), deleteProduct)
.get(getProductDetails);

router
.route("/product/:id")
.get(getProductDetails);

router
.route("/review")
.put(isAuthenticatedUser,createProductReview);

router
.route("/review")
.get(getProductReviews)
.delete(isAuthenticatedUser,deleteReview);

module.exports=router;