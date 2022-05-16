import React, { useState } from 'react';

export function FunctionalComponent({title}){
    const [count, setCount] = useState(0);
    const [films, setFilms] = useState(['Logan', 'Tor', 'Dr.Strange']);

    const addFilms = () => {
        const newFilm = 'IronMan';
        setFilms([...films, newFilm]);
    }
    return <div>
    <h1>{title}</h1>
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count +1)}>+++</button>
        <button onClick={()=>setCount(count-1)}>---</button>
    </div>
    <ul>
        <h1>FILMS:</h1>
        {films.map((f)=>(
            <li>{f}</li>
            ))}
        <button onClick={addFilms}>Add Film</button>
    </ul>
    </div>;
}