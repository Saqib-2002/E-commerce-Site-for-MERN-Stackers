const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <NavItems />
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

export default Navbar;
