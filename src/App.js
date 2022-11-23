import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
// styled(Box) <- Box의 모든 속성을 들고 온 다음 ``(백틱)의 CSS를 추가한다.
const Circle = styled(Box)` 
  border-radius: 50px;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="coral" />
    </Father>
  );
}

export default App;
