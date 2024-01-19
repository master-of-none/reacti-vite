import reactImage from './assets/react-core-concepts.png';
import componentImage from './assets/components.png';

interface CoreConceptProps {
    image: string;
    title: string;
    description: string;
}

const reactDescriptions: string[] = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max: number): number {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
    return (
        <header>
            <img src={reactImage} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {reactDescriptions[genRandomInt(2)]}
            </p>
        </header>
    );
}

function CoreConcept(props: CoreConceptProps) {
    return (
        <li>
            <img src={props.image} alt={props.title} />
            <h3> {props.title} </h3>
            <p> {props.description} </p>
        </li>
    );
}

function App() {
    return (
        <div>
            <Header />
            <main>
                <section id='core-concepts'>
                    <h2> Core concept</h2>
                    <ul>
                        <CoreConcept title="Components"
                            description="Core UI"
                            image={componentImage} />
                        <CoreConcept title="" description="" image="" />
                        <CoreConcept title="" description="" image="" />
                        <CoreConcept title="" description="" image="" />
                    </ul>
                </section>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
