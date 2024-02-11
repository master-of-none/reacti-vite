import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2> Core concept</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => (
                    <CoreConcept {...conceptItem} />
                ))}

                {/* <CoreConcept
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        /> */}
                {/* Another Way of representing Props is as below */}
                {/* Another Way of representing Props is as below */}
                {/* <CoreConcept {...CORE_CONCEPTS[2]} /> */}
                {/* Another Way of representing Props is as below */}
                {/* <CoreConcept {...CORE_CONCEPTS[3]} /> */}
            </ul>
        </section>
    );
}
