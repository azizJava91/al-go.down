import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Apple, PlayCircle, Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-br from-blue-600 to-purple-600 border-0 shadow-2xl overflow-hidden">
          <CardContent className="p-12 lg:p-16 text-center text-white relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
            
            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  🚀 Ready to Transform Your Business?
                </Badge>
                <h2 className="text-4xl lg:text-5xl">
                  Download AL&GO Today
                </h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                  Join thousands of businesses already using AL&GO to revolutionize their retail experience. Download now and get started in minutes.
                </p>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-black hover:bg-black/90 text-white flex items-center gap-3 px-6 py-3 h-14">
                  <Apple className="h-6 w-6" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on the</div>
                    <div className="text-sm">App Store</div>
                  </div>
                </Button>
                <Button size="lg" variant="secondary" className="flex items-center gap-3 px-6 py-3 h-14 bg-white text-black hover:bg-white/90">
                  <PlayCircle className="h-6 w-6" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Get it on</div>
                    <div className="text-sm">Google Play</div>
                  </div>
                </Button>
              </div>

              {/* Newsletter Signup */}
              <div className="pt-8 border-t border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2 text-lg">
                    <Mail className="h-5 w-5" />
                    <span>Stay updated with retail insights</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <Input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />
                    <Button variant="secondary" className="bg-white text-blue-600 hover:bg-white/90">
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-sm opacity-70">
                    Join 2,000+ entrepreneurs • No spam, unsubscribe anytime
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}