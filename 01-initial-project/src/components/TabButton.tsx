import React from "react";

interface tabButtonProps {
    children: React.ReactNode;
    onSelect: () => void;
}
export default function TabButton(props: tabButtonProps) {
    return (
        <li>
            <button onClick={props.onSelect}>{props.children}</button>
        </li>
    );
}
