import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/index.js";
import fileUpload from "express-fileupload";

const app = express();
app.use(
  fileUpload({
    useTempFiles: true,
    safeFileNames: true,
    preserveExtension: true,
    tempFileDir: `./temp`,
  })
);

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log("Server running at port 5000"));
