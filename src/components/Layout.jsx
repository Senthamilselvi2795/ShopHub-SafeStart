import { Outlet } from 'react-router-dom';
import SideMenu from './SideMenu';

const Layout = () => {
  return (
    <div className="layout">
      <SideMenu />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;