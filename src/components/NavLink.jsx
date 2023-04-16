function NavLink(props) {
  return (
    <li>
      <a href={ props.link } className="nav-link">{ props.text }</a>
    </li>
  );
}

export default NavLink;
