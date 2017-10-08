const Id = require('../models/Id.model')


// LIMIT MEMBERS
let _LIMIT = 3
let count = {
  frontend: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  design: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  infra: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}

const _BACKUP = {
  frontend: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  design: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  infra: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}
let members = {
  frontend: ['default'],
  design: ['default'],
  infra: ['default']
}

const team = ['FrontEnd', 'Design', 'Infra']

let setLimit = (team) => {
  switch (team) {
    case 'frontend':
      _LIMIT = 3;
      break;
    case 'design':
      _LIMIT = 1;
    case 'infra':
      _LIMIT = 1;
      break;
    default:
      _LIMIT = 3;
      break;
  }
}

module.exports = {
  resetId: async (req, res) => {
    let getCount
    if (req.body.key === 'hellofrontend') {
      getCount = count
      count = _BACKUP
    } else {
      res.json({
        status: false,
        message: 'error, reset failed.'
      })
    }
    res.json({
      status: true,
      count: getCount
    })
  },
  getIdById: async (req, res) => {
    let team = req.body.team
    let name = req.body.name
    if(team === undefined || name === undefined){
      res.json({
        status: false,
        message: 'request parameter not found!'
      })
      return
    }
    name = name.trim()
    team = team.toLowerCase()
    let resolveId
    let id
    let isFull = true

    await setLimit(team)

    for (let i = 1; i <= 10; i++) {
      if (count[team][i] < _LIMIT) {
        isFull = false
        break
      }
    }

    if (isFull) {
      res.json({
        status: false,
        message: 'Error, Team is Full!'
      })
    } else {
      
      do {
        id = Math.floor(Math.random() * 10) + 1
      } while (count[team][id] >= _LIMIT)
      
      if (count[team][id] < _LIMIT) {
        count[team][id]++
        resolveId = id

        if (members[team][id] === undefined) {
          members[team][id] = [name]
        } else {
          members[team][id].push(name)
        }

      } else {
        count[team][0]++
        resolveId = 0
      }

      if (resolveId === 0) {
        res.json({
          status: false,
          message: 'Error, Index out of team!'
        })
      } else {
        res.json({
          status: true,
          id: resolveId
        })
      }

    }
  },
  getAll: async (req, res) => {
    res.json({
      count: count,
      members: members
    })
  }
}