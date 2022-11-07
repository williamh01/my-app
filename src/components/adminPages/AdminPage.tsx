import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/NavbarAdmin'


function App() {
    return (
        <>
        <Navbar />
        <h1>Hello, this is the admin for msles</h1>
        <Outlet />
        </>
    )
}

export default App;