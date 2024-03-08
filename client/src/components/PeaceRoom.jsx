import logo1 from "../assets/WorldECitizens.png";
import logo2 from "../assets/GlobalSchoolAlliance.png";
import Mapper from "./Mapper";

function PeaceRoom() {

  return (
    <div className="flex flex-col justify-start items-center">
      <div className="grid grid-cols-4 h-full p-4 w-full">
        <div className="flex justify-around items-center col-span-4">
          <div className="flex justify-center items-center ">
            <img src={logo1} className="h-40" />
            <h2 className="font-Zeyada text-4xl">World E Citizens</h2>
          </div>
          <div className="flex justify-center items-center flex-col">
            <h1 className="font-Zeyada text-3xl">Welcome to the Peace room</h1>
            <h2 className="font-Zeyada text-3xl">Vrede! - Peace!</h2>
          </div>
          <div className="flex justify-center items-center ">
            <img src={logo2} className="h-40" />
          </div>
        </div>
        <div className="h-full col-span-1 border-sky-600 border-8 border-solid p-4 flex justify-around items-center flex-col rounded-md"></div>
        <div className=" h-128 col-span-2 w-full">
          <Mapper />
        </div>
      </div>
    </div>
  );
}

export default PeaceRoom;
