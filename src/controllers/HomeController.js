class HomeController {
  async index(req, res) {
    try {
      res.json('Index');
    } catch (error) {
      res.json(error);
    }
  }
}

export default new HomeController();
