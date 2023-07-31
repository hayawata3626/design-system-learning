import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

export const Wrapper = styled.section`
  color: ${(props) => props.theme.colors.gray[100].value};
  padding: 4em;
  background: papayawhip;
`;
