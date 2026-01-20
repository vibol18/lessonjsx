import QRCode from "react-qr-code";

export default function QRcode() {
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h2>Scan This QR Code</h2>

      <QRCode
        value="http://localhost:3000/form"
        size={250}
      />

      <p>Scan to open the form</p>
    </div>
  );
}
