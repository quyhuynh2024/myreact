import React from 'react';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  return (
    <div>
      <Input placeholder="Email" name="email" autoFocus />

      <Button variant="outlined" data-ripple="#0990ff">
        hello
      </Button>
    </div>
  );
}

export default App;
