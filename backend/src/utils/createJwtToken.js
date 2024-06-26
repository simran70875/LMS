const jwt = require("jsonwebtoken");

exports.getJwtToken = async (id) => {
  //NOTE -- Payload typically includes user information, such as user ID
  const payload = {
    time: Date(),
    userId: id,
  };

  //NOTE -- Secret key should be stored securely (e.g., in environment variables)
  const secretKey = process.env.JWT_SECRET_KEY;

  //NOTE -- Options can include token expiration
  const options = {
    expiresIn: "1h", // Token expires in 1 hour
  };

  return jwt.sign(payload, secretKey, options);
};
