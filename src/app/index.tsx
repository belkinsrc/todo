/* eslint-disable react-refresh/only-export-components */
import { Routing } from '@/pages';
import { withProviders } from './providers';
import './index.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <Routing />
    </div>
  );
};

export default withProviders(App);
