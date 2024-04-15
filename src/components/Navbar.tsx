import SubmitBtn from "./SubmitBtn";

const Navbar = () => {
  return (
    <div>
      <h1 className="text-center">Employee Satisfaction Survey</h1>
      <div className="justify-end">
        <SubmitBtn type="submit" title="Login" />
      </div>
    </div>
  );
};

export default Navbar;
