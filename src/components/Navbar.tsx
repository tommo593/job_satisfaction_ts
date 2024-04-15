const Navbar = () => {
  return (
    <div className="flex flex-row justify-between">
      <h1 className="text-center m-auto">Employee Satisfaction Survey</h1>
      <div>
        <button
          type="submit"
          className="font-bold transition-all hover:bg-purple-900 active:bg-purple-600 rounded p-2"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
