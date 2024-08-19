import { Button, Heading, LineBreak, Region, Text } from "@commerce7/admin-ui";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Page } from "../components/page/Page";
import StateSelection from "./StateSelection";
import UserSettings from "./UserSettings";

import { getSettings } from "../api/Settings";
import FlashMessage from "../components/flashMessage/FlashMessage";
import SaveButton from "./SaveButton";

const Settings = ({ setError }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState(null);
  const [showSave, setShowSave] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const successFunction = () => {
    setError(null);
    setIsLoading(false);
    setShowSave(false);
  };

  const errorFunction = (error) => {
    setIsLoading(false);
    setShowSave(false);
    setError(error);
  };

  const get = async (successFunction, errorFunction) => {
    const results = await getSettings(successFunction, errorFunction);
    const settingData = {
      noFraudUsername: results?.noFraudUsername,
      stateCodes: results?.stateCodes,
    };
    setSettings(settingData);
  };

  useEffect(() => {
    get(successFunction, errorFunction);
  }, []);

  const handleGetSettings = async () => {
    setIsLoading(true);
    await get(successFunction, errorFunction);
  };

  if (!settings || !settings.stateCodes || !settings.noFraudUsername) {
    return (
      <Page>
        <Region>
          <StyledActionContainer>
            <Heading>Settings</Heading>
            <Button onClick={handleGetSettings} loading={isLoading}>
              Get Settings
            </Button>
          </StyledActionContainer>
          <Text>No Settings found, please retry.</Text>
        </Region>
      </Page>
    );
  }

  return (
    <Page>
      <Region>
        <FlashMessage
          isVisible={showSuccessAlert}
          message={"Successfully updated settings"}
        ></FlashMessage>
        <StyledActionContainer>
          <Heading>Settings</Heading>
          <SaveButton
            settings={settings}
            showSave={showSave}
            successFunction={successFunction}
            errorFunction={errorFunction}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setShowSuccessAlert={setShowSuccessAlert}
          />
        </StyledActionContainer>
        <UserSettings
          settings={settings}
          setSettings={setSettings}
          setShowSave={setShowSave}
        />
        <LineBreak />
        <StateSelection
          settings={settings}
          setSettings={setSettings}
          setShowSave={setShowSave}
        />
      </Region>
    </Page>
  );
};

const StyledActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Settings;
