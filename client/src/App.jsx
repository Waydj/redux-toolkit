import { BrowserRouter, Route, Routes } from "react-router-dom";
import { paths } from "./paths";
import { HomePage } from "./pages/home-page/";
import { PlanePage } from "./pages/plane-page";
import { CreatePlanePage } from "./pages/create-plane-page";
import { OrderPage } from "./pages/order-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.home} element={<HomePage />} />
        <Route path={`${paths.plane}/:id`} element={<PlanePage />} />
        <Route path={paths.createPlane} element={<CreatePlanePage />} />
        <Route path={paths.order} element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
