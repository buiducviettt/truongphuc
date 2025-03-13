import Homepage from '../pages/Home';
import Introduction from '../pages/Introduction';
export const publicRoutes = [
  {
    path: '/',
    component: Homepage,
  },
  {
    path: '/about-us',
    component: Introduction,
  },
];

export const privateRoutes = [];
