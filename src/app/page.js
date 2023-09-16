import Different from "@/components/Different";
import Discover from "@/components/Discover";
import Feedback from "@/components/Feedback";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import OrderToday from "@/components/Order";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden ">
      <Hero />
      <Discover />
      <Menu />
      <Different />
      <GetStarted />
      <OrderToday />
      <Feedback />
      <Subscribe />
    </main>
  );
}
