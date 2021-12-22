import styled from 'styled-components';

export const StyledCollectionItem = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
`;
export const StyledCollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
export const StyledPrice = styled.span`
  width: 10%;
`;
export const StyledName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;
export const StyledImage = styled.div`
  height: 95%;
  width: 100%;
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-size: cover;
  margin-bottom: 5px;
`;
