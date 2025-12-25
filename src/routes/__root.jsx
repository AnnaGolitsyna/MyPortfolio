import {
  createRootRoute,
  Outlet,
  useNavigate,
  useLocation,
} from '@tanstack/react-router';
import GooeyNav from '../components/GooeyNav';
import Dock from '../components/DockItem';
import { TelegramIcon } from '../components/icons/social/TelegramIcon';
import { LinkedinIcon } from '../components/icons/social/LinkedinIcon';
import { GitLabIcon } from '../components/icons/social/GitLabIcon';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skill Stack', href: '/skill-stack' },
];

const items = [
  {
    icon: <TelegramIcon className="w-6 h-6 text-accent-blue" />,
    label: 'Telegram',
    onClick: () => window.open('https://t.me/Sevatar', '_blank'),
  },
  {
    icon: <LinkedinIcon className="w-6 h-6 text-accent-blue" />,
    label: 'Linkedin',
    onClick: () =>
      window.open(
        'https://linkedin.com/in/nikita-golitsyn-274774226',
        '_blank'
      ),
  },
  {
    icon: <GitLabIcon className="w-6 h-6 text-accent-blue" />,
    label: 'GitLab',
    onClick: () =>
      window.open('https://gitlab.com/users/NikitaGolitsyn/projects', '_blank'),
  },
];

function RootComponent() {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active index based on current path
  const activeIndex = navItems.findIndex(
    (item) => item.href === location.pathname
  );

  const handleNavClick = (_index, item) => {
    navigate({ to: item.href });
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Absolutely positioned wrapper */}
      <div className="absolute top-8 right-8 z-50 ">
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
          position="relative" // Use relative position
        />
      </div>
      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>
      <footer className="py-8 flex justify-center flex-shrink-0">
        <GooeyNav
          items={navItems}
          activeIndex={activeIndex >= 0 ? activeIndex : 0}
          onItemClick={handleNavClick}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </footer>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});
