import Image from "next/image";
import styles from "./page.module.css";
import { SocialIcon } from "react-social-icons";

const socialMap = [
  {
    name: "instagram",
    link: "https://www.instagram.com/_dare_dream/"
  },
  {
    name: "tiktok",
    link: "https://www.tiktok.com/@_dare_dream"
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/daredream.unlimited/"
  },
  {
    name: "reddit",
    link: "https://www.reddit.com/r/DareDream/"
  },
  {
    name: "whatsapp",
    link: "https://wa.me/911052813"
  },
  {
    name: "telegram",
    link: "https://t.me/daredream_unlimited"
  },
  {
    name: "twitter",
    link: "https://twitter.com/_dare_dream"
  },
  {
    name: "snapchat",
    link: "https://www.snapchat.com/add/dare.dream"
  }
];

const socials = [
  "instagram",
  "tiktok",
  "facebook",
  "reddit",
  "whatsapp",
  "telegram",
  "twitter",
  "snapchat"
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <Image
            src="/final/final-no-text-no-background.svg"
            alt="logo"
            width={150}
            height={150}
          />
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.centerContainer}>
          <Image
            src="/final/final-no-background.svg"
            alt="logo"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className={styles.footer}>
        <div>
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
