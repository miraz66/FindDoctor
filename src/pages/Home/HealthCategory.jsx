function HealthCategory({ HealthName, logo }) {
  return (
    <div>
      <div className="hover:bg-gradient-to-t hover:from-primaryColor  hover:to-secondaryColor rounded-md p-1">
        <div className="px-3 py-10 bg-textWhite hover:bg-secondaryColor ease-in duration-200 text-center rounded-md  shadow-[0px_0px_16px_5px_#e7e0e0] flex flex-col gap-5 items-center">
          <img
            className="p-1 bg-primaryColor w-12 rounded-full"
            src={logo}
            alt=""
          />

          <h3>{HealthName}</h3>
        </div>
      </div>
    </div>
  );
}

export default HealthCategory;
