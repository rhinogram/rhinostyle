import React    from 'react';
import ReactDOM from 'react-dom';

import { Tabs, TabsContent, TabPane, NavTabs, NavTabsItem } from '../components';

const NavigationApp = () =>
  <div>
    <Tabs>
      <NavTabs>
        <NavTabsItem active activeKey={1}>Tab One</NavTabsItem>
        <NavTabsItem activeKey={2}>Tab Two</NavTabsItem>
        <NavTabsItem activeKey={3}>Tab Three</NavTabsItem>
      </NavTabs>
      <TabsContent>
        <TabPane active activeKey={1}>Content 1 </TabPane>
        <TabPane activeKey={2}>Content 2</TabPane>
        <TabPane activeKey={3}>Content 3</TabPane>
      </TabsContent>
    </Tabs>
  </div>;

ReactDOM.render(<NavigationApp />, document.getElementById('js-app'));
