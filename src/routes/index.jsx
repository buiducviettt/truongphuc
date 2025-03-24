import Homepage from '../pages/Home';
import Introduction from '../pages/Introduction';
import Service from '../pages/Service';
import ServiceDetails from '../pages/ServiceDetails';
import News from '../pages/News';
import NewsDetail from '../pages/News/NewsDetail';
export const publicRoutes = [
  {
    path: '/news/:id',
    component: NewsDetail,
  },
  { path: '/news', component: News },
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
