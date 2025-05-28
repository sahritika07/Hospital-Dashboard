import {
  LayoutDashboard,
  History,
  Calendar,
  Clock,
  BarChart3,
  TestTube,
  MessageCircle,
  HelpCircle,
  Settings,
} from "lucide-react"

const navigationItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: History, label: "History" },
  { icon: Calendar, label: "Calendar" },
  { icon: Clock, label: "Appointments" },
  { icon: BarChart3, label: "Statistics" },
  { icon: TestTube, label: "Tests" },
  { icon: MessageCircle, label: "Chat" },
  { icon: HelpCircle, label: "Support" },
  { icon: Settings, label: "Setting" },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 px-8 py-6 ">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">
            <span className="text-cyan-400">Health</span>
            <span className="text-gray-800">care.</span>
          </h1>
        <h2 className="text-sm font-medium text-gray-500  tracking-wider mt-7 mb-4">General</h2>

        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                item.active ? "bg-indigo-50 text-indigo-600" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
}
