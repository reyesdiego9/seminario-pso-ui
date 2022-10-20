import TableInformation from './Components/Table/TableInformation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<TableInformation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
