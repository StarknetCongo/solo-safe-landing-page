import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home_page/HomePage";
import Header from "./global/header/Header";

export default function MainRouter() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
