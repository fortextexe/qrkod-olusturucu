document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('container');
    container.style.cssText = `
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
    `;

    const input = document.getElementById('data-input');
    input.style.cssText = `
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
    `;
    
    input.addEventListener('focus', function () {
        input.style.boxShadow = '0 0 10px 2px rgba(255, 255, 255, 0.8)';
    });

    input.addEventListener('blur', function () {
        input.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
    });

    const button = document.querySelector('button');
    button.style.cssText = `
        padding: 12px 20px;
        font-size: 16px;
        width: 100%;
        border: none;
        border-radius: 25px;
        background-color: #fff;
        color: #333;
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease;
    `;
    
    button.addEventListener('mouseover', function () {
        button.style.backgroundColor = '#f4f4f4';
        button.style.color = '#000';
    });
    
    button.addEventListener('mouseout', function () {
        button.style.backgroundColor = '#fff';
        button.style.color = '#333';
    });

    const canvas = document.getElementById('qr-canvas');
    canvas.style.cssText = `
        margin-top: 20px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 80%;
        height: auto;
        display: none;
    `;

    const loadingMessage = document.getElementById('loading-message');
    loadingMessage.style.cssText = `
        color: #fff;
        font-size: 18px;
        margin-top: 20px;
        display: none;
    `;

    const downloadButton = document.getElementById('download-btn');
    downloadButton.style.cssText = `
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
    `;
    
    downloadButton.addEventListener('mouseover', function () {
        downloadButton.style.backgroundColor = '#f4f4f4';
        downloadButton.style.color = '#000';
    });
    
    downloadButton.addEventListener('mouseout', function () {
        downloadButton.style.backgroundColor = '#fff';
        downloadButton.style.color = '#333';
    });

    const footer = document.querySelector('.footer');
    footer.style.cssText = `
        margin-top: 30px;
        font-size: 14px;
        color: white;
    `;

    const footerLink = footer.querySelector('a');
    footerLink.style.cssText = `
        color: white;
        text-decoration: none;
        font-weight: bold;
        transition: color 0.3s ease;
    `;
    
    footerLink.addEventListener('mouseover', function () {
        footerLink.style.textDecoration = 'underline';
    });
});
