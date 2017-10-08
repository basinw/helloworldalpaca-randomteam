const router = require('express').Router()

const IdController = require('./controllers/Id.controller')
const team = ["Front-End","Design","Game","Infra"]

router.route('/id/reset').post(IdController.resetId)
router.route('/id/all').get(IdController.getAll)
router.route('/id/:id').get(IdController.getIdById)

module.exports = router