// import parseStringAsArray from '../utils/ParseStringAsArray'

class SearchController {
  async index(req, res) {
    return res.json({ message: 'Hello' })
  }
}

export default new SearchController()
