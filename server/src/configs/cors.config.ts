import { CorsOptions } from 'cors';

const whitelist = ['http://localhost:3000'];

export const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (origin === undefined || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error(`Origin(${origin}) not allowed by CORS`));
    }
  },
};
