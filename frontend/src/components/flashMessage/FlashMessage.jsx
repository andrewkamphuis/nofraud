import FlashMessageBox from "./FlashMessageBox";

const FlashMessage = (props) => {
  const { isVisible, message, variant = "default", onHide } = props;

  if (!isVisible) {
    return null;
  }

  return (
    <FlashMessageBox
      message={message}
      variant={variant}
      onHide={onHide}
    ></FlashMessageBox>
  );
};

export default FlashMessage;
