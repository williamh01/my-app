import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/NavbarGuest'


function App() {
    return (
        <>
        <Navbar />
        <h1>Hello, this is the guest for msles</h1>
        <Outlet />
        </>
    )
}

export default App;