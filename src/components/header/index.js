import Image from "next/image";
import styles from "./index.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <a href="/">
        <Image
          src="/final/final-no-text-no-background.svg"
          alt="logo"
          width={150}
          height={150}
        />
      </a>
      <a className={styles.stars} href="/stars">
        Stars
      </a>
    </div>
  );
}
