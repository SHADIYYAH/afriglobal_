import { useFormik } from "formik";
import axios from "axios";
import { validateLogin } from "../../validations/login";
import { network } from "../../components/url/network";
import { API_URL } from "../../services/api";
// import { useNavigate } from "react-router-dom";
import Africover from "../../assets/africover.png";

const Login = () => {
//   const redirect = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateLogin,
    onSubmit: async (values) => {
      try {
        const response = await axios({
          method: "POST",
          url: `${network.baseURL}${API_URL.LOGINURL}`,
          data: values,
        });
        console.log("response", response.data);

        if (response.data.status === false)
          throw new Error(response.data.message);

        localStorage.setItem("userToken", response.data.token);
        // redirect("/dashboard");
      } catch (error) {
        console.log(error);
        // alert(error.response.data.message || "Sorry something went wrong");
        console.log(error.response.data.message )
      }
    },
  });
  return (
    <div className=" ">
      <div className="flex justify-center items-center  h-screen bg-green-800 ">
        <div>
          <div>
            <img src={Africover} alt="" className="w-[5rem]" />
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="   space-y-4 w-[35rem] p-[5rem] h-[35rem] bg-white drop-shadow-lg shadow-slate-50 rounded-lg"
          >
            <h1 className="font-bold mt-2">Customer's Login</h1>
            <label htmlFor="">Email Address </label>

            <input
              type="text"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="w-[25rem] border-b-2  rounded-md  hover:border-green-300  block outline-none"
              placeholder="shadiyyah@gmail.com"
            />

            {formik.errors.email ? <div>{formik.errors.email}</div> : null}

            <label htmlFor="">Password </label>

            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="w-[25rem] border-b-2  rounded-md  hover:border-green-300  block outline-none"
              placeholder="Password"
            />

            {formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}

            <p>Forgot Password ?</p>
            <button className="w-[25rem] mt-[2rem] text-center py-[0.8rem] px-[1rem] text-white font-semibold rounded-lg hover:bg-gradient-to-r from-green-900 via-yellow-900 to-orange-900  bg-black">
              Sign In
            </button>

            <div className="flex flex-row gap-2 font-thin">
              <p>Are you a new customer?</p>
              <button className="">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
