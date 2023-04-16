import ContactIcon from "./ContactIcon";
import emailImg from '../icons/email.png'
import githubImg from '../icons/github.png'
import linkedinImg from '../icons/linkedin.png'
import PhoneIcon from "./PhoneIcon";

function IconContact() {
  return (
    <div className="icon-contact">
      <ContactIcon
        text="tharushadgunawardane@gmail.com"
        link="mailto:tharushadgunawardane@gmail.com"
        img={ emailImg }
        altText="Email"
      />
      <PhoneIcon />
      <ContactIcon
        text="github.com/Tharushag"
        link="https://github.com/Tharushag"
        img={ githubImg }
        altText="Github"
      />
      <ContactIcon
        text="linkedin.com/in/tharusha-gunawardane-80a014252"
        link="https://www.linkedin.com/in/tharusha-gunawardane-80a014252"
        img={ linkedinImg }
        altText="Linkedin"
      />
    </div>
  );
}

export default IconContact;
