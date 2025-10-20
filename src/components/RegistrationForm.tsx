import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { UserPlus, Download, Database, Loader2 } from "lucide-react";

interface RegistrationData {
  name: string;
  email: string;
  phone: string;
  timestamp: string;
}

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [registrations, setRegistrations] = useState<RegistrationData[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load existing registrations from localStorage (for admin view only)
  useEffect(() => {
    const savedRegistrations = localStorage.getItem('juleb-registrations');
    if (savedRegistrations) {
      setRegistrations(JSON.parse(savedRegistrations));
    }
  }, []);

  // Function to submit data to Google Sheets (using Google Apps Script)
  const submitToGoogleSheets = async (data: RegistrationData) => {
    try {
      // Replace with your Google Apps Script web app URL
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbwZGN5u1SmiNxhxTBAUqZGPIcMt-4gbm1vQ4aGjqrS3OW_6cYcsbrn_toVOQwDXIaqCgA/exec';
      
      const response = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit registration');
      }

      return await response.json();
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      throw error;
    }
  };


  // Function to generate Excel file
  const generateExcelFile = () => {
    // Create CSV content (Excel compatible)
    const headers = ["Name", "Email", "Phone", "Registration Date"];
    const csvContent = [
      headers.join(","),
      ...registrations.map(reg => [
        `"${reg.name}"`,
        `"${reg.email}"`,
        `"${reg.phone}"`,
        `"${reg.timestamp}"`
      ].join(","))
    ].join("\n");

    // Create and download file
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", `juleb-registrations-${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

    setIsSubmitting(true);

    // Create new registration data
    const newRegistration: RegistrationData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      timestamp: new Date().toLocaleString(),
    };

    try {
      // Submit to Google Sheets
      await submitToGoogleSheets(newRegistration);
      toast.success("Registration successful!");

      // Also save locally for admin view/download
      const updatedRegistrations = [...registrations, newRegistration];
      setRegistrations(updatedRegistrations);
      localStorage.setItem('juleb-registrations', JSON.stringify(updatedRegistrations));

      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Registration failed. Please try again or check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-6 md:p-10 shadow-xl border-border/50">
      <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
        <div className="bg-primary/10 p-3 md:p-4 rounded-xl">
          <UserPlus className="w-5 h-5 md:w-7 md:h-7 text-primary" />
        </div>
        <div>
          <h2 className="text-xl md:text-3xl font-bold text-foreground">Mark Your Attendance</h2>
          <p className="text-muted-foreground text-sm md:text-base">Let us get to know you</p>
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
            placeholder="+971 XXX XXXXXX"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="focus-visible:ring-primary h-10 md:h-12 text-sm md:text-base"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full text-sm md:text-base h-10 md:h-12" 
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            "Register Now"
          )}
        </Button>
      </form>

    </Card>
  );
};

export default RegistrationForm;
