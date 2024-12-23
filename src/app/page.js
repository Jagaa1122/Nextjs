import Image from "next/image";
import styles from "./page.module.css";
import { Card } from "@/components/Card";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h2>Hello World</h2>

        <Card
          name="Naruto"
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, deserunt."
          }
          imgUrl={"https://cdn.staticneo.com/w/naruto/Nprofile2.jpg"}
        />

        <Card
          name="Naruto"
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, deserunt."
          }
          imgUrl={"https://cdn.staticneo.com/w/naruto/Nprofile2.jpg"}
        />

        <Card
          name="Naruto"
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, deserunt."
          }
          imgUrl={"https://cdn.staticneo.com/w/naruto/Nprofile2.jpg"}
        />
      </div>
    </div>
  );
}
