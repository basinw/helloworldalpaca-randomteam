const Id = require('../models/Id.model')

let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const _BACKUP = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let members = []
team = ["Front-End","Design","Game","Infra"]

module.exports = {
  resetId: async (req, res) => {
    let allId
    if (req.body.key==='hellofrontend') {
      allId = await Id.reset()
      count = _BACKUP
    } else {
      res.json({
        status: false,
        message: 'error, reset failed.'
      })
    }
    res.json({
      status: true,
      id: allId
    })
  },
  getIdById: async (req, res) => {
    let id = +req.params.id
    let resolveId
    if (count[id]<3) {
      count[id]++
      resolveId = await Id.getOne(id-1)
      members[id-1].push(req.body.name)
    } else {
      count[0]++
      resolveId = 0
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