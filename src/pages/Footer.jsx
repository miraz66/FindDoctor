import Button from "../Components/Button";
import MainIocn from "../assets/doctor-icon-png.png";
import LinkinIcon from "../assets/icons8-linkedin-100-2.svg";
import TwitterIcon from "../assets/icons8-twitter-50.svg";

function Footer() {
  return (
    <div className="bg-secondaryColor">
      <div className="max-w-7xl mx-auto flex justify-between pt-14">
        <div className="shrink w-1/4 ">
          <div className="flex gap-2">
            <img className="w-7" src={MainIocn} alt="" />
            <h1 className="text-primaryColor font-bold text-2xl">
              Find <span className="text-primaryTextColor">Doctor</span>
            </h1>
          </div>
          <p className="py-7">
            Your health is our first prioirity so we are ready to help you with
            your health consultation.
          </p>

          <div className="flex  gap-2">
            <img
              className="text-primaryColor w-9 bg-textWhite p-[10px] rounded-full"
              src={LinkinIcon}
              alt=""
            />
            <img
              className="text-primaryColor w-9 bg-textWhite p-[10px] rounded-full"
              src={TwitterIcon}
              alt=""
            />
          </div>
        </div>

        <div className="shrink w-2/4 flex justify-center gap-20">
          <ul className="flex flex-col gap-2">
            <li className="text-lg font-bold">Quick Links</li>
            <li className="hover:underline">
              <a href="http://localhost:5173/">Home</a>
            </li>
            <li className="hover:underline">
              <a href="http://localhost:5173/service">Service</a>
            </li>
            <li className="hover:underline">
              <a href="http://localhost:5173/findDoctor">Find Doctor</a>
            </li>
            <li className="hover:underline">
              <a href="http://localhost:5173/howItWork">How it Works</a>
            </li>
            <li className="hover:underline">
              <a href="http://localhost:5173/contact">Contact Us</a>
            </li>
          </ul>

          <ul className="flex flex-col gap-2">
            <li className="text-lg font-bold">
              <a href="">About</a>
            </li>
            <li className="hover:underline">
              <a href="">Help Center</a>
            </li>
            <li className="hover:underline">
              <a href="">Consultation</a>
            </li>
            <li className="hover:underline">
              <a href="">Appointment</a>
            </li>
            <li className="hover:underline">
              <a href="">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="shrink w-1/4 ">
          <h1 className="text-xl font-bold">Subscribe Our Newsletter</h1>

          <input
            placeholder="Email Address"
            className="py-3 pl-5 w-full rounded-md border mb-3 mt-10"
            type="text"
          />
          <Button
            name={"Submit"}
            css={
              "py-3 bg-primaryColor w-full rounded-md text-textWhite font-bold"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
