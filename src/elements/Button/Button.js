import styled from 'styled-components';

export const BaseSyledButton = styled.button`
  background: ${(props) => props.background ? props.background : '#3498db'};
  color: ${(props) => props.color ? props.color : '#fff'};
  padding: 10px 20px 10px 20px;
  border: 0px;
  text-decoration: none;
  &:hover {
    background: ${(props) => props.background ? props.background : '#4dd7be'};
    text-decoration: none;
  }
`;
