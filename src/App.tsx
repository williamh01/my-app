import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage'
import AdminPage from './components/adminPages/AdminPage'
import GuestPage from './components/guestPages/GuestPage'

import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutAdmin from './components/adminPages/LayoutAdmin'
import DrawAdmin from './components/adminPages/DrawAdmin';
import PongAdmin from './components/adminPages/PongAdmin';

import LayoutGuest from './components/guestPages/LayoutGuest'
import DrawGuest from './components/guestPages/DrawGuest';
import PongGuest from './components/guestPages/PongGuest';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="/layoutAdmin" element={<LayoutAdmin />} />
        <Route path="/drawAdmin" element={<DrawAdmin />} />
        <Route path="/pongAdmin" element={<PongAdmin />} />
        
        <Route path="/guestPage" element={<GuestPage />} />
        <Route path="/layoutGuest" element={<LayoutGuest />} />
        <Route path="/drawGuest" element={<DrawGuest />} />
        <Route path="/pongGuest" element={<PongGuest />} />
          
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
