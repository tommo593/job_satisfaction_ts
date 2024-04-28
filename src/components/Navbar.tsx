//import LoginButton from "../auth/Login";

const Navbar = () => {
  return (
    <div className="nav flex flex-row items-center justify-between gap-4 px-4 m-8">
      <div>
        <img
          src="fulfilld_logo.jpg"
          alt="Fulfilld"
          title="Fulfilld"
          className="max-h-20 m-8 object-scale-down"
        />
      </div>
      <h1>Employee Satisfaction Survey</h1>
      {/*
      <div className="p-8">
        <LoginButton />
  </div> */}
    </div>
  );
};

export default Navbar;
