import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import state from './state.json';
import Content from './Content';
import {MainSection, MainWindow} from './MyStyledComponent'

export default function App() {
  return (
    <MainSection>
      <MainWindow>
        <Tabs>

          <TabList>
            <Tab>List</Tab>
            <Tab>Tiles</Tab>
          </TabList>

          <TabPanel>
            <Content persons={state} view={'list'} />
          </TabPanel>
          <TabPanel>
            <Content persons={state} view={'tiles'} />
          </TabPanel>

        </Tabs>
      </MainWindow>
    </MainSection>
  );
}