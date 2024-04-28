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
      <div className="info-form m-auto items-center flex flex-col justify-center w-40">
        <form action="#">
          <div>
            <input type="text" placeholder="Type your age here" />
            <div>
              <select name="Gender" id="salary">
                <option value="">Gender</option>
                <option value="">Male</option>
                <option value="">Female</option>
                <option value="">Other</option>
                <option value="">Prefer not to say</option>
              </select>
            </div>
          </div>
          <input type="text" placeholder="Type your job title here" />
          <div>
            <select name="Salary" id="salary">
              <option value="">£20,000 - £30,000</option>
              <option value="">£30,001 - £45,000</option>
              <option value="">£45,001 - £60,000</option>
              <option value="">£60,001 - £80,000</option>
              <option value="">£80,000+</option>
            </select>
          </div>
        </form>
      </div>
      <a href="/questions">
        <button
          type="submit"
          className="bg-button_bg hover:bg-slider_bg transition duration-300 px-8 py-2 rounded text-lg mt-8"
        >
          Submit
        </button>
      </a>
    </div>
  );
};

export default infoForm;
