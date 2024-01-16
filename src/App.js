import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductDetail";
import Login from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products/:id",
    element: <ProductPage />,
  },
  {
    path: "/login/",
    element: <Login />,
  },
  {
    path: "/register/",
    element: <RegisterPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
