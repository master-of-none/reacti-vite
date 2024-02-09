import reactImage from "../../assets/react-core-concepts.png";
import "./Header.css";
const reactDescriptions: string[] = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max: number): number {
    return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    return (
        <header>
            <img src={reactImage} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>{reactDescriptions[genRandomInt(2)]}</p>
        </header>
    );
}
