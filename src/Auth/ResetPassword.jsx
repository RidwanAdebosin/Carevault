import "../AuthCss/ResetPassword.css";
import { useNavigate } from "react-router-dom";

import CareVault from "../../assets/CareVault.png";

const ResetPassword = () => {
  const nav = useNavigate();
  return (
    <div className="ResetPassword">
      <form action="" className="resetPassword-form">
        <div className="company-logo">
          <img src={CareVault} alt="" />
          {/* <img src={img} alt="" className="cancel" /> */}
        </div>
        <div className="form-Text">
          <h2>Reset Password?</h2>
          <p>Create a new secured password</p>
        </div>
        <div className="resetPassword-input-div">
          <input type="paasword" placeholder="NewPassword" />
          <input type="paasword" placeholder="Confirm NewPassword" />
          <button onClick={() => nav("/successpage")}>Reset Password</button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
