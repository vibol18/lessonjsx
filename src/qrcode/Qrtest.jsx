import { useState } from "react";
import QRCode from "react-qr-code";

export default function Qrtest() {
  const [value, setValue] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h2>QR Generator</h2>

      <input
        type="text"
        placeholder="Enter text or URL"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          padding: 8,
          width: "100%",
          maxWidth: 300,
          marginBottom: 20,
        }}
      />

      {value.trim() !== "" && (
        <QRCode
          value={value}
          size={200}
          bgColor="#ffffff"
          fgColor="#000000"
          level="Q"
        />
      )}
    </div>
  );
}
