const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <NavItems />
        <RightNav/>
      </nav>
    </>
  );
};

const NavItems = () => {
  const navItem = ["Home", "Shop", "Deals", "Contact", "About Us"];
  // console.log(navItem);

  return navItem.map((items, index) => {
    return (
      <div className="nav-link" key={index}>
        <a href="#">{items}</a>
      </div>
    );
  });
};

const RightNav = ()=> {
  return (
    <div className="right-nav">
      <a href="#">Sign Up</a>
    </div>
  )
}

export default Navbar;
