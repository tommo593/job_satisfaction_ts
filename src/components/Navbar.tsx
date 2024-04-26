import LoginButton from "../auth/Login";

const Navbar = () => {
  return (
    <div className="flex flex-row">
      <div>
        <img
          src="fulfilld_logo.jpg"
          alt="Fulfilld"
          title="Fulfilld"
          className="max-w-60 p-8"
        />
      </div>
      <h1 className="text-center m-auto pr-8">Employee Satisfaction Survey</h1>
      <div className="p-8">
        <LoginButton />
      </div>
    </div>
  );
};

export default Navbar;
