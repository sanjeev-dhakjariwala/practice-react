import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { Footer } from "./container/Footer";
import { Header } from "./container/Header";
import { HomePage } from "./container/home/HomePage";
import { Furniture } from "./container/furniture/Furniture";
import { Beauty } from "./container/beauty/Beauty";
import { Electronics } from "./container/electronics/Electronics";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/furnitur" element={<Furniture />} />
            <Route path="/beauty" element={<Beauty />} />
            <Route path="/electronics" element={<Electronics />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
