const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;
export const generateToken = (payload) => {
  console.log(secret);
  return jwt.sign(payload, secret, { expiresIn: "1h" });
};

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    return null;
  }
};
