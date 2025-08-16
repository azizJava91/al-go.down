import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Apple, PlayCircle, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-16 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                🚀 Now Available for Download
              </Badge>
              
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl text-primary tracking-tight">
                  One Scan<br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Ahead!
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Empower your business with fast, contactless shopping via mobile self-checkout. Transform your retail experience today.
                </p>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-black hover:bg-black/90 text-white flex items-center gap-3 px-6 py-3 h-14">
                  <Apple className="h-6 w-6" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on the</div>
                    <div className="text-sm">App Store</div>
                  </div>
                </Button>
                <Button size="lg" variant="outline" className="flex items-center gap-3 px-6 py-3 h-14 border-2">
                  <PlayCircle className="h-6 w-6" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Get it on</div>
                    <div className="text-sm">Google Play</div>
                  </div>
                </Button>
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span>4.9 • 2,000+ reviews</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-2xl text-primary">50k+</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </div>
              <div>
                <div className="text-2xl text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-2xl text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-[600px]">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="AL&GO mobile app interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 animate-pulse">
                <div className="text-sm text-primary">✓ Scan & Pay</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 animate-pulse">
                <div className="text-sm text-green-600">💳 Secure Payment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}