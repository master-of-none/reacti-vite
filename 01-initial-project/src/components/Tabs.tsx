import React from "react";
interface TabProps {
    children: React.ReactNode;
    buttons: React.ReactNode;
}
export default function Tabs({ children, buttons }: TabProps) {
    return (
        <>
            <menu>{buttons}</menu>
            {children}
        </>
    );
}
