/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface sectionProps {
    children: React.ReactNode;
    title: string;
    [key: string]: any;
}
export default function Section({ children, title, ...props }: sectionProps) {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}
