import { useState } from "react";
import "./work.scss";
export default function Work() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "./assets/Globe.png",
      title: "web",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,obcaecati nihil blanditiis numquam dolor.",
      img: "https://www.exabytes.co.id/blog/wp-content/uploads/2021/02/COID-1200x630-_Template_web_Portfolio_.jpg",
    },
    
    {
      id: "2",
      icon: "./assets/Mobile.png",
      title: "Mobile",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,obcaecati nihil blanditiis numquam dolor.",
      img: "https://www.exabytes.co.id/blog/wp-content/uploads/2021/02/COID-1200x630-_Template_web_Portfolio_.jpg",
    },
    {
      id: "3",
      icon: "./assets/Wraiting .png",
      title: "Wraiting",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,obcaecati nihil blanditiis numquam dolor.",
      img: "https://www.exabytes.co.id/blog/wp-content/uploads/2021/02/COID-1200x630-_Template_web_Portfolio_.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="work" id="work">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://www.niagahoster.co.id/blog/wp-content/uploads/2019/12/masonry-template-web-portofolio-1024x622.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("")}
      />
    </div>
  );
}
