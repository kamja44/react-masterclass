import styled, {keyframes} from "styled-components";
import React from "react";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color:${props => props.theme.backgroundColor}
`;
const Title = styled.h1`
  color : ${props => props.theme.textColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
