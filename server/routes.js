const router = require('express').Router()

const IdController = require('./controllers/Id.controller')
const TeamController = require('./controllers/Team.controller')

router.route('/id').get(IdController.getAll)
router.route('/id/reset').post(IdController.resetId)
router.route('/id').post(IdController.getIdById)

router.route('/team').get(TeamController.getAll)
router.route('/team/:team').post(TeamController.addTeam)
router.route('/team/reset').post(TeamController.reset)

module.exports = router