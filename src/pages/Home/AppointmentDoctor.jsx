import Button from "../../Components/Button";
function AppointmentDoctor() {
  return (
    <>
      <div className="grid grid-cols-5 py-20 mt-20">
        <div className="col-span-2 pt-5 pb-32">
          <h1 className="text-4xl font-bold">
            Book an{" "}
            <span className="text-primaryColor">
              online <br /> appointment
            </span>
            , today!
          </h1>
          <div className="py-8">
            <p className="pb-3">
              We offer you the bes services for over <br /> millions of
              residents in various location.
            </p>
            <p>
              Find & book appointments with Doctors, <br /> Clinics, Hospitals &
              Diagnostic Tests.
            </p>
          </div>

          <Button
            name={"See Availability"}
            css={"px-5 py-2 bg-primaryColor text-textWhite rounded-md"}
          />
        </div>

        <div className="relative col-span-3 rounded-r-3xl w-full h-full bg-[url('https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80')]">
          <div className="absolute  bg-textWhite p-5 mt-10 -ml-20 shadow-xl rounded-md">
            <h1 className="text-lg text-center pb-5"> Book Appointment</h1>
            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <label htmlFor="">Name*</label>
                <input
                  className="bg-[#efefef] py-2 px-5 text-primaryTextColor rounded-md text-sm"
                  type="text"
                  placeholder="Full name"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="">Location*</label>
                <input
                  className="bg-[#efefef] py-2 px-5 text-primaryTextColor rounded-md text-sm"
                  type="text"
                  placeholder="Enter location"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Search Doctors*</label>
                <input
                  className="bg-[#efefef] py-2 px-5 text-primaryTextColor rounded-md text-sm"
                  type="text"
                  placeholder="Search Doctors, Hospitals, Clinics"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="">Select Service*</label>
                <input
                  className="bg-[#efefef] py-2 px-5 text-primaryTextColor rounded-md text-sm"
                  type="text"
                  placeholder="Enter Service"
                />
              </div>

              <button className="py-2 text-bold bg-secondaryColor text-primaryColor rounded-md">
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppointmentDoctor;
