import { BrowserRouter } from 'react-router-dom';

const withRouter = (component: () => React.ReactNode) => () => (
  <BrowserRouter>{component()}</BrowserRouter>
);

export { withRouter };
