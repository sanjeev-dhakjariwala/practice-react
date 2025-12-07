import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { Footer } from "./container/Footer";
import { Header } from "./container/Header";
import { HomePage } from "./container/home/HomePage";
import { Furniture } from "./container/furniture/Furniture";
import { Beauty } from "./container/beauty/Beauty";
import { Electronics } from "./container/electronics/Electronics";
import { Fashion } from "./container/fashion/Fashion";
import { ThemeProvider } from "./context/ThemeContext";
import { FavoritesProvider } from "./context/FavoriteContext";

function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <BrowserRouter>
          <div className={styles.app}>
            <Header />
            <main className={styles.main}>
              <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/furniture" element={<Furniture />} />
                <Route path="/beauty" element={<Beauty />} />
                <Route path="/electronics" element={<Electronics />} />
                <Route path="/fashion" element={<Fashion />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </FavoritesProvider>
    </ThemeProvider>
  );
}

export default App;
