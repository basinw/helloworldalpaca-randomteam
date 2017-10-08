const Id = require('../models/Id.model')

// exception index 0
let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let members = []
team = ["Front-End","Design","Game","Infra"]

module.exports = {
  resetId: async (req, res) => {
    let allId

    if (req.body.key==='hellofrontend') {
      allId = await Id.reset(1)
    } else {
      res.json({
        status: false,
        message: 'error, reset failed.'
      })
    }

    console.log(allId)
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
    
    res.json({
      count: count,
      members: members
    })
  },
  reset: (req, res) => {
    let code = req.params.code
    if(code === 'aLpacA') {
      count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      res.json({
        status: true,
        message: 'reset success'
      })
    }else{
      res.json({
        status: false,
        message: 'reset fail!'
      })
    }
  }
}