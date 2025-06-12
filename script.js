function generateQR() {
  const text = document.getElementById('text').value;
  const qrcodeContainer = document.getElementById('qrcode');
  qrcodeContainer.innerHTML = ""; // Clear previous QR

  if (text.trim() !== "") {
    QRCode.toCanvas(text, { width: 200 }, function (err, canvas) {
      if (err) console.error(err);
      else qrcodeContainer.appendChild(canvas);
    });
  }
}
