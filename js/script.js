document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById('container');
    container.style.backgroundColor = 'rgba(30, 30, 30, 0.3)';
    container.style.padding = '30px';
    container.style.borderRadius = '15px';
    container.style.width = '100%';
    container.style.maxWidth = '450px';
    container.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.6)';
    container.style.height = 'auto';
    container.style.minHeight = '400px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.justifyContent = 'space-between';
    container.style.alignItems = 'center';

    var header = document.querySelector('.header');
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.marginBottom = '20px';

    var logo = document.querySelector('.logo');
    logo.style.width = '40px';
    logo.style.height = '40px';
    logo.style.marginRight = '10px';
    logo.style.backgroundImage = 'url("https://r.resimlink.com/snSH9ycOrGdU.png")';
    logo.style.backgroundSize = 'contain';
    logo.style.backgroundPosition = 'center';

    var h1 = document.querySelector('h1');
    h1.style.fontSize = '28px';
    h1.style.fontWeight = '600';
    h1.style.color = '#E5E5E5';

    var input = document.getElementById('data-input');
    input.style.padding = '15px';
    input.style.fontSize = '16px';
    input.style.width = '100%';
    input.style.border = 'none';
    input.style.borderRadius = '25px';
    input.style.marginBottom = '20px';
    input.style.backgroundColor = '#333';
    input.style.color = 'white';
    input.style.outline = 'none';
    input.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
    input.style.transition = 'box-shadow 0.3s ease';

    input.addEventListener('focus', function() {
        input.style.boxShadow = '0 0 10px 2px rgba(255, 255, 255, 0.8)';
    });

    var button = document.querySelector('button');
    button.style.padding = '12px 20px';
    button.style.fontSize = '16px';
    button.style.width = '100%';
    button.style.border = 'none';
    button.style.borderRadius = '25px';
    button.style.backgroundColor = '#fff';
    button.style.color = '#333';
    button.style.cursor = 'pointer';
    button.style.transition = 'background-color 0.3s ease, color 0.3s ease';

    button.addEventListener('mouseover', function() {
        button.style.backgroundColor = '#f4f4f4';
        button.style.color = '#000';
    });

    var canvas = document.getElementById('qr-canvas');
    canvas.style.marginTop = '20px';
    canvas.style.display = 'block';
    canvas.style.marginLeft = 'auto';
    canvas.style.marginRight = 'auto';
    canvas.style.maxWidth = '80%';
    canvas.style.height = 'auto';
    canvas.style.display = 'none';

    var loadingMessage = document.getElementById('loading-message');
    loadingMessage.style.color = '#fff';
    loadingMessage.style.fontSize = '18px';
    loadingMessage.style.marginTop = '20px';
    loadingMessage.style.display = 'none';

    var downloadButton = document.getElementById('download-btn');
    downloadButton.style.marginTop = '20px';
    downloadButton.style.padding = '12px 20px';
    downloadButton.style.fontSize = '16px';
    downloadButton.style.border = 'none';
    downloadButton.style.borderRadius = '25px';
    downloadButton.style.backgroundColor = '#fff';
    downloadButton.style.color = '#333';
    downloadButton.style.cursor = 'pointer';
    downloadButton.style.width = '100%';
    downloadButton.style.display = 'none';

    downloadButton.addEventListener('mouseover', function() {
        downloadButton.style.backgroundColor = '#f4f4f4';
        downloadButton.style.color = '#000';
    });

    var footer = document.querySelector('.footer');
    footer.style.marginTop = '30px';
    footer.style.fontSize = '14px';
    footer.style.color = 'white';

    var footerLink = document.querySelector('.footer a');
    footerLink.style.color = 'white';
    footerLink.style.textDecoration = 'none';
    footerLink.style.fontWeight = 'bold';
    footerLink.style.transition = 'color 0.3s ease';

    footerLink.addEventListener('mouseover', function() {
        footerLink.style.textDecoration = 'underline';
    });
});
