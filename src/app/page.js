import Image from "next/image";
import styles from "./page.module.css";
import { SocialIcon } from "react-social-icons";
import { socialMap } from "./constants";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header />

        <div className={styles.center}>
          <div className={styles.centerContainer}>
            <Image src="/final/final-no-background.svg" alt="logo" fill />
          </div>
        </div>

        <div className={styles.footer}>
          {socialMap.map(social => (
            <SocialIcon
              key={`${social.name}_link`}
              url={`https://${social.name}.com`}
              bgColor="transparent"
              fgColor="var(--red)"
              href={social.link}
              target="_blank"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
