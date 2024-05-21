import express, { Application, Request, Response, NextFunction } from "express";
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

// Not Found Route Handler
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "An unexpected error occurred",
  });
});

console.log(process.cwd());

export default app;
