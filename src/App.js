import './App.css';
import Footer from './Components/Footer';
import Heading from './Components/Heading';
import Routing from './Components/Routing';

function App() {
  return (
    <div className="App">
        
        <Heading />
        <Routing />

        <div className="main-footer">
        <Footer />
        </div>
       
    </div>
  );
}

export default App;
