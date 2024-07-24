/**
 * The flow in below code is that getCurrentPosition callback function is async function
 * As we set setPosi() inside it, it will update state in future and call App re-render
 * Then entire code inside navigator.geolocation.getCurrentPosition((position) => {
 * will re-execute and update state again and call re-render, and this will happen again and again 
 * and we go into infinite loop.
 */


import { useState, useEffect } from "react";

export default App(){

    const [posi, setPosi] = useState({});

    navigator.geolocation.getCurrentPosition((position) => {
        let myPosition = {};
        myPosition.lat = position.coords.altitude;
        myPosition.long = position.coords.longitude;
        setPosi(myPosition);
    });

    return (
        <div>
            Laltitude:: {posi.lat}
            Longitude:: {posi.long}
        </div>
    );

};


// -- Solution 

export default App(){

    const [posi, setPosi] = useState({});

    // the code inside useEffect run after App component execution
    // and as [dependecy is empty], it run once

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            let myPosition = {};
            myPosition.lat = position.coords.altitude;
            myPosition.long = position.coords.longitude;
            setPosi(myPosition);
        });
    }, []);

   
    return (
        <div>
            Laltitude:: {posi.lat}
            Longitude:: {posi.long}
        </div>
    );

};