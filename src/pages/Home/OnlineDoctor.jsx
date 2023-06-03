import videoCallImage from "./Photos/videoCallPhoto.png";

function OnlineDoctor() {
  return (
    <>
      <div className="flex justify-between items-center mt-32">
        <div className="">
          <img src={videoCallImage} alt="" />
        </div>

        <div className="">
          <div className="">
            <h1 className="text-5xl pb-4">
              Start an{" "}
              <span className="text-primaryColor">
                Online <br /> consultation
              </span>
              with a doctor
            </h1>
            <p>
              Access Video consultation with Khulna's top doctor on the <br />{" "}
              Wecare app. Connect with doctors online abailable 24/7, <br />{" "}
              from the comfrot of your home.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 mt-10">
            <div className="flex  gap-2">
              <input
                id="chat"
                name="onlineCommunication"
                className="w-4"
                type="radio"
              />
              <div className="">
                <label
                  className="hover:bg-secondaryColor ease-in duration-100 cursor-pointer flex items-center gap-1 shadow-[0px_0px_10px_5px_#e7e0e0] px-4 py-1 rounded-full "
                  htmlFor="chat"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Chat
                </label>
              </div>
            </div>

            <div className="flex  gap-2">
              <input
                id="query"
                name="onlineCommunication"
                className="w-4"
                type="radio"
              />
              <div className="">
                <label
                  className="hover:bg-secondaryColor ease-in duration-100 cursor-pointer flex items-center gap-1 shadow-[0px_0px_10px_5px_#e7e0e0] px-4 py-1 rounded-full "
                  htmlFor="query"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Query
                </label>
              </div>
            </div>

            <div className="flex  gap-2">
              <input
                id="phoneCall"
                name="onlineCommunication"
                className="w-4"
                type="radio"
              />
              <div className=" ">
                <label
                  className="hover:bg-secondaryColor ease-in duration-100  cursor-pointer flex items-center gap-1 shadow-[0px_0px_10px_5px_#e7e0e0] px-4 py-1 rounded-full "
                  htmlFor="phoneCall"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Phone Call
                </label>
              </div>
            </div>

            <div className="flex  gap-2">
              <input
                id="videoCall"
                name="onlineCommunication"
                className="w-4"
                type="radio"
              />
              <div className="">
                <label
                  className="hover:bg-secondaryColor ease-in duration-100 cursor-pointer flex items-center gap-1 shadow-[0px_0px_10px_5px_#e7e0e0] px-4 py-1 rounded-full "
                  htmlFor="videoCall"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                  </svg>
                  Video Call
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OnlineDoctor;
