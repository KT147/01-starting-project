import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(conceptItem =>
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            )}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
            {/* SAMA--->  <CoreConcept.
            title={CORE_CONCEPTS[0].title} 
            description={CORE_CONCEPTS[0].description} 
            image={CORE_CONCEPTS[0].image}
          />
            title={CORE_CONCEPTS[0].title} 
            description={CORE_CONCEPTS[0].description} 
            image={CORE_CONCEPTS[0].image}
          />
           <CoreConcept
            title={CORE_CONCEPTS[1].title} 
            description={CORE_CONCEPTS[1].description} 
            image={CORE_CONCEPTS[1].image}
          />
           <CoreConcept
            title={CORE_CONCEPTS[2].title} 
            description={CORE_CONCEPTS[2].description} 
            image={CORE_CONCEPTS[2].image}
          />
           <CoreConcept
            title={CORE_CONCEPTS[3].title} 
            description={CORE_CONCEPTS[3].description} 
            image={CORE_CONCEPTS[3].image}
          /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            {!selectedTopic ? (
              <p>Please select a topic</p>
            ) : (
              <div>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
