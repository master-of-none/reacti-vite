import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState("");
    const tabcontent = <p>Select a topic</p>;
    function handleSelect(selectedButton: string) {
        setSelectedTopic(selectedButton);
    }

    return (
        <Section title="examples" id="examples">
            <h2> Examples </h2>
            <Tabs
                buttons={
                    <>
                        <TabButton
                            isSelected={selectedTopic === "components"}
                            onSelect={() => handleSelect("components")}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === "jsx"}
                            onSelect={() => handleSelect("jsx")}
                        >
                            JSX
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === "props"}
                            onSelect={() => handleSelect("props")}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === "state"}
                            onSelect={() => handleSelect("state")}
                        >
                            State
                        </TabButton>
                    </>
                }
            >
                {<></>}
            </Tabs>
            <menu></menu>
            {!selectedTopic ? (
                tabcontent
            ) : (
                <div id="tab-content">
                    <h3>
                        {EXAMPLES[selectedTopic as keyof typeof EXAMPLES].title}
                    </h3>
                    <p>
                        {
                            EXAMPLES[selectedTopic as keyof typeof EXAMPLES]
                                .description
                        }
                    </p>
                    <pre>
                        <code>
                            {
                                EXAMPLES[selectedTopic as keyof typeof EXAMPLES]
                                    .code
                            }
                        </code>
                    </pre>
                </div>
            )}
        </Section>
    );
}
