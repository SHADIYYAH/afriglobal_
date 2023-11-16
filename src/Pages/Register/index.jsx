import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import SIGN from "../../assets/sign-up.svg";
// import { network } from "../../components/url/network";
import { API_URL } from "../../services/api";
import axios from "axios";
const Register = () => {
  // const redirect = useNavigate()
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios({
        method: "post",
        url:  `${process.env.REACT_APP_API_HOST}${API_URL.SIGNUPURL}`,
        // url: "http://127.0.0.1:6000/api/v1/user/register",
        data: formData,
        headers: { "Content-Type": "application/json" },
      });
      console.log(process.env.REACT_APP_API_HOST)

      if (response.data.status === false) throw new Error(response.data.message);

      alert(response.data.message);

      localStorage.setItem("email", formData.email);
      //   redirect("/auth/verify-otp");
    } catch (error) {
      console.log(error);
    //   alert(error.response.data.message || "Sorry something went wrong");
    }
  };
  return (
    <div className="">
      <div className=" h-screen flex items-center">
        <div className="flex items-center px-7 drop-shadow-2xl rounded-lg ">
          <div className="h-[6rem] w-[15rem]">
            <img src={SIGN} alt="" />
          </div>
          <div className=" h-[6rem] w-[15rem]">
            <form className="     bg-white  ">
              <label
                className="text-[1rem] text-bold font-medium block"
                htmlFor=""
              >
                First Name{" "}
              </label>

              <input
                type="  "
                name="firstname"
                onChange={(e) =>
                  setFormData({ ...formData, firstname: e.target.value })
                }
                value={formData.firstname}
                className="w-[15rem] border-b-2 rounded-md block   hover:border-black outline-none"
                placeholder="First Name"
              />
              <label className="text-[1rem] font-medium block" htmlFor="">
                Last Name{" "}
              </label>

              <input
                type="  "
                name="lastname"
                onChange={(e) =>
                  setFormData({ ...formData, lastname: e.target.value })
                }
                value={formData.lastname}
                className="w-[15rem] border-b-2 rounded-md block   hover:border-black outline-none"
                placeholder="Last Name"
              />

              <label className="text-[1rem] font-medium block" htmlFor="">
                Email
              </label>
              <input
                type="  "
                name="email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                value={formData.email}
                className="w-[15rem] border-b-2  rounded-md  hover:border-black  block outline-none"
                placeholder="shadiyyah@gmail.com"
              />

              <label className="text-[1rem] font-medium block" htmlFor="">
                Phone Number{" "}
              </label>
              <input
                type="  "
                name="phone"
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                value={formData.phone}
                className="w-[15rem] border-b-2  rounded-md  hover:border-black  block outline-none"
                placeholder="Phone Number"
              />

              <label className="text-[1rem] font-medium block" htmlFor="">
                Password{" "}
              </label>
              <input
                type=" "
                name="password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                value={formData.password}
                className="w-[15rem] border-b-2  rounded-md  hover:border-black  block outline-none"
                placeholder="Password"
              />

              <button
              onClick={handleSubmit}
                type="submit"
                className="w-[14rem] mt-[2rem] text-center py-[0.8rem] px-[1rem] text-white font-semibold rounded-lg   bg-black "
              >
                CREATE ACCOUNT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
