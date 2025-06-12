function generateQR() {
  const text = document.getElementById('text').value;
  const qrDiv = document.getElementById('qrcode');
  qrDiv.innerHTML = ""; // Clear previous QR
  if (!text) {
    alert("Please enter some text!");
    return;
  }
  QRCode.toCanvas(text, { width: 200 }, function (err, canvas) {
    if (err) console.error(err);
    else qrDiv.appendChild(canvas);
  });
}
