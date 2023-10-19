import Image from "next/image";
import styles from "./star-card.module.css";

export default function StarCard({ name, id }) {
  return (
    <div className={styles.container}>
      <a href={`/stars/${id}`}>
        <Image
          src="/model-outline.png"
          alt="starCard"
          width={350}
          height={495}
          className={styles.image}
        />
      </a>
      <div>{name}</div>
    </div>
  );
}
