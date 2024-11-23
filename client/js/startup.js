window.addEventListener("load", ()=>{
    document.getElementById("startup-system-logo").style.opacity="90%"
    document.getElementById("startup-system-name").style.opacity="1"

    setTimeout(()=>{document.getElementById("loader").style.opacity="1"},5000)
    setTimeout(()=>{
        document.getElementById("startup-system-logo").style.display="none"
        document.getElementById("startup-system-name").style.display="none"
        document.getElementById("loader").style.display="none"
    },10000)
    setTimeout(()=>{/*YÖNLENDİRME YAPILACAK*/},11000)
})