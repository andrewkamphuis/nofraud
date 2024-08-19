import { Button, Checkbox, Heading, Region } from "@commerce7/admin-ui";
import { useState } from "react";
import styled from "styled-components";
import { Text } from "../components/text/Text";
import { states } from "./enums";

const States = ({ setShowSave, settings, setSettings }) => {
  const [selectedStates, setSelectedStates] = useState(settings?.stateCodes);
  const stateCodes = Object.keys(states);

  const handleSelect = (selection) => {
    if (!selectedStates.includes(selection)) {
      setSelectedStates([...selectedStates, selection]);
      setSettings((prevSettings) => ({
        ...prevSettings,
        stateCodes: [...selectedStates, selection],
      }));
    } else {
      const newStates = selectedStates.filter((state) => state !== selection);
      setSelectedStates(newStates);
      setSettings((prevSettings) => ({
        ...prevSettings,
        stateCodes: newStates,
      }));
    }
    setShowSave(true);
  };

  const handleSelectAll = () => {
    setSelectedStates(Object.keys(states));
    setSettings((prevSettings) => ({
      ...prevSettings,
      stateCodes: stateCodes,
    }));
    setShowSave(true);
  };

  const handleDeselectAll = () => {
    setSelectedStates([]);
    setSettings((prevSettings) => ({
      ...prevSettings,
      stateCodes: [],
    }));

    setShowSave(true);
  };

  return (
    <>
      <Heading level={3}>State Selection</Heading>
      <Text>
        Select which states you would like rerouted to NoFraud for
        fulfillment.
      </Text>
      <StyledContainer>
        <StyledButton onClick={handleSelectAll} size="small" variant="link">
          Select All
        </StyledButton>
        <StyledButton onClick={handleDeselectAll} size="small" variant="link">
          Deselect All
        </StyledButton>
      </StyledContainer>
      <Region>
        <StyledStates>
          {Object.keys(states).map((state) => {
            return (
              <StyledCheckbox
                onChange={() => handleSelect(state)}
                label={states[state]}
                key={state}
                checked={selectedStates.includes(state)}
              />
            );
          })}
        </StyledStates>
      </Region>
    </>
  );
};

const StyledContainer = styled.div`
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  font-size: 15px;
  margin-bottom: 12px;
`;

const StyledStates = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledCheckbox = styled(Checkbox)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 200px;
  margin-bottom: 10px;
`;

export default States;
