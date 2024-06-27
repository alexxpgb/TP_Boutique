const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        const ext = path.extname(file.originalname);
        cb(null, `temp-${Date.now()}${ext}`);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = allowedTypes.test(file.mimetype);

    if (extName && mimeType) {
        return cb(null, true);
    } else {
        cb(new Error('Only .png and .jpg files are allowed!'));
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter});

module.exports = upload;