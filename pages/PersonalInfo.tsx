import Navbar from "../src/components/Navbar";
import { useFormStatus } from "react-dom";

const infoForm = () => {
  const { pending } = useFormStatus();
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="">
        <p className="header-text p-8">
          Please fill in the the form below and apply the options most relevant
          to you.
        </p>
      </div>
      <div className="m-auto items-center flex flex-col justify-center w-40">
        <form action="">
          <div>
            <div>
              <select name="Gender" id="salary">
                <option value="">Select your age</option>
                <option value="">18 -25</option>
                <option value="">25 - 35</option>
                <option value="">35 - 45 </option>
                <option value="">45+</option>
              </select>
            </div>
            <div>
              <select name="Gender" id="salary">
                <option value="">How long have you been at the company?</option>
                <option value="">- 1 year</option>
                <option value="">1-2 years</option>
                <option value="">2 - 5 years</option>
                <option value="">5 + years</option>
              </select>
            </div>
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
          <input
            type="text"
            placeholder="Type your job title here"
            className="info-form"
          />
          <div>
            <select name="Salary" id="salary">
              <option value="">Salary</option>
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
          disabled={pending}
          className="bg-button_bg hover:bg-slider_bg transition duration-300 px-8 py-2 rounded text-lg mt-8"
        >
          {pending ? "Submitting..." : "Submit"}
        </button>
      </a>
    </div>
  );
};

export default infoForm;
