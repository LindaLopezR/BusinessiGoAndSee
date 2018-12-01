import React from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from '../imports/client/layouts/MainLayout.jsx';
import Action from '../imports/client/routes/Action.jsx';
import AnotherAction from '../imports/client/routes/AnotherAction.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: ( <Action /> )
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