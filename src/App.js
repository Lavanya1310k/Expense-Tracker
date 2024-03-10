import React from 'react';
import HomeComponent from "./components/index";
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    font-weight: bold;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
`
// const Overcontainer=styled.div`
//     background-image: url(${designerImage});
//     background-size: cover;
//     background-repeat: no-repeat;
//     width: '100vw';
//     height: '500vh';

// `
function App() {
  return (
    <div>
      <Container>Expense Tracker</Container>
      <HomeComponent />

    </div>
  );
}

export default App;
