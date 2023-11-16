import ReactCodeInput from "react-code-input";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { API_URL } from "../../services/api";
import { network } from "../../components/url/network";
import axios from "axios";

const VerifyOtp = () => {
//   const redirect = useNavigate();
  const [otp, setOtp] = useState("");

  const handleOtp = (_otp) => {
    setOtp(_otp);
  };

  const otpSubmit = async () => {
    const getCustomerEmail = await localStorage.getItem("email");
    try {
      const response = await axios({
        method: "get",
        url: `${network.baseURL}${API_URL.VERIFYOTP}/${getCustomerEmail}/${otp}`,
        // data: JSON.stringify(otp),
      });
      console.log(response);

      if (response.data.status === false)
        throw new Error(response.data.message);

      alert("OTP verified suceesfully");

    //   redirect("/auth/login");
    } catch (error) {
      console.log(error);
      alert(
        error.response.data.message || "What you seek is beyond this globe"
      );
    }
  };
  return (
    <div>
      <div className=" w-full h-screen flex flex-col justify-center items-center bg-polygon bg-no-repeat bg-left-bottom">
        <h1 className="font-bold"> Kindly verify the OTP sent to your email</h1>

        <ReactCodeInput
          type="text"
          value={otp}
          onChange={handleOtp}
          fields={4}
        />

        <button
          onClick={otpSubmit}
          className=" mt-[3rem] text-[2rem] text-center text-white font-semibold w-[20rem] bg-black rounded-lg px-[1rem] py-[1rem] "
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default VerifyOtp;