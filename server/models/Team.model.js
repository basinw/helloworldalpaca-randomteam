// init Team
let TEAM = []
const _RESET = []
const _BACKUP = ['FrontEnd', 'Design', 'Infra']

let getAll = () => {
  return TEAM
}

module.exports = {
  add: args => {
    return new Promise(async (res, rej) => {
      try {
        TEAM.push(args)
        res(TEAM)
      } catch (error) {
        rej(error)
      }
    })
  },
  getAll: () => {
    return new Promise(async (res, rej) => {
      try {
        let team = await getAll()
        res(team)
      } catch (error) {
        rej(error)
      }
    })
  },
  reset: () => {
    return new Promise(async (res, rej) => {
      try {
        TEAM = _RESET
        res(TEAM)
      } catch (error) {
        rej(error)
      }
    })
  },
  put: args => {
    return new Promise(async (res, rej) => {
      try {
        TEAM = [args]
        res(TEAM)
      } catch (error) {
        rej(error)
      }
    })
  },
  setAll: () => {
    return new Promise(async (res, rej) => {
      try {
        TEAM = _BACKUP
        res(TEAM)
      } catch (error) {
        rej(error)
      }
    })
  }
}