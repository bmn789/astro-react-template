import { getSecret } from "astro:env/server";
import mongoose from "mongoose";


const DB = getSecret("DB") as string
mongoose.connect(DB)
    .then(() => {
        console.log("db connected");
    })
    .catch((err) => {
        console.log("db error", err.message);
    })
