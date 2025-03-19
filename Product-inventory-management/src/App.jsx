import React from 'react'
import ProductList from './components/ProductList';
import { Provider } from 'react-redux';
import store from './redux/store';


const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductList />
      </div>
    </Provider>
  );
}

export default App