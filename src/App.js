import "./App.css";
import HomePage from "./components/HomePage";
import Nav from "./components/Nav";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <HomePage />

      <ProductPage />
      {/* <Footer /> */}
    </>
  );
}

export default App;
