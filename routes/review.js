const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controller/review.js");

// Review
// Post review route
router.post("/", validateReview, isLoggedIn, wrapAsync(reviewController.postReview));
  
  // Delete review route
  router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.deleteReview));
  

  module.exports = router;