import Link from './Link';

function TextContact() {
  return (
    <div className="text-contact">
      <a className="contact-link regular-para" href="mailto:tharushadgunawardane@gmail.com">tharushadgunawardane@gmail.com</a><br />
      <p className="contact-link regular-para">+94 755 589 085</p>
      <Link href="https://github.com/Tharushag" text="github.com/Tharushag" />
      <Link href="https://www.linkedin.com/in/tharusha-gunawardane-80a014252" text="linkedin.com/in/tharusha-gunawardane" />
    </div>
  );
}

export default TextContact;
