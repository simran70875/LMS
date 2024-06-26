const jwt = require("jsonwebtoken");

exports.authenticateToken = (req, res, next) => {
  //NOTE -- Extract the authorization header from the request
  const authHeader = req.headers["authorization"];

  //NOTE -- Check if the authorization header exists and split it to get the token
  const token = authHeader && authHeader.split(" ")[1];

  //NOTE -- If no token is found, send a 401 Unauthorized status
  if (token == null) return res.sendStatus(401);

  //NOTE -- Retrieve the secret key from environment variables (make sure to set this)
  const secretKey = process.env.JWT_SECRET_KEY;

  //NOTE -- Verify the token using JWT library
  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
