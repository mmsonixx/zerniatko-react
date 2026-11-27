import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./pages/HomePage/HomePage";
import { CategoriesPage } from "./pages/CategoriesPage/CategoriesPage";
import { GoodsPage } from "./pages/GoodsPage/GoodsPage";
import { GoodPage } from "./pages/GoodPage/GoodPage";
import { CreateOrder } from "./pages/CreateOrder/CreateOrder";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";


function App() {
  return <>
  <Header/>
  <main>
    <HomePage/>
  </main>
  <Footer/>
  </>;
}

export default App;
