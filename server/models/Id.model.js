// init ID
const ID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const _BACKUP = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let getId = args => {
  return ID[args]
}

let getAll = () => {
  return ID
}

module.exports = {
  reset: () => {
    return new Promise( async (res, rej) => {
      try {
        ID = _BACKUP
        let allId = await getAll()
        res(allId)
      } catch (error) {
        rej(error)
      }
    })
  },
  getOne: args => {
    return new Promise( async (res, rej) => {
      try {
        let id = await getId(args)
        res(id)
      } catch (error) {
        rej(error)
      }
    })
  },
  getAll: args => {
    return new Promise( async (res, rej) => {
      try {
        let data = head.frontEnd
        res(data)
      } catch (error) {
        rej(error)
      }
    })
  }
}