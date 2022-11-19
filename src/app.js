import express from 'express';
import config from './config';
import cors from "cors"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors());
app.set("port", config.port || 3000)
export default app;