/* eslint-disable react/prop-types */
import { StyledText } from "./styles";

export const Text = ({ children, className }) => {
  return <StyledText className={className}>{children}</StyledText>;
};
