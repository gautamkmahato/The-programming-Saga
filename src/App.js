import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from './pages/Home';
import Dynamic from './components/category/Dynamic';
import Error from './pages/Error';
import ProblemsPage from './pages/ProblemsPage';
import Tabs from './components/Tabs';
import List from './components/List';
// import Sample from './pages/Sample';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/problems" element={<ProblemsPage />} />
      <Route path="/problems/dynamic-programming" element={<Dynamic />} />
      <Route path="/problems/dynamic-programming/list/:subcategory" element={<List />} />
      <Route path="/problems/:id" element={<Tabs />} />
      {/* <Route path="/problems/:id" element={<Display />} /> */}
      {/* <Route path="/tabs" element={<Sample />} /> */}
      <Route path="*" element={<Error />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
