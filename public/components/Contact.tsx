import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Phone, Mail, MessageCircle, Facebook, Linkedin, Instagram } from "lucide-react";

export function Contact() {
  const contactMethods = [
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "Live Chat",
      value: "Available 24/7",
      action: "Start Chat"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+994 12 345 6789",
      action: "Call Now"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "hello@algo.az",
      action: "Send Email"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Contact</Badge>
          <h2 className="text-4xl lg:text-5xl text-primary mb-6">
            Let's start building
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}together
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your retail experience? Get in touch with our team for a free consultation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-xl text-primary mb-6">Get in touch</h3>
            
            {contactMethods.map((method, index) => (
              <Card key={index} className="group hover:shadow-md transition-all duration-300 border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-100 transition-colors">
                        {method.icon}
                      </div>
                      <div>
                        <div className="text-primary mb-1">{method.label}</div>
                        <div className="text-sm text-muted-foreground">{method.value}</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                      {method.action}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Office Location */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  Our Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  456 Innovation Road<br />
                  Baku, Azerbaijan
                </p>
                
                {/* Social Links */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                    <Instagram className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-primary mb-2 block">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm text-primary mb-2 block">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-primary mb-2 block">Email</label>
                  <Input type="email" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="text-sm text-primary mb-2 block">Company</label>
                  <Input placeholder="Your Company" />
                </div>
                <div>
                  <label className="text-sm text-primary mb-2 block">Message</label>
                  <Textarea placeholder="Tell us about your project..." rows={4} />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}