import "./NewsSlider.css";

export default function NewsSlider() {
  return (
    <section className="news-slider">
      <div className="left-news">
        <p>News Update</p>
      </div>
      <div className="right-slides">
        <marquee behavior="scroll" direction="left">
          <a href="#">Top 10 best colleges in Chennai |</a>
          <a href="#">100% campus placements for all the students |</a>
          <a href="#">Only high income jobs</a>
        </marquee>
      </div>
    </section>
  );
}
