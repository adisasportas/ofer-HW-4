import React, { useState } from 'react';
import HeaderComponent from './components/HeaderComponent';
import FormComponent from './components/FormComponent';

function App() {
  const [headerData, setHeaderData] = useState(null);
  
  const handleFormSubmit = data => {
    setHeaderData(data);
  };

  return (
    <div>
      {headerData && <HeaderComponent name={headerData.name} />}
      <FormComponent onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
