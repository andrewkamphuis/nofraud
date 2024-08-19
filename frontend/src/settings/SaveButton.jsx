import { updateSettings } from "../api/Settings";
import { Button } from "@commerce7/admin-ui";

const SaveButton = ({
  settings,
  showSave,
  successFunction,
  errorFunction,
  isLoading,
  setIsLoading,
  setShowSuccessAlert,
}) => {
  const saveButtonSuccessFunction = () => {
    alert("success");
    successFunction();
    setShowSuccessAlert(true);
  };

  const handleSave = async () => {
    setIsLoading(true);
    await updateSettings(settings, saveButtonSuccessFunction, errorFunction);
  };

  if (showSave) {
    return (
      <Button onClick={handleSave} size="small" loading={isLoading}>
        Save Settings
      </Button>
    );
  }

  return null;
};

export default SaveButton;
