import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";

function App() {
    const [selectedTopic, setSelectedTopic] = useState("");

    function handleSelect(selectedButton: string) {
        setSelectedTopic(selectedButton);
    }
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
                        <TabButton onSelect={() => handleSelect("components")}>
                            Components
                        </TabButton>
                        <TabButton onSelect={() => handleSelect("jsx")}>
                            JSX
                        </TabButton>
                        <TabButton onSelect={() => handleSelect("props")}>
                            Props
                        </TabButton>
                        <TabButton onSelect={() => handleSelect("state")}>
                            State
                        </TabButton>
                    </menu>
                    {!selectedTopic ? (
                        <p>Please select a topic</p>
                    ) : (
                        <div id="tab-content">
                            <h3>
                                {
                                    EXAMPLES[
                                        selectedTopic as keyof typeof EXAMPLES
                                    ].title
                                }
                            </h3>
                            <p>
                                {
                                    EXAMPLES[
                                        selectedTopic as keyof typeof EXAMPLES
                                    ].description
                                }
                            </p>
                            <pre>
                                <code>
                                    {
                                        EXAMPLES[
                                            selectedTopic as keyof typeof EXAMPLES
                                        ].code
                                    }
                                </code>
                            </pre>
                        </div>
                    )}
                </section>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
