import Homepage from '../pages/Home';
import Introduction from '../pages/Introduction';
import Service from '../pages/Service';
import ServiceDetails from '../pages/ServiceDetails';
export const publicRoutes = [
  {
    path: '/',
    component: Homepage,
  },
  {
    path: '/about-us',
    component: Introduction,
  },
  {
    path: '/service/:id', // Thêm tham số động id vào URL
    component: ServiceDetails,
  },
  {
    path: '/service',
    component: Service,
  },
];

export const privateRoutes = [];
