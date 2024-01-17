import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductDetail";
import Login from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Cart from "./components/Cart";
import CheckoutPage from "./components/CheckoutPage";
import ContactPage from "./components/ContactPage";

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
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
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
