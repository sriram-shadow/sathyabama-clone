
import BannerSlider from "../components/BannerSlider";
import LatestNews from "../components/LatestNews";
import Placements from "../components/Placements";

export default function Home() {
  return (
    <>
      <BannerSlider />
      <LatestNews />
      <div>
      <img src="/images/image_14.png" alt="publication" style={{ width: "100%", height: "auto", margin: "20px 0" }} />
      </div>
      <Placements />
    </>
  );
}
