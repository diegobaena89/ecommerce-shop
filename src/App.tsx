import { Container } from "./App.style";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { ShopProvider } from "./context/ShopContext";

function App() {
  return (
    <ShopProvider>
      <Container>
        <Header />
        <Home />
        <Footer />
      </Container>
    </ShopProvider>
  );
}

export default App;
