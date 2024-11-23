// Modüller:
const express = require("express")
const app = express()
const path = require("path")
const {htmlPath} = require("./server/functions")


// Static klasörler:
app.use(express.static(path.join(__dirname, "client"), {
    setHeaders: (res)=>{
        res.set("Cache-Control", "no-store")
    }
}))


// Router:
app.use("/", (req, res)=>{
    res.sendFile(htmlPath("startup"))
})


// Server başlıyor...:
app.listen(3333)