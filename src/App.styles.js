import styled from 'styled-components';

export const StyledApp = styled.div`
  font-family: 'Open Sans Condensed';
  padding: 20px 80px;
  a {
    color: black;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`;
export const StyledAppHeader = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const StyledAppLogo = styled.div`
  height: 40vmin;
  pointer-events: none;
`;
