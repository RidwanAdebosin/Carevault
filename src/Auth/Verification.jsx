import CareVault from "../assets/CareVault.png";
import "../AuthCss/Verification.css";

const Verification = () => {
  return (
    <div className="Verification">
      <div className="Verification-form">
        <div className="company-logo">
          <img src={CareVault} alt="" />
          {/* <img src={img} alt="" className="cancel" /> */}
        </div>
        <div className="verification-text">
          <h3>Dear,</h3>
        </div>
      </div>
    </div>
  );
};

export default Verification;
