const Navbar = ({ isActive, setIsActive }) => {
  return (
    <nav>
      <p onClick={() => setIsActive("sausage")}>Sausage</p>
      <p onClick={() => setIsActive("ghost")}>Ghost</p>
    </nav>
  );
};

export default Navbar;
