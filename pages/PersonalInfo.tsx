import Navbar from "../src/components/Navbar";

const infoForm = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <form action="" className="flex flex-col">
        <label htmlFor="">
          Gender:
          <input type="radio" value="Male" />
        </label>
        <label htmlFor="">
          <input type="radio" value="Female" />
        </label>
        <label htmlFor="">
          Age: <input type="text" />
        </label>
        <label htmlFor="">
          Job Title: <input type="text" />
        </label>
        <label htmlFor="">
          Salary:{" "}
          <select name="salary" id="salary" multiple>
            <option value="">£20,000 - £30,000</option>
            <option value="">£30,001 - £45,000</option>
            <option value="">£45,001 - £60,000</option>
            <option value="">£60,001 - £80,000</option>
            <option value="">£80,000+</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default infoForm;
