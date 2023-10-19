import Header from "@/components/header";
import Image from "next/image";
import styles from "./index.module.css";
import LinkTree from "@/components/link-tree";
import { mockModels } from "@/app/constants";

export default function Stars({ params }) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.heroImageContainer}>
        <Image src="/model-outline.png" alt="star_hero" fill />
      </div>
      <div className={styles.name}>{mockModels[params.id - 1]?.name}</div>
      <LinkTree />
    </div>
  );
}
