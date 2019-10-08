import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingCylce from '../billingCycle/billingCycle'

export default props => (
  <Router history={hashHistory}>
    <Route exact path='/' component={Dashboard} />
    <Route path='/billingCycles' component={BillingCylce} />
    <Redirect from='*' tp='/' />
  </Router>
)