import React from "react";
import {
  StyledMenuItem,
  StyledContent,
  StyledSubtitle,
  StyledTitle,
  StyledBackgroundImage,
} from "./menu-item-styles";

const MenuItem = ({ title, subtitle = "SHOP NOW", imageUrl, size }) => (
  <StyledMenuItem imageUrl={imageUrl} size={size}>
    <StyledBackgroundImage class="bg-img" imageUrl={imageUrl}> </StyledBackgroundImage>
    <StyledContent>
      <StyledTitle> {title.toUpperCase()}</StyledTitle>
      <StyledSubtitle> {subtitle.toUpperCase()}</StyledSubtitle>
    </StyledContent>
  </StyledMenuItem>
);
export default MenuItem;
