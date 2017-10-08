const Id = require('../models/Id.model')


let count =     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const _BACKUP = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let members = []

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
    let name = req.body.name
    let resolveId
    let id
    let isFull = true
    for(let i=1; i<=10; i++){
      if(count[i] < 3){
        isFull = false
        break
      }
    }

    if(isFull) {
      res.json({
        status: false,
        message: 'full!'
      })
    }else{
      do{
        id = Math.floor(Math.random() * 10) + 1
      } while(count[id] >= 3)
      if (count[id]<3) {
        count[id]++
        resolveId = await Id.getOne(id-1)
        if(members[id-1] === undefined){
          
        }else{
          // members[id-1].push(req.body.name)

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