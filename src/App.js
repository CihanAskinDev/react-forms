import ControlledComponents from './components/ControlledComponents';
import FormSubmit from './components/FormSubmit';
import Footer from './components/Footer'  
import './App.css';
import Head from './components/Head';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Head />

        <ControlledComponents />
        <FormSubmit />

      </header>
      
        <Footer />
    </div>
  );
}

export default App;
