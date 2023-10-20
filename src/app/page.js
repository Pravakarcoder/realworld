import Image from "next/image";
import NavBar from "./components/NavBar";
import PopularPosts from "./components/PopularPosts";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <div className="">
        <Hero />
        <PopularPosts />
      </div>
    </>
  );
}
