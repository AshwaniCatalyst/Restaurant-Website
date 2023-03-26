
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import FAQ from './Pages/FAQ';
import Contact from './Pages/Contact';
import PageNotFound from './Pages/PageNotFound';
import { ThemeProvider } from '@emotion/react';
import CustomTheme from './Components/CustomTheme';

function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Home' element={<Home />}/>
      <Route path='/Product' element={<Product />}/>
      <Route path='/Faq' element={<FAQ />}/>
      <Route path='/Contact' element={<Contact />}/>
      <Route path='/*' element={<PageNotFound />}/>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
