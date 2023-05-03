var multer = require('multer')
const path = require('path');
exports.excelupload = (name, file) => {
var Excelupload = multer.diskStorage({
    destination: (req, file, cb) => {

        if (file.fieldname === "excelfile") {
            cb(null, path.join(process.cwd(), '/uploads/subclassecxel/'));
        }
    },
    filename: (req, file, cb) => {
        if (file.fieldname === "excelfile") {
            cb(null, file.fieldname );
        }
    }
   
});
var upload = multer({ storage: Excelupload })

return upload.fields(file)
}