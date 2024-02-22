import multer from 'multer'

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./Uploads')
    },
    filename:(req,file,cb)=>{
        const uniqueSuffix = new Date().getDay()
        console.log(file)
        cb(null,`${uniqueSuffix}-${file.originalname}`)
    },
})

const uploads = multer({storage})

export default uploads;