
import { useState } from "react";
import { Search, FileText, Calendar, Users, Download, Eye, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useToast } from "@/hooks/use-toast";

export function AIRobotics() {
  const [activeTab, setActiveTab] = useState("projects");
  const { toast } = useToast();

  const statsData = [
    {
      icon: FileText,
      value: "6",
      label: "ACTIVE PROJECTS",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Calendar,
      value: "12",
      label: "TRAININGS CONDUCTED",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: FileText,
      value: "145",
      label: "MEDIA FILES UPLOADED",
      bgColor: "bg-gray-50",
      iconColor: "text-gray-600"
    },
    {
      icon: Users,
      value: "4",
      label: "EXTERNAL PARTNERS",
      bgColor: "bg-gray-50",
      iconColor: "text-gray-600"
    }
  ];

  const projectsData = [
    {
      title: "Smart Traffic System",
      status: "Ongoing",
      statusColor: "text-blue-600",
      lead: "Dr. Amina Yusuf",
      duration: "Jan - Oct 2025",
      hasApproval: false
    },
    {
      title: "Hausa NLP Engine",
      status: "Completed",
      statusColor: "text-green-600",
      lead: "Engr. Bala Nuhu",
      duration: "Mar - Dec 2024",
      hasApproval: false
    },
    {
      title: "AI Tutor Chatbot",
      status: "Proposed",
      statusColor: "text-orange-600",
      lead: "Fatima Bello",
      duration: "Aug 2025 - TBD",
      hasApproval: true
    },
    {
      title: "FarmBot AI",
      status: "Ongoing",
      statusColor: "text-blue-600",
      lead: "Musa Ibrahim",
      duration: "Feb - Sept 2025",
      hasApproval: false
    },
    {
      title: "Facial Recognition for ID",
      status: "Proposed",
      statusColor: "text-orange-600",
      lead: "Abdulraheem Sani",
      duration: "May - Dec 2025",
      hasApproval: true
    },
    {
      title: "Public Service Assistant",
      status: "Completed",
      statusColor: "text-green-600",
      lead: "Hafsat Adamu",
      duration: "Jan - Aug 2024",
      hasApproval: false
    },
    {
      title: "Drone Swarm Control",
      status: "Ongoing",
      statusColor: "text-blue-600",
      lead: "Dr. Amina Yusuf",
      duration: "Apr - Nov 2025",
      hasApproval: false
    }
  ];

  const trainingsData = [
    {
      title: "AI Ethics in Government Applications",
      date: "2024-06-15",
      type: "Public",
      attendees: "45",
      status: "Completed",
      statusColor: "text-green-600"
    },
    {
      title: "Robotics Safety Protocols",
      date: "2024-06-20",
      type: "Internal",
      attendees: "25",
      status: "Approved",
      statusColor: "text-blue-600"
    },
    {
      title: "Machine Learning Fundamentals",
      date: "2024-06-25",
      type: "Public",
      attendees: "60",
      status: "Pending",
      statusColor: "text-red-600",
      hasApproval: true
    },
    {
      title: "Data Privacy in AI Systems",
      date: "2024-07-01",
      type: "Internal",
      attendees: "18",
      status: "Proposed",
      statusColor: "text-orange-600",
      hasApproval: true
    },
    {
      title: "Advanced Automation Techniques",
      date: "2024-07-05",
      type: "Public",
      attendees: "52",
      status: "Completed",
      statusColor: "text-green-600"
    },
    {
      title: "IoT Integration Workshop",
      date: "2024-07-10",
      type: "Internal",
      attendees: "33",
      status: "Completed",
      statusColor: "text-green-600"
    },
    {
      title: "Advanced Automation Techniques",
      date: "2024-07-10",
      type: "Public",
      attendees: "20",
      status: "Approved",
      statusColor: "text-blue-600"
    }
  ];

  const mediaData = [
    {
      name: "AI Training - April",
      files: "24",
      date: "10 Apr 2025",
      event: "Python for AI"
    },
    {
      name: "Robotics Workshop",
      files: "15",
      date: "22 Mar 2025",
      event: "Drone Programming"
    },
    {
      name: "Innovation Showcase 2024",
      files: "56",
      date: "15 Dec 2024",
      event: "Annual Research Day"
    },
    {
      name: "Smart Traffic System Demos",
      files: "12",
      date: "6 Jan 2025",
      event: "Project Launch"
    },
    {
      name: "Hausa NLP Dataset Collection",
      files: "18",
      date: "12 Feb 2025",
      event: "Research Field Work"
    },
    {
      name: "AI in Healthcare Gallery",
      files: "20",
      date: "14 Mar 2025",
      event: "Training Program"
    },
    {
      name: "Public Service Assistant Files",
      files: "10",
      date: "30 Jan 2025",
      event: "Post-Launch Walkthrough"
    }
  ];

  const collaborationsData = [
    {
      partner: "Dr. Usman Ahmed",
      organization: "FUT Minna",
      project: "NLP Engine"
    },
    {
      partner: "Rewired Robotics Ltd",
      organization: "Rewired Robotics",
      project: "FarmBot AI"
    },
    {
      partner: "Z-Tech Hub",
      organization: "Zaria Tech Community",
      project: "AI Tutor Chatbot"
    },
    {
      partner: "Abuja Data Collective",
      organization: "Open Source Alliance",
      project: "Speech Dataset"
    },
    {
      partner: "WestAfrica AI Forum",
      organization: "WAAF",
      project: "Smart Traffic System"
    },
    {
      partner: "NIDDA Research Fellows",
      organization: "NIDDA HQ",
      project: "AI in Public Services"
    },
    {
      partner: "SmartEd AI Group",
      organization: "Federal Education Board",
      project: "AI Tutor Platform"
    }
  ];

  const handleAction = (action: string, item: string) => {
    toast({
      title: `${action} Action`,
      description: `${action} action performed for ${item}`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <h1 className="text-2xl font-semibold text-gray-900">AI & Robotics</h1>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {statsData.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-gray-100 p-1">
          <TabsTrigger value="projects" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
            Projects
          </TabsTrigger>
          <TabsTrigger value="trainings" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
            Trainings
          </TabsTrigger>
          <TabsTrigger value="media" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
            Media Gallery
          </TabsTrigger>
          <TabsTrigger value="collaborations" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
            Collaborations
          </TabsTrigger>
        </TabsList>

        {/* Projects Tab */}
        <TabsContent value="projects" className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <h2 className="text-lg font-semibold text-gray-900">Projects</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-full lg:w-80"
                  />
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Lead</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projectsData.map((project, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{project.title}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center space-x-1 ${project.statusColor}`}>
                          <div className={`w-2 h-2 rounded-full ${
                            project.status === 'Completed' ? 'bg-green-600' :
                            project.status === 'Ongoing' ? 'bg-blue-600' : 'bg-orange-600'
                          }`}></div>
                          <span>{project.status}</span>
                        </span>
                      </TableCell>
                      <TableCell>{project.lead}</TableCell>
                      <TableCell>{project.duration}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleAction("View", project.title)}
                          >
                            View
                          </Button>
                          {project.hasApproval ? (
                            <div className="flex space-x-1">
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-green-600 border-green-600 hover:bg-green-50"
                                onClick={() => handleAction("Approve", project.title)}
                              >
                                Approve
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-red-600 border-red-600 hover:bg-red-50"
                                onClick={() => handleAction("Reject", project.title)}
                              >
                                Reject
                              </Button>
                            </div>
                          ) : (
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-green-600 border-green-600 hover:bg-green-50"
                              onClick={() => handleAction("Download Report", project.title)}
                            >
                              Download Report
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>

        {/* Trainings Tab */}
        <TabsContent value="trainings" className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <h2 className="text-lg font-semibold text-gray-900">Training Programs</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-full lg:w-80"
                  />
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Attendees</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {trainingsData.map((training, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{training.title}</TableCell>
                      <TableCell>{training.date}</TableCell>
                      <TableCell>{training.type}</TableCell>
                      <TableCell>{training.attendees}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center space-x-1 ${training.statusColor}`}>
                          <div className={`w-2 h-2 rounded-full ${
                            training.status === 'Completed' ? 'bg-green-600' :
                            training.status === 'Approved' ? 'bg-blue-600' :
                            training.status === 'Pending' ? 'bg-red-600' : 'bg-orange-600'
                          }`}></div>
                          <span>{training.status}</span>
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end space-x-2">
                          {training.hasApproval ? (
                            <>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleAction("View", training.title)}
                              >
                                View
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-green-600 border-green-600 hover:bg-green-50"
                                onClick={() => handleAction("Approve", training.title)}
                              >
                                Approve
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-red-600 border-red-600 hover:bg-red-50"
                                onClick={() => handleAction("Reject", training.title)}
                              >
                                Reject
                              </Button>
                            </>
                          ) : (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleAction("View Details", training.title)}
                            >
                              View Details
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>

        {/* Media Gallery Tab */}
        <TabsContent value="media" className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <h2 className="text-lg font-semibold text-gray-900">Media Gallery</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-full lg:w-80"
                  />
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Folder Name</TableHead>
                    <TableHead>Files</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Related Event</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mediaData.map((media, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{media.name}</TableCell>
                      <TableCell>{media.files}</TableCell>
                      <TableCell>{media.date}</TableCell>
                      <TableCell>{media.event}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end space-x-2">
                          {media.name.includes("Innovation") || media.name.includes("Smart Traffic") ? (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleAction("View Folder", media.name)}
                            >
                              View Folder
                            </Button>
                          ) : (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleAction("View Details", media.name)}
                            >
                              View Details
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>

        {/* Collaborations Tab */}
        <TabsContent value="collaborations" className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <h2 className="text-lg font-semibold text-gray-900">External Collaborations</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-full lg:w-80"
                  />
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Partner Name</TableHead>
                    <TableHead>Organization</TableHead>
                    <TableHead>Project</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {collaborationsData.map((collab, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{collab.partner}</TableCell>
                      <TableCell>{collab.organization}</TableCell>
                      <TableCell>{collab.project}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end space-x-2">
                          {collab.partner.includes("Z-Tech") || collab.partner.includes("Abuja Data") ? (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleAction("View Folder", collab.partner)}
                            >
                              View Folder
                            </Button>
                          ) : (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleAction("View Details", collab.partner)}
                            >
                              View Details
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <span className="px-4 py-2">...</span>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">8</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">9</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">10</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
