import { useEffect } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import { Icon, Text } from "@commerce7/admin-ui";

const FlashMessageBox = (props) => {
  const { message, variant = "success", onHide } = props;

  useEffect(() => {
    setTimeout(() => {
      onHide();
    }, 4000000);
  }, [onHide]);

  return createPortal(
    <FlashMessageStyles data-testid="flash-message" variant={"success"}>
      <Icon icon={icons[variant]}></Icon>
      <Text>{message}</Text>
    </FlashMessageStyles>,
    document.body
  );
};

const animateFlash = keyframes`
    0% {
        transform: translate(-50%, 150%);
    }
    5% {
        transform: translate(-50%, 0%);
    }
    95% {
        transform: translate(-50%, 0%);
    }
    100% {
        transform: translate(-50%, 150%);
    }
`;

const colors = {
  dark: {
    error: "#DF5F5F",
    info: "#00679D",
    success: "#7EB79D",
    default: "#585E64",
  },
  light: {
    error: "#B13434",
    info: "#00679D",
    success: "#7EB79D",
    default: "#D1D1D1",
  },
};

const FlashMessageStyles = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 150%);
  background: ${({ theme }) => theme.c7__ui.backgroundColor};
  box-shadow: ${({ theme }) => theme.c7__ui.boxShadow};
  border-radius: ${({ theme }) => theme.c7__ui.borderRadius};
  border: ${({ theme }) => `1px solid ${theme.c7__ui.borderColor}`};
  border-left: ${({ variant, theme }) =>
    `4px solid ${colors[theme.c7__ui.mode][variant]}`};
  z-index: 1000;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  min-height: 56px;
  width: 100%;
  max-width: 400px;
  animation: ${animateFlash} 3.5s linear forwards;
`;

const icons = {
  error: "warning",
  info: "infoCircle",
  success: "checkCircle",
  default: "infoCircle",
};

export default FlashMessageBox;
