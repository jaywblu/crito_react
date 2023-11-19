import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import PageNotFound from './pages/PageNotFound';
import Services from './pages/Services';
import Footer from './components/Footer';
import { TestProvider } from './NewsArticlesContext';

const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <TestProvider>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/news' element={<News />} />
            <Route path='/newsdetails/:id' element={<NewsDetails />} />
            <Route path='/services' element={<Services />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
          <Footer></Footer>
        </TestProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;