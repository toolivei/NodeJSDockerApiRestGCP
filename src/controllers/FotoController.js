class FotoController {
  async store(req, res) {
    try {
      res.json(req.file);
    } catch (error) {
      res.json(error);
    }
  }
}

export default new FotoController();
