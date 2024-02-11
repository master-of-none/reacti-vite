import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState("");

    function handleSelect(selectedButton: string) {
        setSelectedTopic(selectedButton);
    }

    return (
        <section id="examples">
            <h2> Examples </h2>
            <menu>
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
            </menu>
            {!selectedTopic ? (
                <p>Please select a topic</p>
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
        </section>
    );
}
