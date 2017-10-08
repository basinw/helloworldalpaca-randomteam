const Id = require('../models/Id.model')

// exception index 0
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
    let allId, getCount
    if (req.body.key==='hellofrontend') {
      allId = await Id.reset()
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
      id: allId,
      count: getCount
    })
  },
  getIdById: async (req, res) => {
    let resolveId
    let id = await +req.params.id
    let team = await req.body.team

    await setLimit(team)

    if (count[id]<_LIMIT) {
      count[id]++
      resolveId = await Id.getOne(id-1)
      
      if (members[id]!=undefined) {
        members[id].push(req.body.name)
      } else {
        members[id] = [req.body.name];
      }

    } else {
      count[0]++
      resolveId = 0
    }

    if (resolveId === 0) {
      res.json({
        status: false,
        message: 'index out of team!'
      })
    } else {
      res.json({
        status: true,
        id: resolveId
      })
    }
  },
  getAll: async (req, res) => {
    let id = await Id.getAll()
    res.json({
      count: count,
      id: id,
      members: members
    })
  }
}