import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const onChange = (e, setter) => {
    const { target: { value = "" } = {} } = e || {};
    setter(value);
  };

  const openNewPage = (message) => {
    window.open(
      `https://wa.me/+6285268083758?text=${message}`,
      "Popup",
      "location,status,scrollbars,resizable,width=600, height=600"
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    openNewPage(email + "+" + text);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img
          src="https://icon-library.com/images/4d2b9bc29e_90815.png"
          alt=""
        />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              console.log(e.target.value);
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="Email"
          />
          <textarea
            placeholder="Message"
            onChange={(e) => {
              console.log(e.target.value);
              setText(e.target.value);
            }}
          ></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply your message :) </span>}
        </form>
      </div>
    </div>
  );
}
