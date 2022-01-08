import './App.css';
import HomePage from './pages/homepage/homepage.component';
import CategoryPage from './pages/category/category.component';
import Header from './component/header/header.component';
import { Routes, Route, BrowserRouter as BRuter } from 'react-router-dom';

function App() {
  return (
    <BRuter>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/category' element={<CategoryPage />} />
      </Routes>
    </BRuter>

  );
}

export default App;
