import styles from "./layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import { MainVisual } from "../index";

export default function Layout({ children }) {
  return (
    <html lang="ja">
      <Header />
      <main className={styles.main}>
        <MainVisual />
        {children}
      </main>
      <Footer />
    </html>
  );
}
