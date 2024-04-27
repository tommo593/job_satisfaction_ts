//import LoginButton from "../auth/Login";

const Navbar = () => {
  return (
    <div className="flex flex-row">
      <div>
        <img
          src="fulfilld_logo.jpg"
          alt="Fulfilld"
          title="Fulfilld"
          className="max-w-full max-h-20 m-8 object-scale-down"
        />
      </div>
      <h1 className="text-center m-auto">Employee Satisfaction Survey</h1>
      {/*
      <div className="p-8">
        <LoginButton />
  </div> */}
    </div>
  );
};

export default Navbar;
