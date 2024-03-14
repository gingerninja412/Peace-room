const {Strategy, ExtractJwt } = require('passport-jwt')
const passportJWT = require('passport-jwt')
const dotenv = require('dotenv')
const passport = require('passport')
const jwt = require('jsonwebtoken')

dotenv.config()

const {
  fromExtractors,
  fromAuthHeaderWithScheme,
  fromAuthHeaderAsBearerToken,
} = ExtractJwt;



function cookieExtractor(req) {
  var token = null;
  if (req && req.cookies)
  {
    token = req.cookies.token;
  }
  return token;
};

const jwtOptions = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: process.env.TOKENSECRET,
};

const strategy = new Strategy(jwtOptions, async (jwt_payload, done) => {
  return done(null, jwt_payload.username)
});

passport.use(strategy);