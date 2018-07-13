module.exports = app => {
  app.post("/register", (req, res) => {
    res.send({
      message: req.body.email + " Kişi Kaydedildi",
      req: req.body
    });
  });
};
