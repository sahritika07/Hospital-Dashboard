import AnatomySection from "./AnatomySection"
import CalendarView from "./CalendarView"
import UpcomingSchedule from "../components/UpcomingSchedule"
import ActivityFeed from "./ActivityFeed"

export default function DashboardMainContent() {
  return (
    <main className="flex-1 p-4 overflow-auto">
      <div className="mb-5">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column - Anatomy */}
        <div className="col-span-5">
          <AnatomySection />
          <ActivityFeed />
        </div>

        {/* Right Column - Calendar and Schedule */}
        <div className="col-span-7">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </main>
  )
}
