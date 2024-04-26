import LoginButton from "../auth/Login";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between">
      <h1 className="text-center m-auto">Employee Satisfaction Survey</h1>
      <div>
        <LoginButton />
      </div>
    </div>
  );
};

export default Navbar;
