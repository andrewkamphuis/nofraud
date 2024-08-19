/* eslint-disable react/prop-types */
import { StyledPage } from "./styles";

export const Page = ({ children, className }) => {
  return <StyledPage className={className}>{children}</StyledPage>;
};
