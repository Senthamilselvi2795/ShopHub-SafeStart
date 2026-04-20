import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../features/userSlice';

const SideMenu = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <aside className="sidebar">
      {user && (
        <div className="sidebar-user-card">
          <h3>User Details</h3>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
      <ul className="sidebar-menu">
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? 'menu-link active' : 'menu-link'
            }
          >
            Product List
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? 'menu-link active' : 'menu-link'
            }
          >
            Profile Page
          </NavLink>
        </li>
      </ul>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </aside>
  );
};

export default SideMenu;