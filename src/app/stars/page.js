import Image from "next/image";
import styles from "./index.module.css";
import StarCard from "@/components/star-card";
import Header from "@/components/header";
import { mockModels } from "../constants";

export default function Models() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.title}>Stars</div>
      <div className={styles.listContainer}>
        {mockModels.map(model => (
          <StarCard key={model.name} name={model.name} id={model.id} />
        ))}
      </div>
    </div>
  );
}
