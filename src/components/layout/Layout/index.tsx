import type { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>{children}</main>
      <div>TODO: FOOTER</div>
    </div>
  );
};

export default Layout;
