import Image from "next/image";
const GloalLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <Image src={"global_loading.svg"} alt="Loading..." width={200} height={200}/>
    </div>
  );
};

export default GloalLoader;
