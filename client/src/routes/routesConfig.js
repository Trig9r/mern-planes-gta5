import { HomePage } from '../pages/Home';
import { PlanePage } from '../pages/Plane';
import { CreatePlanePage } from '../pages/CreatePlane';
import { OrderPage } from '../pages/Order';

const routesConfig = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/plane/:id',
    element: <PlanePage />,
  },
  {
    path: '/create-plane',
    element: <CreatePlanePage />,
  },
  {
    path: '/order',
    element: <OrderPage />,
  },
];

export default routesConfig;
