import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  border: 1px solid ${(props) => props.theme.colors.pink[300].value};
`;

export const Wrapper = styled.section`
  color: ${(props) => props.theme.colors.green[300].value};
  padding: 4em;
  background: ${(props) => props.theme.colors.gray[100].value};
`;
