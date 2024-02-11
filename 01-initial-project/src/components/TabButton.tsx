import React from "react";

interface tabButtonProps {
    children: React.ReactNode;
    onSelect: () => void;
    isSelected: boolean;
}
export default function TabButton(props: tabButtonProps) {
    return (
        <li>
            <button
                className={props.isSelected ? "active" : undefined}
                onClick={props.onSelect}
            >
                {props.children}
            </button>
        </li>
    );
}
