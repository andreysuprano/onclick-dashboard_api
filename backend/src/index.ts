import "reflect-metadata";
import { createConnection } from 'typeorm';
import routes from "./routes";
import * as express from "express";
import * as bodyParser from "body-parser";

const app = express();

createConnection();

app.use(bodyParser.json());
app.use(routes);

app.listen(3333);


