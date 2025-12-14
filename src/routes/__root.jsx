import { createRootRoute, Outlet, useNavigate, useLocation } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import GooeyNav from '../components/GooeyNav';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skill Stack', href: '/skill-stack' },
];

function RootComponent() {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active index based on current path
  const activeIndex = navItems.findIndex(item => item.href === location.pathname);

  const handleNavClick = (_index, item) => {
    navigate({ to: item.href });
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <main className="flex-1 overflow-auto">
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
      <TanStackRouterDevtools />
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});
