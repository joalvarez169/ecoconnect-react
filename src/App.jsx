import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import Form from './components/Form';
import Noticias from './components/Noticias';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-50 text-slate-800 font-sans flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Home />
        <Form />
        <Noticias />
      </main>
      <Footer />
    </div>
  );
}

export default App;
