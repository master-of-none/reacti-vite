import React from "react";

export default function TabButton(props: { children: React.ReactNode }) {
    function handleClick() {
        console.log("Hello World");
    }
    return (
        <li>
            <button onClick={handleClick}>{props.children}</button>
        </li>
    );
}
