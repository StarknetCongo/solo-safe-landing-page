import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home_page/HomePage';

export default function MainRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
