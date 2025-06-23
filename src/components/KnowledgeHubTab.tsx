
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface KnowledgeHubTabProps {
  onViewArticle: (article: any) => void;
}

const KnowledgeHubTab = ({ onViewArticle }: KnowledgeHubTabProps) => {
  const knowledgeArticles = [
    {
      title: "Employee Benefits and Compensation Guide",
      description: "Comprehensive guide covering all employee benefits, compensation packages, and policy updates.",
      department: "HR",
      status: "Published",
      lastUpdated: "2024-06-01",
      views: "1,247"
    },
    {
      title: "IT Security Best Practices",
      description: "Essential cybersecurity guidelines and protocols for all government employees.",
      department: "ICT",
      status: "Published",
      lastUpdated: "2024-06-01",
      views: "892"
    },
    {
      title: "Budget Request and Approval Process",
      description: "Step-by-step guide for submitting and tracking budget requests across departments.",
      department: "Finance",
      status: "Published",
      lastUpdated: "2024-06-01",
      views: "1,247"
    },
    {
      title: "Remote Work Policy and Guidelines",
      description: "Updated policies for remote work arrangements, including equipment and security requirements.",
      department: "HR",
      status: "Published",
      lastUpdated: "2024-06-01",
      views: "1,156"
    },
    {
      title: "Digital Transformation Roadmap",
      description: "Strategic plan for digital modernization across all government services and departments.",
      department: "ICT",
      status: "Published",
      lastUpdated: "2024-06-01",
      views: "445"
    },
    {
      title: "Financial Reporting Standards",
      description: "Guidelines for financial reporting, compliance requirements, and audit preparation.",
      department: "HR",
      status: "Published",
      lastUpdated: "2024-06-01",
      views: "723"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Knowledge Hub</h2>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          + New Article
        </Button>
      </div>

      {/* Knowledge Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {knowledgeArticles.map((article, index) => (
          <Card key={index} className="hover:shadow-sm transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <Badge className={`${
                  article.department === "HR" ? "bg-purple-100 text-purple-800" :
                  article.department === "ICT" ? "bg-blue-100 text-blue-800" :
                  "bg-green-100 text-green-800"
                } hover:${
                  article.department === "HR" ? "bg-purple-100" :
                  article.department === "ICT" ? "bg-blue-100" :
                  "bg-green-100"
                }`}>
                  {article.department}
                </Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Published</Badge>
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {article.description}
              </p>
              
              <div className="space-y-2 text-sm text-gray-500 mb-4">
                <div className="flex justify-between">
                  <span>Last Updated</span>
                  <span>{article.lastUpdated}</span>
                </div>
                <div className="flex justify-between">
                  <span>Views</span>
                  <span>{article.views}</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 text-green-600 border-green-200 hover:bg-green-50"
                  onClick={() => onViewArticle(article)}
                >
                  View Article
                </Button>
                <Button variant="outline" size="sm" className="flex-1 text-gray-600 border-gray-200 hover:bg-gray-50">
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeHubTab;
