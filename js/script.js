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

    setTimeout(function () {
        progress.style.width = "100%";
    }, 100);

    setTimeout(function () {
        preloader.style.display = "none";
    }, 3000);  
});
