import 'dotenv/config';
import cors from 'cors';
import express, { Request, Response } from 'express';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Server is running on port ${process.env.PORT || 3000} in ${process.env.NODE_ENV} mode`,
  );
});