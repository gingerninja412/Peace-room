import WellcomeVideo from '../assets/WellcomeVideo.mp4'

function WelcomeVideo() {
  return ( 
    <div className="h-full flex justify-center items-center flex-col gap-8">
      <div>
        <h1 className='font-Zeyada text-7xl underline decoration-sky-600'>Welcome video</h1>
      </div>
      <iframe src={WellcomeVideo} className='h-3/4 w-1/2 border-8 border-sky-600 rounded-md'></iframe>
    </div>
   );
}

export default WelcomeVideo;