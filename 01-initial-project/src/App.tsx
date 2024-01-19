import reactImage from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data';

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
                        <CoreConcept title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image} />

                        <CoreConcept title={CORE_CONCEPTS[1].title}
                            description={CORE_CONCEPTS[1].description}
                            image={CORE_CONCEPTS[1].image} />

                        <CoreConcept title={CORE_CONCEPTS[2].title}
                            description={CORE_CONCEPTS[2].description}
                            image={CORE_CONCEPTS[2].image} />

                        <CoreConcept title={CORE_CONCEPTS[3].title}
                            description={CORE_CONCEPTS[3].description}
                            image={CORE_CONCEPTS[3].image} />
                    </ul>
                </section>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
