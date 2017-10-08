const Team = require('../models/Team.model')

let team

module.exports = {
  resetTeam: async (req, res) => {
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
    if (req.body.key === 'hellofrontend') {
      team = await Team.add(teamName)
    } else {
      res.json({
        status: false,
        message: 'error, add team failed.'
      })
    }
    res.json({
      status: true,
      team: team
    })
  },
  pushTeam: async (req, res) => {
    let teamName = await req.params.team
    if (req.body.key === 'hellofrontend') {
      team = await Team.put(teamName)
    }
    res.json({
      status: true,
      team: team
    })
  },
  setAll: async (req, res) => {
    if (req.body.key === 'hellofrontend') {
      team = await Team.setAll()
    }
    res.json({
      status: true,
      team: team
    })
  },
}