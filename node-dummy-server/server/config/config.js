// window npm install --global --production windows-build-tools
// --------------------------------------------------------------------
const Joi = require('joi');

// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow(['development', 'production', 'test', 'provision'])
    .default('development'),
  SERVER_PORT: Joi.number()
    .default(4040),
  MONGOOSE_DEBUG: Joi.boolean()
    .when('NODE_ENV', {
      is: Joi.string().equal('development'),
      then: Joi.boolean().default(true),
      otherwise: Joi.boolean().default(false)
    }),
  JWT_SECRET: Joi.string().min(16).required(),
  IMAGE_SUBPATH: Joi.string().required(),
  MONGO_HOST: Joi.string().required(),
  MONGO_PORT: Joi.number()
    .default(27017),

  FileLogEnable: Joi.boolean()
}).unknown()
  .required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);

const config = {
  env: envVars.NODE_ENV,
  port: envVars.SERVER_PORT,
  mongooseDebug: envVars.MONGOOSE_DEBUG,
  imageSubPath: envVars.IMAGE_SUBPATH,
  jwtSecret: envVars.JWT_SECRET,
  frontend: envVars.MEAN_FRONTEND || 'angular',
  mongo: {
    host: envVars.MONGO_HOST,
    port: envVars.MONGO_PORT
  },
  clientName: "devs", // "devs", "terra", "da" : for init country if not exist

  configDefault: { // init config, copy from globals.ts
    imgeLogo: "/image/logo/terra.png",
    imgeLogo2: "/image/logo/terra.png",
    configHome: {
      color: 'white',
      background: "#adcf43"
    }
  },

  FileLogEnable: envVars.FileLogEnable // only for dev local
};
module.exports = config;
