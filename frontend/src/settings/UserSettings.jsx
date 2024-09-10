import { Columns, Heading, Input } from "@commerce7/admin-ui";
import React, { useState } from "react";
import { Text } from "../components/text/Text";
const { Column } = Columns;

const UserSettings = ({ settings, setSettings, setShowSave }) => {
  const [userName, setUserName] = useState(settings?.noFraudUsername);
  const [password, setPassword] = useState("--------------");

  const handleChangeUserName = (e) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      noFraudUsername: e.target.value,
    }));
    setUserName(e.target.value);
    setShowSave(true);
  };

  const handleChangePassword = (e) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      noFraudPassword: e.target.value,
    }));
    setPassword(e.target.value);
    setShowSave(true);
  };

  return (
    <>
      <Heading level={3}>User Settings</Heading>
      <Text>
        Please enter your account details from NoFraud so we can sync with
        your account.
      </Text>
      <Columns>
        <Column span={3}>
          <Input
            label="Username"
            id="username"
            value={userName}
            onChange={handleChangeUserName}
          />
        </Column>
        <Column span={3}>
          <Input
            label="Password"
            id="password"
            value={password}
            onChange={handleChangePassword}
            type="password"
          />
        </Column>
      </Columns>
    </>
  );
};

export default UserSettings;
