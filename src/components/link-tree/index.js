import styles from "./index.module.css";

const mockLinks = [
  {
    name: "Premium +18 Content",
    link: "somelink"
  },
  {
    name: "Free Tier / Preview",
    link: "somelink"
  },
  {
    name: "Message on Whatsapp",
    link: "somelink"
  },
  {
    name: "Instagram",
    link: "somelink"
  },
  {
    name: "OnlyFans",
    link: "somelink"
  }
];

export default function LinkTree() {
  return (
    <div className={styles.container}>
      {mockLinks.map(link => (
        <a className={styles.link} key={link.name}>
          {link.name}
        </a>
      ))}
    </div>
  );
}
