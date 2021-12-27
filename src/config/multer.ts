import { existsSync, rm } from "fs";
import multer from "multer";
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "UploadFiles"))
  },
  filename: function (req, file, cb) {
    const filePath = path.join(__dirname, "..", `UploadFiles/${file.originalname}`);
    let uniqueSuffix = "";
    // if (existsSync(filePath)) {
    //   rm(filePath, () => console.log("remove " + filePath));
    // }
    uniqueSuffix = (file.originalname.includes("jfif") ? file.originalname.replace("jfif", "png") : file.originalname);
    //new Date().toISOString().replace(/:/g, '-') +
    cb(null, uniqueSuffix)
  }
});

const upload = multer({ storage: storage });
export default upload;
