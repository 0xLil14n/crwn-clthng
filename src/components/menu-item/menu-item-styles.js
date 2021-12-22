import styled from 'styled-components';

export const StyledBackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-size: cover;
`;

export const StyledContent = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;
export const StyledTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;
export const StyledSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;

export const StyledMenuItem = styled.div`
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  height: ${(props) => (props.size == 'large' ? '380px' : '240px')};

  &:hover {
    cursor: pointer;

    & ${StyledContent} {
      opacity: 0.9;
    }
    & ${StyledBackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }
  overflow: hidden;
`;
