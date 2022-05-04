import { CorsOptions } from "cors";

const whitelist = ["http://localhost:3000"];

export const corsOptions: CorsOptions = {
    origin: (origin, cb) => {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            cb(null, true);
        } else {
            cb(new Error(`Origin ${origin} not allowed by CORS.`));
        }
    }
}