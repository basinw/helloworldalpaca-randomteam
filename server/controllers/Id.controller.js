const Id = require('../models/Id.model')


let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const _BACKUP = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// LIMIT MEMBERS
let _LIMIT = 3
let members = ['default']

const team = ['FrontEnd', 'Design', 'Infra']

let setLimit = (team) => {
  switch (team) {
    case 'FrontEnd':
      _LIMIT = 3;
      break;
    case 'Design':
      _LIMIT = 1;
    case 'Infra':
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
    let resolveId
    let id
    let isFull = true

    await setLimit(team)

    for (let i = 1; i <= 10; i++) {
      if (count[i] < 3) {
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
      } while (count[id] >= _LIMIT)
      
      if (count[id] < _LIMIT) {
        count[id]++
        resolveId = id

        if (members[id] === undefined) {
          members[id] = [name]
        } else {
          members[id].push(name)
        }

      } else {
        count[0]++
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