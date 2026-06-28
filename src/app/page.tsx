import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import ContentSection from "../components/ContentSection";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <InfoSection />
      <ContentSection />
      <FooterSection />
    </main>
  );
}
