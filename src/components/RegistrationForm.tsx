import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { UserPlus } from "lucide-react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    toast.success("Registration successful! We'll see you at the event.");
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-6 md:p-10 shadow-xl border-border/50">
      <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
        <div className="bg-primary/10 p-3 md:p-4 rounded-xl">
          <UserPlus className="w-5 h-5 md:w-7 md:h-7 text-primary" />
        </div>
        <div>
          <h2 className="text-xl md:text-3xl font-bold text-foreground">Register for Our Event</h2>
          <p className="text-muted-foreground text-sm md:text-base">Join us and meet the Juleb team</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm md:text-base font-medium">Full Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="focus-visible:ring-primary h-10 md:h-12 text-sm md:text-base"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm md:text-base font-medium">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="focus-visible:ring-primary h-10 md:h-12 text-sm md:text-base"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm md:text-base font-medium">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+966 XX XXX XXXX"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="focus-visible:ring-primary h-10 md:h-12 text-sm md:text-base"
          />
        </div>
        
        <Button type="submit" className="w-full text-sm md:text-base h-10 md:h-12" size="lg">
          Register Now
        </Button>
      </form>
    </Card>
  );
};

export default RegistrationForm;
