import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTE_CONSTANTS } from '@/shared/config';
import { Routing } from '@/pages';
import './index.scss';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== ROUTE_CONSTANTS.HOME) {
      navigate(ROUTE_CONSTANTS.HOME);
    }
  }, [location, navigate]);

  return (
    <div className="app">
      <Routing />
    </div>
  );
}

export default App;
