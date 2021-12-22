import React from 'react';
import {
  StyledMenuItem,
  StyledContent,
  StyledSubtitle,
  StyledTitle,
  StyledBackgroundImage,
} from './menu-item-styles';
import { withRouter } from 'react-router-dom';

const MenuItem = ({
  title,
  subtitle = 'SHOP NOW',
  imageUrl,
  size,
  linkUrl,
  history,
  match,
}: any) => (
  <StyledMenuItem
    imageUrl={imageUrl}
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <StyledBackgroundImage imageUrl={imageUrl} />
    <StyledContent class={'content'}>
      <StyledTitle> {title.toUpperCase()}</StyledTitle>
      <StyledSubtitle> {subtitle.toUpperCase()}</StyledSubtitle>
    </StyledContent>
  </StyledMenuItem>
);
export default withRouter(MenuItem);
