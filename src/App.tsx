import {MemoryRouter,Route,Routes} from 'react-router-dom'
import './App.scss';
import PaymentPage from 'pages/payments.page';
function App() {
  return (
    <div className="App">
      <MemoryRouter initialEntries={["/payments/cards"]}>
        <Routes>
          <Route  path="/payments/*" element={<PaymentPage/>}>     
          </Route>
        </Routes>
      </MemoryRouter>
    
    </div>
  );
}

export default App;

