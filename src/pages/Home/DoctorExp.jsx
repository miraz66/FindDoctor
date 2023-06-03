// eslint-disable-next-line react/prop-types
function DoctorExp({ DoctorPhoto, name, category, patiens, star, address }) {
  return (
    <>
      <div className="hover:bg-gradient-to-t hover:from-primaryColor  hover:to-secondaryColor rounded-md p-[3px]">
        <div className="">
          <img
            className="object-cover rounded-t-lg h-[260px] w-full"
            src={DoctorPhoto}
            alt=""
          />
        </div>

        <div className="radial-gradient rounded-b-lg p-4">
          <h1 className="text-xl">{name}</h1>
          <div className="flex justify-between my-3">
            <div className="bg-secondaryColor text-primaryColor px-4 py-1 rounded-md">
              {category}
            </div>
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-[#f0cd08]"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              <p>{star}</p>
            </div>
          </div>
          <p className="text-primaryTextColor font-bold pb-1">
            +{patiens} patiens
          </p>
          <p className="text-xs text-secondaryTextColor">{address}</p>
        </div>
      </div>
    </>
  );
}

export default DoctorExp;
