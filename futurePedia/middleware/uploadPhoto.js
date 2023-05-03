var multer = require('multer')
exports.uploadPhoto = (name, image) => {

 console.log("name",name)
 console.log("image",image)
    var storage = multer.diskStorage({
        destination: (req, file, cb) => {
            // if (file.fieldname === "profile_photo") {
                var fs = require('fs');
                var dir = './uploads/'+name;
                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir, { recursive: true });
                }
                cb(null, './uploads/'+name)
           // }
        },
        filename: (req, file, cb) => {
            // if (file.fieldname === "profile_photo") {
                cb(null, file.fieldname + '-' + Date.now() + '.jpg');
            //}
        }
    })

    var upload = multer({ storage: storage })

    return upload.fields(image)
}