import Button from "../../Components/Button";
import SearchDoctor from "./SearchDoctor";
import ServiceCard from "./ServicesCard";
import HealthCategory from "./HealthCategory";
import DoctorExp from "./DoctorExp";
import CountButton from "./CountButton";
import OnlineDoctor from "./OnlineDoctor";
import AppointmentDoctor from "./AppointmentDoctor";
import ReviewsPatients from "./ReviewsPatients";
import QuestionsDetails from "./QuestionsDetails";
import Footer from "../Footer";

import DoctorPhotos from "./Photos/DoctorPhotos.png";
import logo from "./Photos/i1.svg";
import generalLogo from "./Photos/general.png";
import Doctor1 from "./Photos/usman-yousaf.jpg";

const option = ["option-1", "option-2", "option-3", "option-4", "option-5"];
const name = [
  { optionName: "Speciality", category: "Choose Speciality" },
  { optionName: "City", category: "Choose City" },
  { optionName: "Area", category: "Choose Area" },
  { optionName: "Name", category: "Doctor or hospital" },
];

const serviceName = [
  {
    logo: { logo },
    name: "Find Doctor",
    paragrap: "Before book an appointment find doctors near you.",
  },
  {
    logo: { logo },
    name: "Find Doctor",
    paragrap: "Before book an appointment find doctors near you.",
  },
  {
    logo: { logo },
    name: "Find Doctor",
    paragrap: "Before book an appointment find doctors near you.",
  },
  {
    logo: { logo },
    name: "Find Doctor",
    paragrap: "Before book an appointment find doctors near you.",
  },
];

const healthName = [
  "General Medicine",
  "General Medicine",
  "General Medicine",
  "General Medicine",
  "General Medicine",
  "General Medicine",
];

const expreienceDetails = [
  {
    name: "Lee S. Willimson",
    category: "Cardiologist",
    patiens: "2000",
    star: "4.5 (79)",
    address: "1300 N Vermant Ave 610, Los Angeles",
  },
  {
    name: "Lee S. Willimson",
    category: "Cardiologist",
    patiens: "2000",
    star: "4.5 (79)",
    address: "1300 N Vermant Ave 610, Los Angeles",
  },
  {
    name: "Lee S. Willimson",
    category: "Cardiologist",
    patiens: "2000",
    star: "4.5 (79)",
    address: "1300 N Vermant Ave 610, Los Angeles",
  },
  {
    name: "Lee S. Willimson",
    category: "Cardiologist",
    patiens: "2000",
    star: "4.5 (79)",
    address: "1300 N Vermant Ave 610, Los Angeles",
  },
];

function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto p-10">
        <div className="flex justify-between items-center  w-full mt-16 pb-16">
          <div className="mt-">
            <div className="text-black tracking-wider">
              <h1 className="text-5xl font-bold leading-snug">
                Your Trust is Our <br />
                Greatest <span className="text-blue-600 ">Incentive</span>
              </h1>

              <p className="tracking-wide pt-5 py-20">
                We are here for your care. Your health is our first prioirity so
                we are <br /> ready to help you with your health consultation.
              </p>
            </div>

            <div className="flex items-center gap-5 ">
              <Button
                css={"bg-primaryColor py-2 px-5 rounded-md text-textWhite"}
                name={"Make an appointment"}
              />

              <button className=" flex text-gray-800 border-2 border-gray-500 py-[8px] px-4 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-gray-500 "
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch video
              </button>
            </div>
          </div>

          <div className="">
            <img className="w-[650px] ml-12" src={DoctorPhotos} alt="" />

            <div className="grid grid-cols-5 gap-5 bg-textWhite py-5 px-3 rounded-md">
              {name.map((e, index) => (
                <SearchDoctor
                  key={index}
                  optionName={e.optionName}
                  option={option}
                  category={e.category}
                />
              ))}

              <Button
                css={"bg-primaryColor bg- py-1 px-5 rounded-md text-textWhite"}
                name={"Search"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-textWhite ">
        <div className="max-w-7xl mx-auto p-10">
          <div className="mt-10 flex items-center flex-col gap-1">
            <h1 className="text-primaryTextColor font-bold text-4xl">
              Our Services
            </h1>
            <div className="w-36 h-1 bg-primaryColor"></div>
          </div>

          {/* Services-Card */}
          <div className="mb-32 grid grid-cols-4 p-10 max-w-5xl mx-auto">
            {serviceName.map((e, index) => (
              <ServiceCard
                key={index}
                logo={logo}
                name={e.name}
                paragrap={e.paragrap}
              />
            ))}
          </div>

          {/* Health-Cards */}
          <div className="mt-10 ">
            <div className="flex justify-between">
              <h1 className="text-4xl font-semibold">
                Consult doctors online for any health concern
              </h1>

              <CountButton />
            </div>

            <div className="grid grid-cols-6 gap-10 mt-20">
              {healthName.map((healthName, index) => (
                <HealthCategory
                  key={index}
                  HealthName={healthName}
                  logo={generalLogo}
                />
              ))}
            </div>
          </div>

          {/* Online-Doctor */}
          <div className="">
            <OnlineDoctor />
          </div>

          {/* Doctor Expreience */}
          <div className="">
            <div className="flex justify-between items-center pb-20 mt-40">
              <h1 className="text-3xl">Meet Our Experience doctors</h1>
              <CountButton />
            </div>
            <div className="grid grid-cols-4 gap-7">
              {expreienceDetails.map((e, index) => (
                <DoctorExp
                  key={index}
                  name={e.name}
                  category={e.category}
                  patiens={e.patiens}
                  star={e.star}
                  address={e.address}
                  DoctorPhoto={Doctor1}
                />
              ))}
            </div>
          </div>

          {/* Appointment online Doctor */}
          <div className="">
            <AppointmentDoctor />
          </div>

          {/* Reviews Patients */}
          <div className="">
            <ReviewsPatients />
          </div>

          {/* Questions-Details */}

          <QuestionsDetails />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
