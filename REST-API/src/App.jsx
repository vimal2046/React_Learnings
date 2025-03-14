import CustomerAdd from "./components/CustomerAdd";
import CustomerView from "./components/customerView";
import User from "./components/User";
const API_URL = import.meta.env.REACT_APP_API_URL;

const App = () => {
  return(
    <> 
    <h1>React Redux</h1>
    <CustomerAdd/>
    </>
    
  )
};

export default App;
