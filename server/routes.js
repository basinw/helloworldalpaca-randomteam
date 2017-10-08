const router = require('express').Router()

const IdController = require('./controllers/Id.controller')
const team = ["Front-End","Design","Game","Infra"]

router.route('/id/reset').post(IdController.resetId)
router.route('/id/:id').post(IdController.getIdById)
router.route('/id').get(IdController.getAll)

module.exports = router