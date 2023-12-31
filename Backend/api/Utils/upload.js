const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null, "../frontend/public/uploads/");
    },
    filename: (req,file,callback) => {
        callback(null,file.originalname);
    }
})

const upload = multer({ storage: storage });

module.exports = upload;