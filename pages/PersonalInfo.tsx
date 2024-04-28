import Navbar from "../src/components/Navbar";

const infoForm = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <p className="header-text p-8">
          Please fill in the the form below and apply the options most relevant
          to you.
        </p>
      </div>
      <div className="m-auto items-center flex flex-col justify-center w-40">
        <form action="#" className="bg-slider_bg">
          <div>
            <label htmlFor="">
              Gender:
              <input type="radio" value="Male" />
            </label>
            <label htmlFor="">
              <input type="radio" value="Female" />
            </label>
          </div>
          <div></div>
          <label htmlFor="">
            Job Title: <input type="text" />
          </label>
          <div>
            <label htmlFor="">
              Salary:
              <select name="salary" id="salary" multiple>
                <option value="">£20,000 - £30,000</option>
                <option value="">£30,001 - £45,000</option>
                <option value="">£45,001 - £60,000</option>
                <option value="">£60,001 - £80,000</option>
                <option value="">£80,000+</option>
              </select>
            </label>
          </div>
        </form>
      </div>
      <button
        type="submit"
        className="bg-button_bg hover:bg-slider_bg transition duration-300 px-8 py-2 rounded text-lg mt-8"
      >
        Submit
      </button>
    </div>
  );
};

export default infoForm;
