import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/routes';
import ProductProvider from './context/ProductProvider';

function App() {
  return (
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  );
}

export default App;
