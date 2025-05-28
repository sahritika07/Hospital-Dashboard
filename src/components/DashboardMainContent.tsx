import CalendarView from "./CalendarView";
import UpcomingSchedule from "../components/UpcomingSchedule";
import { FaBell } from 'react-icons/fa';
import { GiLungs, GiTooth, GiBoneKnife } from 'react-icons/gi';
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Button } from "../components/ui/button"
import {Plus } from "lucide-react"
import humanpic from "../assets/human.png"; // Make sure this path is correct

export default function DashboardMainContent() {
  return (
    <main className=" p-4 overflow-auto">
     

      <div className="grid grid-cols-12 gap-6">
        {/* Center Column */}
        <div className="col-span-5 w-[500px] ">
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-6">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 border rounded-lg w-full max-w-md focus:outline-none focus:ring-2 focus:ring-[#00C9A7]"
            />
            <FaBell className="text-[#2D3A8C] text-xl ml-4 cursor-pointer" />
          </div>

           <h1 className="text-2xl font-semibold text-blue-900 mb-4">Dashboard</h1>

          {/* Human + Info Cards */}
          <div className="flex gap-6">
            {/* Human Image Section */}
            <div className="bg-white rounded-2xl p-6 shadow-lg relative flex-1 max-w-[280px] flex items-center justify-center">
              <img
                src={humanpic}
                alt="Human Body"
                className="h-[280px] object-contain"
              />
              {/* Healthy Tags */}
              <div className="absolute top-22 right-[-30px] bg-[#4F46E5] text-white text-sm px-3 py-1 rounded-lg shadow-md">
                ❤️ Healthy Heart
              </div>
              <div className="absolute bottom-20 left-[-10px] bg-[#06B6D4] text-white text-sm px-3 py-1 rounded-lg shadow-md">
                🦵 Healthy Leg
              </div>
            </div>

            {/* Organ Cards */}
            <div className="flex flex-col justify-between flex-1 ">
              {[{
                icon: <GiLungs className="text-3xl text-[#FF6B6B]" />,
                title: "Lungs",
                color: "bg-red-500",
                progress: "w-[80%]"
              }, {
                icon: <GiTooth className="text-3xl text-[#00C9A7]" />,
                title: "Teeth",
                color: "bg-teal-400",
                progress: "w-[60%]"
              }, {
                icon: <GiBoneKnife className="text-3xl text-[#FB923C]" />,
                title: "Bone",
                color: "bg-orange-400",
                progress: "w-[40%]"
              }].map(({ icon, title, color, progress }) => (
                <div key={title} className="bg-white rounded-xl shadow-md p-2 flex items-center gap-4 mb-4">
                  {icon}
                  <div className="flex flex-col w-20">
                    <h4 className="font-semibold text-lg">{title}</h4>
                    <p className="text-sm text-gray-500">Date: 26 Okt 2021</p>
                    <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                      <div className={`${color} h-full ${progress} rounded-full`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Section */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Activity</h3>
              <span className="text-sm text-gray-500">3 appointments this week</span>
            </div>
            <div className="grid grid-cols-7 gap-3">
              {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day) => (
                <div key={day} className="flex flex-col items-center">
                  <div className="h-24 w-2 rounded bg-gradient-to-t from-cyan-400 to-indigo-400"></div>
                  <span className="mt-2 text-xs text-gray-600">{day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
       
        <div className="col-span-7 bg-blue-50 p-4">
           <div className="flex items-center space-x-4">
           <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback className="bg-cyan-400 text-white">JD</AvatarFallback>
          </Avatar>

          <Button className="bg-indigo-600 hover:bg-indigo-700">
            <Plus className="w-4 h-4" />
          </Button>
           </div>
          <CalendarView />
          <UpcomingSchedule />
        </div>
       
      </div>
    </main>
  );
}
