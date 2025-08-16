import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Users, Target, Award, TrendingUp } from "lucide-react";

export function About() {
  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "500+", label: "SME Partners" },
    { icon: <Target className="h-6 w-6" />, value: "99.9%", label: "Reliability" },
    { icon: <Award className="h-6 w-6" />, value: "6 Years", label: "Experience" },
    { icon: <TrendingUp className="h-6 w-6" />, value: "2M+", label: "Transactions" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary">About AL&GO</Badge>
              <h2 className="text-4xl lg:text-5xl text-primary">
                Transforming retail
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}since 2019
                </span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We are a passionate team dedicated to transforming retail by making shopping faster, safer, and more convenient. Our innovative solutions have helped hundreds of businesses modernize their operations.
                </p>
                <p>
                  Our mission is to empower SMEs through cutting-edge digital checkout solutions that drive growth, enhance customer satisfaction, and create meaningful business value.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="border-0 shadow-sm bg-white/60 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="AL&GO team collaborating"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Achievement Card */}
              <Card className="absolute -bottom-6 -left-6 border-0 shadow-xl bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-xl">
                      <Award className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-lg text-primary">Industry Leader</div>
                      <div className="text-sm text-muted-foreground">Best Retail Tech 2024</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}