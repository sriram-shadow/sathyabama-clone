import "./LatestNews.css";

export default function LatestNews() {
  const newsItems = [
    {
      img: "/images/news1.webp",
      title: "Workshop on AI",
      date: "Sept 5, 2025",
    },
    {
      img: "/images/news2.jpg",
      title: "International Conference",
      date: "Aug 28, 2025",
    },
    {
      img: "/images/news3.jpg",
      title: "Placement Drive 2025",
      date: "Aug 20, 2025",
    },
  ];

  return (
    <section className="news">
      <h2>Latest News</h2>
      <div className="news-cards">
        {newsItems.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
