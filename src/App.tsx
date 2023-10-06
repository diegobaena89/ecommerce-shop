import { Container } from "./App.style";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { ShopProvider } from "./context/ShopContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartPage from "./pages/Cart/Cart";
import Form from "./pages/Form/Form";
import Final from "./pages/Final/Final";

function App() {
  return (
    <ShopProvider>
      <Container>
        <Router>
          <Header />
          <Routes>
            <Route path="/final" element={<Final />} />
            <Route path="/form" element={<Form />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </Container>
    </ShopProvider>
  );
}

export default App;
