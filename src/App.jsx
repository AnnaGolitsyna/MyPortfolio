import './App.css';
import { RouterProvider, createRouter } from '@tanstack/react-router';

// Import the generated route tree
import { routeTree } from './routeTree.gen.ts';

// Create a new router instance outside the component
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
});

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
