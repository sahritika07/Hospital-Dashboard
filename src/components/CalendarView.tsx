import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../components/ui/button"

export default function CalendarView() {
  const calendarData = [
    { day: "Mon", date: 25, times: ["10:00", "11:00", "12:00"] },
    { day: "Tues", date: 26, times: ["08:00", "09:00", "10:00"] },
    { day: "Wed", date: 27, times: ["12:00", "13:00"] },
    { day: "Thurs", date: 28, times: ["10:00", "11:00"] },
    { day: "Fri", date: 29, times: ["14:00", "16:00"] },
    { day: "Sat", date: 30, times: ["12:00", "14:00", "15:00"] },
    { day: "Sun", date: 31, times: ["09:00", "14:00", "16:00", "11:00"] },
  ]

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">This Week</span>
        </div>
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-semibold text-gray-900">October 2021</h2>
          <div className="flex space-x-1">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4 mb-6">
        {calendarData.map((day) => (
          <div key={day.date} className="text-center">
            <div className="text-sm text-gray-500 mb-2">{day.day}</div>
            <div className="text-2xl font-semibold text-gray-900 mb-3">{day.date}</div>
            <div className="space-y-1">
              {day.times.map((time, index) => (
                <div
                  key={index}
                  className={`text-xs px-2 py-1 rounded ${
                    day.date === 26 && time === "09:00"
                      ? "bg-indigo-600 text-white"
                      : day.date === 28 && time === "11:00"
                        ? "bg-indigo-200 text-indigo-800"
                        : day.date === 30 && time === "12:00"
                          ? "bg-indigo-200 text-indigo-800"
                          : day.date === 31 && time === "09:00"
                            ? "bg-indigo-200 text-indigo-800"
                            : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-indigo-600 text-white p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Dentist</h3>
              <p className="text-sm opacity-90">09:00-11:00</p>
              <p className="text-sm opacity-90">Dr. Cameron Williamson</p>
            </div>
            <div className="text-2xl">🦷</div>
          </div>
        </div>

        <div className="bg-indigo-100 text-indigo-900 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Physiotherapy Appointment</h3>
              <p className="text-sm opacity-75">11:00-12:00</p>
              <p className="text-sm opacity-75">Dr. Kevin Djones</p>
            </div>
            <div className="text-2xl">💪</div>
          </div>
        </div>
      </div>
    </div>
  )
}
