import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const qrValue = JSON.stringify(form);

  return (
    <div style={{ padding: 20 }}>
      <input
        placeholder="Name"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />
      <br />

      <input
        placeholder="Email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />
      <br /><br />

      {(form.name || form.email) && (
        <QRCode value={qrValue} size={200} />
      )}
    </div>
  );
}
