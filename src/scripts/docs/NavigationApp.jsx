import React    from 'react';
import ReactDOM from 'react-dom';

import { Tabs, TabsContent, TabPane, NavTabs, NavTabsItem } from '../components';

const NavigationApp = () =>
  <div>
    <Tabs>
      <NavTabs>
        <NavTabsItem>Tab Onee</NavTabsItem>
        <NavTabsItem>Tab Two</NavTabsItem>
        <NavTabsItem>Tab Thre</NavTabsItem>
      </NavTabs>
      <TabsContent>
        <TabPane className="active">Contenet1</TabPane>
        <TabPane>Content2</TabPane>
        <TabPane>Content3</TabPane>
      </TabsContent>
    </Tabs>
  </div>;

ReactDOM.render(<NavigationApp />, document.getElementById('js-app'));
