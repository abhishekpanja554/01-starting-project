import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedOption, setSelectedOption] = useState();
  function handleClick(selectedButton) {
    setSelectedOption(selectedButton);
  }
  return (
    <Section id="examples">
      <h2>Examples</h2>
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedOption === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedOption === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedOption === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedOption === "state"}
              onClick={() => handleClick("state")}
            >
              States
            </TabButton>
          </>
        }
      >
        {selectedOption ? (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedOption].title}</h3>
            <p>{EXAMPLES[selectedOption].description}</p>
            <pre>
              <code>{EXAMPLES[selectedOption].code}</code>
            </pre>
          </div>
        ) : (
          <p>Please select an option</p>
        )}
      </Tabs>
    </Section>
  );
}
