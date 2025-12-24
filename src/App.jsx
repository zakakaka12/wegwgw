import React from 'react';
import './App.css';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <main>
        <div>
          <section>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '25px',
              justifyContent: 'center'
            }}>
              <UserProfile />
              <UserProfile 
                avatar="/makaka.jpg"
                username="Макака"
                email="mahaurcheresh@gmail.com"
                isVerified={true}
              />
              <UserProfile 
                avatar="/faa.jpg"
                username="Махаури Данил"
                email="mahar@cheresh@"
                isVerified={true}
              />
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

export default App;