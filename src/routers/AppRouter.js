import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddDashboardPage from '../components/AddExpensePage';
import EditDashboardPage from '../components/EditExpensePage';
import HelpDashboardPage from '../components/HelpExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddDashboardPage} />
        <Route path="/edit" component={EditDashboardPage} />
        <Route path="/help" component={HelpDashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
