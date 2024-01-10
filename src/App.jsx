import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./components/Cart";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <>
      <SkeletonTheme baseColor="#d9d9d9" highlightColor="#444">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/product/:id" Component={ProductDetails} />
            <Route path="/carts" Component={Cart} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </SkeletonTheme>
    </>
  );
}

export default App;
