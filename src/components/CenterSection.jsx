import { FaHeart,FaBell } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiLungs, GiTooth, GiBoneKnife } from 'react-icons/gi';
import human from "../assets/human.png"

const CenterSection = () => {
  return (
    <div className="flex flex-col w-[600px] h-screen px-6 py-4 ">
      {/* Top Bar */}
      <div className="flex justify-between items-center py-4 px-6 shadow bg-white">
   
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C9A7]"
        />
        <FaBell className="text-[#2D3A8C] text-xl cursor-pointer" />
      </div>
    </div>

      {/* Human Section */}
      <div className="flex gap-6">
        {/* Human Figure */}
        <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center w-[35%]">
          <div className="relative">
            <img
              src={human}
              alt="Human Body"
              className="h-72"
            />
            {/* Healthy Heart Tag */}
            <div className="absolute top-10 right-[-95px] mt-5 bg-[#4F46E5] text-white text-sm px-3 py-2 rounded-lg shadow-md">
              ❤️ Healthy Heart
            </div>
            {/* Healthy Leg Tag */}
            <div className="absolute bottom-14 left-[-70px] bg-[#06B6D4] text-white text-sm px-3 py-2 rounded-lg shadow-md">
              🦵 Healthy Leg
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col justify-between w-[35%]">
          <div className="grid grid-cols-1 gap-4">
            {/* Lungs */}
            <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <GiLungs className="text-3xl text-[#FF6B6B]" />
                <div>
                  <h4 className="font-semibold text-lg">Lungs</h4>
                  <p className="text-sm text-gray-500">Date: 26 Okt 2021</p>
                  <div className="w-full h-2 mt-3  bg-gray-200 rounded-full">
                    <div className="bg-red-500  h-full w-[80%] rounded-full">
                </div>
              </div>
                </div>
              </div>
             
            </div>

            {/* Teeth */}
            <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <GiTooth className="text-3xl text-[#00C9A7]" />
                <div>
                  <h4 className="font-semibold text-lg">Teeth</h4>
                  <p className="text-sm text-gray-500">Date: 26 Okt 2021</p>
                  <div className="w-full h-2 mt-3 bg-gray-200 rounded-full">
                <div className="bg-teal-400 h-full w-[60%] rounded-full"></div>
              </div>
                </div>
              </div>
             
            </div>

            {/* Bone */}
            <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <GiBoneKnife className="text-3xl text-[#FB923C]" />
                <div>
                  <h4 className="font-semibold text-lg">Bone</h4>
                  <p className="text-sm text-gray-500">Date: 26 Okt 2021</p>
                  <div className="w-full h-2 mt-3 bg-gray-200 rounded-full">
                <div className="bg-orange-400 h-full w-[40%] rounded-full"></div>
              </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>

      {/* Activity Section */}
 
       <div className="bg-white  rounded-2xl p-3 shadow-lg mt-6 w-[600px]">
       <div className="flex">
       <h3 className="text-lg font-semibold mb-4">Activity</h3>
       <div className="text-sm text-gray-500 mb-2">3 appointment on this week</div>
      </div>

     
      {/* Placeholder for actual chart/graph */}
      <div className="grid grid-cols-7 gap-4">
        {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} className="flex flex-col items-center">
            <div className="h-24 w-2 rounded bg-gradient-to-t from-cyan-400 to-indigo-400"></div>
            <span className="mt-2 text-xs text-gray-600">{day}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CenterSection;
