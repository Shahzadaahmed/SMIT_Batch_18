import express from "express";
import morgan from "morgan";
import cors from "cors";
import fs from "fs";
import path from "path";
import multer from "multer";

// Create uploads folder if not exist...!
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
};

const port = 5050;
const server = express();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueFileName = Date.now() + '-' + file.originalname; // 12345-ahmed.png
        cb(null, uniqueFileName)
    }
});
const uploadMedia = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 } // 5mb
});

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

server.post('/api/profile/upload', uploadMedia.single('image'), (req, res) => {
    console.log('File:', req.file);

    try {
        if (!req.file) {
            return res.status(400).send({
                status: false,
                message: "Image is required!"
            });
        };

        // 200:
        return res.status(200).send({
            status: true,
            message: "Image uploaded successfully!"
        });
    }

    catch (error) {
        console.log('Err while uploading media:', error);
    }
});

server.listen(port, () => {
    console.log('Your Node JS server is running!');
});

// Server space - Only for text data
// Storage - firebase cloudinary aws