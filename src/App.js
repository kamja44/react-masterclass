import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const Btn = styled.button`
  color: white;
  background-color: coral;
  border: 0;
  border-radiusL 15px;
`

function App() {
  return (
    <Father>
      <Btn>Log in</Btn>
      <Btn as="a">Log in</Btn>
    </Father>
  );
}

export default App;
