import logo1 from '../assets/WorldECitizens.png'
import logo2 from '../assets/GlobalSchoolAlliance.png'

function Home() {
  return ( 
    <div className="grid col-span-4 ">
      <div className="flex justify-between items-center">
        <div className='flex justify-center align-center'>
          <img src={logo1} />
          <h2>World E Citizens</h2>
        </div>
        <div>
          <h1>Welcome to the Peace room</h1>
          <h2>Vrede! - Peace!</h2>
        </div>
        <div>
          <img src={logo2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;