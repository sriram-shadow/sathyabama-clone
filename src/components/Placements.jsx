import "./Placements.css";

export default function Placements() {
  const companies = [
    { img: "/images/tcs.png", name: "TCS" },
    { img: "/images/infosys.png", name: "Infosys" },
    { img: "/images/wipro.png", name: "Wipro" },
    { img: "/images/hcl.png", name: "HCL" },
  ];

  return (
    <section className="placements">
      <h2>Campus Placements</h2>
      <div className="logos">
        {companies.map((company, index) => (
          <img key={index} src={company.img} alt={company.name} />
        ))}
      </div>
    </section>
  );
}
