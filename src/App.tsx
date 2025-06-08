import Header from "../src/components/Header"
import Sidebar from "../src/components/Sidebar"
import DashboardMainContent from "../src/components/DashboardMainContent"

export default function HealthcareDashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* <Header /> */}
        <DashboardMainContent />
      </div>
    </div>
  )
}




