import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar/navbar";
import PageContainer from "./containers/pageContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/detail";
import Cart from "./pages/cart";

const App = () => {
  return (
    <div>
      <PageContainer>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </PageContainer>
    </div>
  );
};

export default App;
