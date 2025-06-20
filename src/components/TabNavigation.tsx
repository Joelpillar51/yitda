
export function TabNavigation() {
  const tabs = [
    { name: "Overview", active: true },
    { name: "Employee Records", active: false },
    { name: "Payroll Management", active: false },
    { name: "Leave Management", active: false },
    { name: "Training Programs", active: false },
  ];

  return (
    <div className="mb-6">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              href="#"
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                tab.active
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
