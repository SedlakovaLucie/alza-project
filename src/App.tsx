import { Routes, Route } from "react-router-dom";
import ProducstListPage from "./pages/productsList/ProducstListPage";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Layout from "./layouts/Layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<ProducstListPage />} />
        <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
