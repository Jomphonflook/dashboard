import {
  DesktopOutlined,
  FlagOutlined,
} from '@ant-design/icons';

import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Campaigns } from './pages/Campaigns';
import { Registers } from './pages/Registers';


type MenuItem = ItemType & {
  children?: MenuItem[];
  component?: ReactNode;
};

export const routes: MenuItem[] = [
  {
    component: <Registers />,
    icon: <DesktopOutlined />,
    key: '/',
    label: 'REGISTER',
  },
  {
    component: <Campaigns />,
    icon: <FlagOutlined />,
    key: '/campaigns',
    label: 'DASHBOARD',
  },
];

export const RouteContent: React.FC = () => {
  const result: Array<ReactNode> = [];

  const dfs = (routes: MenuItem[]) => {
    routes.forEach((item: MenuItem) => {
      result.push(
        <Route
          element={item.component}
          key={item.key}
          path={item.key?.toString()}
        />,
      );
      if (item.children) {
        dfs(item.children);
      }
    });
  };

  dfs(routes);

  return <Routes>{result}</Routes>;
};
