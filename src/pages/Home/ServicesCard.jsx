function ServiceCard({ logo, paragrap, name }) {
  return (
    <>
      <div className="hover:bg-gradient-to-t hover:ease-in hover:duration-300 hover:from-primaryColor  hover:to-secondaryColor rounded-md p-1">
        <div className="bg-textWhite ease-in duration-100 text-center px-5 py-10 hover:shadow-[0px_0px_16px_5px_#e7e0e0] transition">
          <div className="flex justify-center">
            <img className="w-10" src={logo} alt="" />
          </div>
          <h1 className="font-bold mt-2">{name}</h1>
          <p className="text-sm mt-5">{paragrap}</p>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
