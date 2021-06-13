const router = require('express').Router();
const atelier = require('../helpers/atelier');

router.get('/products', atelier.getProducts);

router.get('/qa/questions', atelier.getQuestions);

router.get('/products/:id/styles', atelier.getProductStyles);

// router.get('/reviews2/:id', atelier.getReviews);
router.get('/reviews2/:id/:count/:sort', atelier.getReviews);

router.put('/reviews2/:id/helpful', atelier.updateHelpfulReview);

router.get('/reviews/meta/:id', atelier.getReviewMetadata);

router.get('/related/:id', atelier.getRelatedItems);

router.get('/products/:id', atelier.getOneProduct);

router.get('/qa/questions/:question_id/answers', atelier.getAnswersByQuestionId);

router.put('/qa/answers/:answer_id/helpful', atelier.updateHelpfulAnswer);

module.exports = router;
