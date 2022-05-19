import {useState} from 'react';

export default function Link({page, children}) {

    const [status, setStatus] = useState("Normal");

    const onMouseEnter = () => {
        setStatus("hovered")
    };

    const onMouseLeave = () => {
        setStatus("normal")
    };

    return (
        <a 
        href={page || '#'}
        style={{color: status == "normal" ? "blue" : "green"}}
        onMouseEnter = {onMouseEnter}
        onMouseLeave = {onMouseLeave}

        >
            {children}
        </a>
    )
}