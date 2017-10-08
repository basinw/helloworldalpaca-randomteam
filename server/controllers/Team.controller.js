const Team = require('../models/Team.model')

let team

module.exports = {
  reset: async (req, res) => {
    if (req.body.key === 'hellofrontend') {
      team = await Team.reset()
    } else {
      res.json({
        status: false,
        message: 'error, reset failed.'
      })
    }
    res.json({
      status: true,
      team: team
    })
  },
  getAll: async (req, res) => {
    let team = await Team.getAll()
    res.json({
      team: team
    })
  },
  addTeam: async (req, res) => {
    let teamName = await req.params.team
    let team = await Team.add(teamName)
    res.json({
      status: true,
      team: team
    })
  }
}