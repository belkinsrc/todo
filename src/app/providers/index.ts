import compose from 'compose-function';
import { withRouter } from './with-router';
import { withContext } from './with-context';

export const withProviders = compose(withRouter, withContext);
