const downloadQRCodeFunc = (svgElement: Node) => {
    const svgXml = new XMLSerializer().serializeToString(svgElement);
    const img = new Image();
    img.src = `data:image/svg+xml;base64,${btoa(svgXml)}`;
    img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.drawImage(img, 0, 0);
            const pngData = canvas.toDataURL('image/png')
            const downloadLink = document.createElement('a');
            // add border to image
            const borderCanvas = document.createElement('canvas');
            borderCanvas.width = canvas.width + 20;
            borderCanvas.height = canvas.height + 20;
            const borderCtx = borderCanvas.getContext('2d');
            if (borderCtx) {
                borderCtx.fillStyle = 'white';
                borderCtx.fillRect(0, 0, borderCanvas.width, borderCanvas.height);
                borderCtx.drawImage(canvas, 10, 10);
                downloadLink.download = 'qr-code.png';
                downloadLink.href = borderCanvas.toDataURL('image/png');
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            }
        }
    };
}

export default downloadQRCodeFunc;