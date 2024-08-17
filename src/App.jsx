import './App.css';
import ReactLoginComponent from './componets/login';
import ReactRegisterComponent from './componets/Register';

function App() {

  return (
    
    <div className="App">
      
      <h2>Render</h2>
      <div style={{ display:"flex",gap:'20px'}}>
      <ReactLoginComponent />
      <ReactRegisterComponent/>
      </div>
      
     
      
    </div>
  );
}

export default App;
