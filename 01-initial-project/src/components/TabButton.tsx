import React from "react";

export default function TabButton(props: { children: React.ReactNode }) {
    return (
        <li>
            <button>{props.children}</button>
        </li>
    );
}
