import { Tab, Tabs } from '@mui/material';
import type { Dispatch, SetStateAction } from 'react';
import { tabs } from '../tabs';

interface MenuProps {
  currentTab: number;
  setCurrentTab: Dispatch<SetStateAction<number>>;
}

export default function Menu({ currentTab, setCurrentTab }: MenuProps) {
  return (
    <Tabs
      value={currentTab}
      onChange={(_event, newValue) => setCurrentTab(newValue)}
      variant="scrollable"
    >
      {tabs.map((tab, index) => (
        <Tab key={index} label={tab.label} value={index} />
      ))}
    </Tabs>
  );
}
