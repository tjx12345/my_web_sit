const router = require('koa-router')()
const articleController = require('../controllers/artcle');
router.get('/:type',articleController.getTitle)

module.exports = router
