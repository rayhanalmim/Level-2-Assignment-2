import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoute } from "./app/modules/product/product.route";
import { OrderRoute } from "./app/modules/order/order.route";
const app: Application = express();

app.use(express.json());
app.use(cors());

//applications route

app.use("/api", ProductRoute);
app.use("/api", OrderRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

console.log(process.cwd());

export default app;
