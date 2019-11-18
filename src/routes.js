import { Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import New from './pages/New';

function Routes() {
  return (
    <>
      <Route path="/" exac component={Feed} />
      <Route path="/new" component={New} />
    </>
  );
}
