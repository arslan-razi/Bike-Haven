const router = require('express').Router();

const bikeRoutes = require('./bike-routes');
const bikeCommentRoutes = require('./bike-comment-routes');
const PartCommentRoutes = require('./part-comments-routes');
const userRoutes = require('./user-routes');
const partRoutes = require('./part-routes');
const subRoutes = require('./subPart-routes');
const wishlistRoutes = require('./wishlist-routes');

router.use('/bikes', bikeRoutes);
router.use('/bikeComments', bikeCommentRoutes);
router.use('/partComments', PartCommentRoutes);
router.use('/users', userRoutes);
router.use('/parts', partRoutes);
router.use('/wishlist', wishlistRoutes);
router.use('/subParts', subRoutes);

module.exports = router;
