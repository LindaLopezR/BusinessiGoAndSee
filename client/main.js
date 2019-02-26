import React from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from '../imports/client/layouts/MainLayout.jsx';
import Dashboard from '../imports/client/routes/Dashboard/Dashboard.jsx';
import Audits from '../imports/client/routes/Audits/Audits.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: ( <Dashboard /> )
    })
  }
})

FlowRouter.route('/audits', {
  action() {
    mount(MainLayout, {
      content: ( <Audits /> )
    })
  }
})

FlowRouter.route('/auditDetail', {
  action() {
    mount(MainLayout, {
      content: ( <AuditDetail / > )
    })
  }
})