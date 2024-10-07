import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="" target="_blank">
        Nurdoğan Bahadır
      </Link>
    </footer>
  );
}

export default Footer;
