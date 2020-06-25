import React from 'react';
import Generator from "./Generator";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Beth Ellen', cursive;
`

function App() {
  return (
    <AppWrapper className="App">
      <h1>Music always has room for more genres. Get inspired now!</h1>
      <Generator /> 
    </AppWrapper>
  );
}

export default App;
