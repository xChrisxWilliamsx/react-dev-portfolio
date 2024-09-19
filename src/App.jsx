import { StrictMode } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer';

function App() {
  return (
    <>
      <StrictMode>
        <Nav />
          <main className="mx-3 d-flex flex-column justify-content-center flex-grow">
              <Outlet />
          </main>
        <Footer />.
      </StrictMode>
    </>
  );
}

export default App;