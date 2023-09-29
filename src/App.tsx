import { Container } from "./App.style";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <Container>
      <Header />
      <Home />
      <Footer />
    </Container>
  );
}

export default App;
