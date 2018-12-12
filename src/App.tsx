import * as React from 'react';
import CustomDiagram from './CustomDiagram';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <main className="main">
          <CustomDiagram />
        </main>
      </div>
    );
  }
}

export default App;
