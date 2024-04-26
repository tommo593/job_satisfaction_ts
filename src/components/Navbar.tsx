import LoginButton from "../auth/Login";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between">
      <div>
        <img src="fulfilld_logo.jpg" alt="" className="max-w-80" />
      </div>
      <h1 className="text-center m-auto pr-8">Employee Satisfaction Survey</h1>
      <div className="mr-8 pt-12">
        <LoginButton />
      </div>
    </div>
  );
};

export default Navbar;
