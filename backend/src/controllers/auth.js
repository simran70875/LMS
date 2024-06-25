class AuthController {
  static welcome_msz = (req, res) => {
    res.send("Welcome to LMS backend");
  };
  static register = (req, res) => {
    const { role, Username, phone, email, password } = req.body;
  };
}

module.exports = { AuthController };
