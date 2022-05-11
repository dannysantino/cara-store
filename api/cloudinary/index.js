const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    secure: true
});

const productStorage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => ({
        folder: 'Projects/Cara Store/products',
        public_id: file.originalname.split('.')[0],
        unique_filename: false,
        allowed_formats: ['jpeg', 'jpg', 'png']
    })
});

const userStorage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => ({
        folder: 'Projects/Cara Store/users',
        public_id: file.originalname.split('.')[0],
        unique_filename: false,
        allowed_formats: ['jpeg', 'jpg', 'png']
    })
});

module.exports = {
    cloudinary,
    productStorage,
    userStorage
}