import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcepts";
import TabButton from "./components/TabButton";

function App() {
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2> Core concept</h2>
                    <ul>
                        <CoreConcept
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        />

                        {/* Another Way of representing Props is as below */}
                        <CoreConcept {...CORE_CONCEPTS[1]} />

                        {/* Another Way of representing Props is as below */}
                        <CoreConcept {...CORE_CONCEPTS[2]} />

                        {/* Another Way of representing Props is as below */}
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
                <section id="examples">
                    <h2> Examples </h2>
                    <menu>
                        <TabButton> Components </TabButton>
                        <TabButton> JSX </TabButton>
                        <TabButton> Props </TabButton>
                        <TabButton> State </TabButton>
                    </menu>
                </section>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
