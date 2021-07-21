const express = require('express')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname)
      }
})

const upload = multer({storage})
const routerUpload = express.Router() 


routerUpload.post('/upload', upload.single('file'), (req, res) =>{
    console.log('body', req.body)
     res.redirect('http://localhost:3000/')
 })
 
 //routerUpload.post('/upload', upload.single('file'), ProfessionalController.saveUpload)
 
 module.exports = routerUpload 