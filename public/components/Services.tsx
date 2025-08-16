import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Smartphone, Settings, BarChart3, Zap, Shield, Clock } from "lucide-react";

export function Services() {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8 text-blue-600" />,
      title: "Mobile Self-Checkout",
      description: "Enable customers to scan and pay instantly through their smartphones for a seamless shopping experience.",
      badge: "Core Feature"
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-600" />,
      title: "Easy Integration", 
      description: "Seamlessly integrates with your existing POS and inventory systems to streamline operations.",
      badge: "Quick Setup"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-green-600" />,
      title: "Real-time Analytics",
      description: "Access comprehensive insights to understand customer behavior and optimize sales strategies.",
      badge: "Data Driven"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Lightning Fast",
      description: "Process transactions in seconds with our optimized checkout flow.",
      badge: "Performance"
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Bank-level Security",
      description: "End-to-end encryption and secure payment processing for peace of mind.",
      badge: "Security"
    },
    {
      icon: <Clock className="h-8 w-8 text-indigo-600" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support to keep your business running smoothly.",
      badge: "Support"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Features</Badge>
          <h2 className="text-4xl lg:text-5xl text-primary mb-6">
            Everything you need to<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              modernize retail
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools your business needs to thrive in the digital age.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-gradient-to-br from-white to-gray-50/50">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                      {feature.icon}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}