import Navbar from "./Navbar";
import Phone from "../assets/images/Subtract.png";
import linkIcon from "../assets/images/addlinkicon.jpg";

const Addlink = () => {
  return (
    <>
      <Navbar />
      <div className="add-link-container">
        <div className="left-side">{/* <img src={Phone} alt="Phone" /> */}</div>
        <div className="right-side">
          <div className="">
            <h1 className="login-text">Customize your links</h1>
            <p className="body-m">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
            <button className="add-link-btn">+ Add new link</button>
          </div>
          <div className="add-link-btn-container">
            <div className="pretext-container">
              <img src={linkIcon} alt="link-icon" />
              <h1 className="login-text">Let’s get you started</h1>
              <p className="body-m">
                Use the “Add new link” button to get started. Once you have more
                than one link, you can reorder and edit them. We’re here to help
                you share your profiles with everyone!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Addlink;
