const Navbar = ({ isActive, setIsActive, setIsClicked, isClicked }) => {
  const handleOnClick = (model) => {
    setTimeout(() => {
      setIsActive(model);
    }, 900);
    setIsClicked(model);
  };

  return (
    <nav>
      <p onClick={() => handleOnClick("sausage")}>Sausage</p>
      <p onClick={() => handleOnClick("ghost")}>Ghost</p>
    </nav>
  );
};

export default Navbar;
