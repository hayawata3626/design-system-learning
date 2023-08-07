import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

export const Wrapper = styled.section`
  color: ${(props) => {
    return props.theme.desintokens.primay.value;
  }};
  margin: ${(props) => {
    return `${props.theme.desintokens.spacing.xxl.value}px`;
  }};
  padding: 4em;
`;
