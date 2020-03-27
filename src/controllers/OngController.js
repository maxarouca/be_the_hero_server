// import parseStringAsArray from '../utils/ParseStringAsArray'

class OngController {
  async index(req, res) {
    return res.json({ message: 'Hello' })
  }

  async store(req, res) {
    const data = req.body

    console.log(data)

    return res.json({ message: 'Hello' })
  }
}

export default new OngController()
