let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQr() {
    if (qrText.value.length > 0){
        qrImage.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
        qrText.value;
        imgBox.classList.add("show-img")
    }else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error')
        },1000)
    }
  
}

function shareQRCode() {
    if (qrImage.src) {
        if (navigator.share) {
            navigator.share({
                title: "QR Code",
                text: "Check out this QR code!",
                url: qrImage.src,
            })
                .then(() => console.log("Shared successfully"))
                .catch((error) => console.error("Share failed:", error));
        } else {
            const shareUrl = qrImage.src;

            const tempLink = document.createElement("a");
            tempLink.href = shareUrl;
            tempLink.setAttribute("target", "_blank");
            tempLink.setAttribute("rel", "noopener noreferrer");
            tempLink.style.display = "none";

            document.body.appendChild(tempLink);
            tempLink.click();

            document.body.removeChild(tempLink);
        }
    } else {
        alert("Generate a QR code first before sharing.");
    }
    
}
