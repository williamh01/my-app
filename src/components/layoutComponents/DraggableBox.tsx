import Draggable from 'react-draggable';
import { useState } from 'react';

function App() {
    type stateType = {
        deltaPosition: {x: number, y: number},
        controlledPosition: {x: number, y: number},
    }


    const dragStateStart: stateType = {
        deltaPosition: {
          x: 0, y: 0
        },
        controlledPosition: {
          x: 0, y: 0
        }
      };

    const [dragState, setDragState] = useState(dragStateStart);
    
    const handleDrag = (e: any, pos: { deltaX: number; deltaY: number; }) => {
        const {x, y} = dragState.deltaPosition;
        setDragState({
          deltaPosition: {
            x: x + pos.deltaX,
            y: y + pos.deltaY,
          },
          controlledPosition: {
            x: 0, y: 0
          }
        });
    };
    
    return (
        <Draggable bounds="parent" onDrag={handleDrag}>
            <div className="box border border-dark " style={{height: '10vh', width: '10vh', position: 'relative'}}> 
                <div>x: {dragState.deltaPosition.x.toFixed(0)}, y: {dragState.deltaPosition.y.toFixed(0)}
                </div>
            </div>
      </Draggable>
    )
}

export default App;