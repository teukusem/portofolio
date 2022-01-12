import "./testimoni.scss";

export default function Testimoni() {
  const data = [
    {
      id: 1,
      name: "Teuku Fadhlul",
      title: "Ceo Of Microsoft",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,obcaecati nihil blanditiis numquam dolor.",
      img: "https://www.exabytes.co.id/blog/wp-content/uploads/2021/02/COID-1200x630-_Template_web_Portfolio_.jpg",
    },
    {
      id: 2,
      name: "Teuku Mufti",
      title: "Ceo Of Samsung",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,obcaecati nihil blanditiis numquam dolor.",
      img: "https://www.exabytes.co.id/blog/wp-content/uploads/2021/02/COID-1200x630-_Template_web_Portfolio_.jpg",
        featured: true,
      },
  ];
  return (
    <div className="testimoni" id="testimoni">
      <h1>Testimonial</h1>
      <div className="container">
        {data.map((data) => (
          <div className={data.featured? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={data.img} alt="" />
              <img className="right" src={data.icon} alt="" />
            </div>
            <div className="center">{data.desc}</div>
            <div className="bottom">
              <h3>{data.name}</h3>
              <h4>{data.title }</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
