import React from 'react';

import { GlobalStyles } from './styles/global';
import { Title } from './components/Title/title.style'
import Table from './components/Table/Table';



function App() {
  return (
    <>
      <GlobalStyles/>
      <Title>Список счётчиков</Title>
      <Table />
    </>
  );
}

export default App;
