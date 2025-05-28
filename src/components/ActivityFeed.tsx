export default function ActivityFeed() {
  const activityData = [
    { day: "Mon", value: 60 },
    { day: "Tues", value: 80 },
    { day: "Wed", value: 40 },
    { day: "Thurs", value: 90 },
    { day: "Fri", value: 70 },
    { day: "Sat", value: 50 },
    { day: "Sun", value: 85 },
  ]

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Activity</h2>
      <p className="text-sm text-gray-500 mb-6">3 appointments on this week</p>

      <div className="flex items-end justify-between h-32 space-x-2">
        {activityData.map((item, index) => (
          <div key={item.day} className="flex flex-col items-center flex-1">
            <div className="w-full flex flex-col items-center space-y-1 mb-2">
              <div
                className={`w-6 rounded-sm ${index % 2 === 0 ? "bg-cyan-400" : "bg-indigo-600"}`}
                style={{ height: `${item.value}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-500">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
