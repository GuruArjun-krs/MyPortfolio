import { useLocation, useNavigate } from 'react-router-dom';
import { HeaderTab } from '../../Interface';

const PrimaryHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate(`/${hash}`);
    }
  };

  return (
    <div className='aura aura-dual text-primary-color rounded-full w-full flex justify-center shadow-xs'>
      <nav className='bg-white px-[20px] py-[10px] rounded-full flex items-center gap-[20px]'>
        {location.pathname !== '/' && (
          <a
            href='/'
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
            className='text-text-secondary hover:text-primary-color font-primary text-sm transition-colors'
          >
            Home
          </a>
        )}
        {HeaderTab.map((el) => {
          const isProjectsActive = location.pathname === '/projects' && el.id === '#project';
          return (
            <a
              className={`font-primary text-sm transition-colors ${
                isProjectsActive
                  ? 'text-primary-color font-bold'
                  : 'text-text-secondary hover:text-primary-color'
              }`}
              key={el.id}
              href={location.pathname === '/' ? el.id : `/${el.id}`}
              onClick={(e) => handleLinkClick(e, el.id)}
            >
              {el.title}
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default PrimaryHeader