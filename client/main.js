import React from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from '../imports/client/layouts/MainLayout.jsx';
import Dashboard from '../imports/client/routes/Dashboard.jsx';
import AnotherAction from '../imports/client/routes/AnotherAction.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: ( <Dashboard /> )
    })
  }
})

FlowRouter.route('/anotherAction', {
  action() {
    mount(MainLayout, {
      content: ( <AnotherAction /> )
    })
  }
})