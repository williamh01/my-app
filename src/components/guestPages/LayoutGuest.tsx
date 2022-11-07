import React from 'react';
import Navbar from '../Navbar/NavbarGuest'
import { useState } from 'react';

import DraggableBox from '../layoutComponents/DraggableBox';

function App() {

    const [numberBoxes, setNumberBoxes] = useState([<DraggableBox />, <DraggableBox />, <DraggableBox />])
    
    return (
        <>
        <Navbar />
        <div>
            <div className="border border-dark rounded container-lg" style={{ position: 'relative', height: '50vh', padding: '10px', marginBottom: '20px'}}>
                {numberBoxes.map(box => box)}
            </div>
        </div>
        <div>
            Hello
        </div>
        </>
        
    )
}

export default App;