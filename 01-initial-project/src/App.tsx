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

function CoreConcept({ image, title, description }: CoreConceptProps) {
    return (
        <li>
            <img src={image} alt={title} />
            <h3> {title} </h3>
            <p> {description} </p>
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

                        {/* Another Way of representing Props is as below */}
                        <CoreConcept {...CORE_CONCEPTS[1]} />

                        {/* Another Way of representing Props is as below */}
                        <CoreConcept {...CORE_CONCEPTS[2]} />

                        {/* Another Way of representing Props is as below */}
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
