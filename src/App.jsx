import { Outlet } from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer';

function App() {
  return (
    <>
    <div>
        <Nav />
            <div>
                <main className="mx-3 d-flex flex-column justify-content-center flex-grow">
                    <Outlet />
                </main>
            </div>
        <Footer />
    </div>
    </>
  );
}

export default App;