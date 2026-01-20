import { BrowserRouter, Routes, Route } from "react-router-dom";
import QRcode from "./qrcode/QRcode";
import Formpage from "./qrcode/Formpage";

export default function App6() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QRcode />} />
        <Route path="/form" element={<Formpage />} />
      </Routes>
    </BrowserRouter>
  );
}
