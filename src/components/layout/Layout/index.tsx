import type { ReactNode } from "react";
import styles from "./styles.module.css";
import Footer from "../Footer";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
