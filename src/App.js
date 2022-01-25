import React from 'react'
import Sidebar from './components/sidebar'


function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="app__sidebar">
              <Sidebar/>
            </div>
          </div>
          <div className="col-lg-9 app__main-content">
            main content
      </div>
        </div>
      </div>
    </div>
  );
}

export default App;
