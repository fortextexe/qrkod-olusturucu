document.getElementById("current-year").textContent = new Date().getFullYear();

function generateQRCode() {
    var data = document.getElementById('data-input').value;
    if (!data) {
        alert("Lütfen geçerli bir metin veya URL girin.");
        return;
    }

    var canvas = document.getElementById('qr-canvas');
    var loadingMessage = document.getElementById('loading-message');
    var downloadButton = document.getElementById('download-btn');
    
    loadingMessage.style.display = 'block';
    canvas.style.display = 'none';

    var qrCodeSize = 180;

    QRCode.toCanvas(canvas, data, { width: qrCodeSize, height: qrCodeSize }, function (error) {
        if (error) {
            console.error("QR Kod Oluşturma Hatası:", error);
            alert("Bir hata oluştu.");
            loadingMessage.style.display = 'none';
        } else {
            loadingMessage.style.display = 'none';
            canvas.style.display = 'block';
            downloadButton.style.display = 'block';
        }
    });
}

function downloadQRCode() {
    var canvas = document.getElementById('qr-canvas');
    var link = document.createElement('a');
    link.href = canvas.toDataURL("image/png");
    link.download = 'qrkod.png';
    link.click();
}

window.addEventListener("load", function () {
    var preloader = document.getElementById("preloader");
    var progress = document.getElementById("progress");

    // Progress bar animasyonu, yavaşça dolacak
    setTimeout(function () {
        progress.style.width = "100%"; // Çubuk sağa kadar dolacak
    }, 100);

    // Yükleme tamamlandığında preloader gizlenir
    setTimeout(function () {
        preloader.style.display = "none";
    }, 2000);  // 3 saniye sonra kaybolur
});

// CSS stillerini JS'e ekledik
const style = document.createElement("style");
style.innerHTML = `
    body {
        font-family: 'Poppins', sans-serif;
        background-image: url('https://r.resimlink.com/4Fx6zNP.jpg');
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-size: cover;
        background-position: center;
        text-align: center;
    }
    .container {
        background-color: rgba(30, 30, 30, 0.3);
        padding: 30px;
        border-radius: 15px;
        width: 100%;
        max-width: 450px;
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);
        height: auto;
        min-height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .header {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    .logo {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        background-image: url('https://r.resimlink.com/snSH9ycOrGdU.png');
        background-size: contain;
        background-position: center;
    }
    h1 {
        font-size: 28px;
        font-weight: 600;
        color: #E5E5E5;
    }
    input {
        padding: 15px;
        font-size: 16px;
        width: 100%;
        border: none;
        border-radius: 25px;
        margin-bottom: 20px;
        background-color: #333;
        color: white;
        outline: none;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        transition: box-shadow 0.3s ease;
    }
    input:focus {
        box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8);
    }
    button {
        padding: 12px 20px;
        font-size: 16px;
        width: 100%;
        border: none;
        border-radius: 25px;
        background-color: #fff;
        color: #333;
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease;
    }
    button:hover {
        background-color: #f4f4f4;
        color: #000;
    }
    canvas {
        margin-top: 20px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 80%;
        height: auto;
        display: none;
    }
    #loading-message {
        color: #fff;
        font-size: 18px;
        margin-top: 20px;
        display: none;
    }
    #download-btn {
        margin-top: 20px;
        padding: 12px 20px;
        font-size: 16px;
        border: none;
        border-radius: 25px;
        background-color: #fff;
        color: #333;
        cursor: pointer;
        width: 100%;
        display: none;
    }
    #download-btn:hover {
        background-color: #f4f4f4;
        color: #000;
    }
    .footer {
        margin-top: 30px;
        font-size: 14px;
        color: white;
    }
    .footer a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        transition: color 0.3s ease;
    }
    .footer a:hover {
        text-decoration: underline;
    }
    #preloader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('https://r.resimlink.com/4Fx6zNP.jpg');
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .spinner {
        background-image: url('https://r.resimlink.com/snSH9ycOrGdU.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 60px;
        height: 60px;
        margin-bottom: 20px;
    }
    .progress-bar {
        width: 150px;
        height: 4px;
        background-color: rgba(255, 255, 255, 0.2);
        position: relative;
        overflow: hidden;
    }
    .progress {
        position: absolute;
        height: 100%;
        background-color: white;
        width: 100px;
        animation: progressAnimation 3s linear infinite;
    }
    @keyframes progressAnimation {
        0% {
            transform: translateX(-100%);
        }
        50% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(-100%);
        }
    }
`;
document.head.appendChild(style);
