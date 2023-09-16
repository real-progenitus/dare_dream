import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>DareDream</title>
      </Head>
      <div className={styles.description}>
        <p>DareDream</p>
        <div>By Jaipi and Progen</div>
      </div>

      <div className={styles.center}>
        <div className={styles.centerContainer}>
          <h1 className={styles.title}>DareDream</h1>
          <p>Coming Soon</p>
        </div>
      </div>

      <div className={styles.footer}>
        <div>Porto</div>
        <div>Contact: @dare_dream</div>
      </div>
    </main>
  );
}
