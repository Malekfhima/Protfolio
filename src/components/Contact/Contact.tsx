import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to start your project?</p>
        <p>Contact me now for a free consultation.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:malek.fhima@example.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:malekfhima1@gmail.com">malekfhima1@gmail.com</a>
        </div>
        <div>
          <a href="tel:+21655123456">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+21625992977">(+216) 25 992 977</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  );
}
