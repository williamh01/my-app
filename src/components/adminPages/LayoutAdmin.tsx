import React from 'react';
import Navbar from '../Navbar/NavbarAdmin'
import { useState } from 'react';

import DraggableBox from '../layoutComponents/DraggableBox';

import Button from 'react-bootstrap/Button';

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
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    {numberBoxes.map((object, i) => <Button variant="primary">{i+1}</Button>)}
                </div>
            </div>
        </div>
        </div>

        </>
        
    )
}

export default App;