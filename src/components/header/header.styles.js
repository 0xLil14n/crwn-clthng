import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

export const StyledHeader = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const StyledLink = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;
export const StyledOptionLink = styled(Link)`
  padding: 10px 15px;
`;

export const StyledOptions = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const StyledLogo = styled(Logo)``;
