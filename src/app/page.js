import Achievement from "@/Component/achievement/Achievement";
import Banner from "@/Component/Banner/Banner";
import ClientReview from "@/Component/ClientReview/ClientReview";
import RecentlySold from "@/Component/RecentlySold/RecentlySold";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <div className="">
        <ClientReview></ClientReview>
      </div>
      <Achievement></Achievement>
      <RecentlySold></RecentlySold>
    </div>
  );
}
