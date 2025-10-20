import RegistrationForm from "@/components/RegistrationForm";
import EmployeeCard from "@/components/EmployeeCard";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Index = () => {
  const employees = [
    {
      name: "Hussain Algaidarous",
      title: "CTO",
      email: "hussain@juleb.com",
      phone: "+966560013470",
      website: "https://juleb.com",
      linkedin: "https://linkedin.com",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      description: "Juleb is an AI-powered, modular ERP transforming the pharmaceutical supply chain with seamless Track & Trace compliance and operational efficiency."
    },
    {
      name: "Sarah Al-Mansour",
      title: "CEO",
      email: "sarah@juleb.com",
      phone: "+966550012345",
      website: "https://juleb.com",
      linkedin: "https://linkedin.com",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      description: "Leading Juleb's vision to revolutionize pharmaceutical supply chain management across the Middle East."
    },
    {
      name: "Mohammed Al-Fahad",
      title: "COO",
      email: "mohammed@juleb.com",
      phone: "+966550023456",
      website: "https://juleb.com",
      linkedin: "https://linkedin.com",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      description: "Driving operational excellence and ensuring seamless implementation of Juleb's innovative solutions."
    },
    {
      name: "Fatima Al-Qahtani",
      title: "Head of Product",
      email: "fatima@juleb.com",
      phone: "+966550034567",
      website: "https://juleb.com",
      linkedin: "https://linkedin.com",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      description: "Shaping the future of pharmaceutical technology with innovative product development strategies."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-background py-10 md:py-20 px-4 border-b">
        <div className="container mx-auto text-center">
          <div className="mb-4 md:mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-1 md:mb-2" style={{ 
              color: 'hsl(var(--primary))',
              textShadow: '0 0 1px hsl(var(--primary))',
              WebkitTextStroke: '1.5px hsl(var(--primary))',
              WebkitTextFillColor: 'transparent'
            }}>
              JULEB
            </h1>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-6">
            Welcome to Juleb Event
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Join us and connect with the team transforming pharmaceutical supply chains
          </p>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-8 md:py-16 px-4">
        <div className="container mx-auto">
          <RegistrationForm />
        </div>
      </section>

      {/* Company Link Section */}
      <section className="py-10 md:py-16 px-4 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6 text-foreground px-4">Learn More About Juleb</h2>
          <p className="text-sm md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Discover how Juleb is revolutionizing pharmaceutical supply chain management
            with AI-powered modular ERP solutions.
          </p>
          <Button 
            size="lg"
            className="text-base md:text-lg px-6 md:px-8 h-11 md:h-12"
            asChild
          >
            <a 
              href="https://juleb.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Visit Juleb Company Profile
              <ExternalLink className="w-4 md:w-5 h-4 md:h-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-10 md:py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-6 text-foreground px-4">Meet Our Team</h2>
            <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Connect with the Juleb team attending the event. Click to download their contact information.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
            {employees.map((employee, index) => (
              <EmployeeCard key={index} {...employee} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-6 md:py-8 px-4 mt-8 md:mt-16">
        <div className="container mx-auto text-center">
          <p className="text-sm md:text-base text-muted-foreground">
            © 2025 Juleb Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
