const fs = require('fs')
const path = require('path')

const banners = {
    folder: path.resolve(__dirname + '', '../', 'public', 'images', 'banners'),
    fileName: '.png'
}
const profile = {
    folder: path.resolve(__dirname + '', '../', 'public', 'images', 'logotipo'),
    fileName: 'logotipo.png'
}
const classe = {
    folder: path.resolve(__dirname + '', '../', 'public', 'images', 'classes'),
    fileName: '.png'
}
const menu = {
    folder: path.resolve(__dirname + '', '../', 'public', 'images', 'menus'),
    fileName: '.png'
}

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(file)
        const isAccepted = ['image/png', 'image/jpg', 'image/jpeg']
        if (file.mimetype == isAccepted[0] || file.mimetype == isAccepted[1] || file.mimetype == isAccepted[2]) {

            if (req.body.banner) {
                cb(null, banners.folder)
            }
            if (req.body.classe) {
                cb(null, classe.folder)
            }
            if (file.fieldname == 'menus') {
                cb(null, menu.folder)
            }
            if (file.fieldname == 'profile') {
                cb(null, profile.folder)
            }

        } else {
            return false
        }
    },
    filename: function (req, file, cb) {
        //function para contar arquivos
        if (req.body.banner) {
            fs.readdir(banners.folder, (err, paths) => {
                cb(null, 'sharp0' + req.body.banner + banners.fileName)
            })
        }
        if (req.body.classe) {
            fs.readdir(classe.folder, (err, paths) => {
                cb(null, 'sharp0' + req.body.classe + classe.fileName)
            })
        }
        if (file.fieldname == 'menus') {
            fs.readdir(menu.folder, (err, paths) => {
                if(req.body.menus == undefined) cb(null, false)
                else cb(null, 'sharp0' + req.body.menus + menu.fileName)
            })
        }
        if (file.fieldname == 'profile') {
            fs.readdir(profile.folder, (err, paths) => {
                //def nomes do arquivos
                cb(null, 'sharp_' + profile.fileName)
            })
        }
    }
})
const upload = multer({
    storage,
    fileFilter: (req, res, cb) => {
        cb(null, true)
    }
})


module.exports = { upload, banners, profile, classe, menu }






