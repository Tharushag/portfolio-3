import { references } from '../Data';
import gitHubImg from '../icons/github.png';
import Link from './Link';

function Footer() {
  function createLink(item, index) {
    return <Link key={ index } href={ item.link } text={ item.text } />;
  }

  return (
    <footer>
      <div>
        <p className="regular-para">Credit</p>

        { references.map(createLink) }
      </div>

      <a href="https://github.com/Tharushag/portfolio-3" className="github-repo regular-para">
        <img src={ gitHubImg } alt="Github" className="non-draggable" />
        Find the code for my website in Github.
      </a>

      <label className="regular-para">&copy; Tharusha Gunawardane 2023 — All rights reserved.</label>
    </footer>
  );
}

export default Footer;
