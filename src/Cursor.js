


import React, { useState, useEffect } from 'react';


const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Event listener to update the cursor position
        const updateCursorPosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        // Attach the event listener to the document
        document.addEventListener('mousemove', updateCursorPosition);

        // Clean up the event listener when the component is unmounted
        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    return (
        <div>
            <div className="circle" style={{ left: position.x, top: position.y }}></div>
            <div className="dot" style={{ left: position.x, top: position.y }}></div>
        </div>
    );
};

export default Cursor;
