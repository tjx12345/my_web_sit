const router = require('koa-router')()
const articleController = require('../controllers/artcle');
router.get('/',articleController.showIndex)
.get('/:type',articleController.getTitle)

module.exports = router
