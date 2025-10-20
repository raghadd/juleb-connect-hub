import RegistrationForm from "@/components/RegistrationForm";
import EmployeeCard from "@/components/EmployeeCard";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Index = () => {
  const employees = [
    {
      name: "Hussain Alaidarous",
      title: "CTO",
      email: "hussain@juleb.com",
      phone: "+966560013470",
      linkedin: "https://www.linkedin.com/in/hussain-alaidarous/",
      photo: "src/profile-pics/hussain.jpg",
      description: "I am an executive with a passion for solving critical problems through the use of technology. My specialty is building highly scalable cloud infrastructure using open source solutions. My goal is to deliver sustainable web & mobile solutions that meets the highest standard in performance and security."
    },
    {
      name: "Yousuf Jamjoom",
      title: "CEO",
      email: "yousuf@juleb.com",
      phone: "+966550012345",
      linkedin: "https://www.linkedin.com/in/yousufjamjoom/",
      photo: "src/profile-pics/yousuf.png",
      description: "Leading Juleb's vision to revolutionize pharmaceutical supply chain management across the Middle East."
    },
    {
      name: "Mohamed Youssef",
      title: "Sales Manager",
      email: "mey@juleb.com",
      phone: "+966550023456",
      linkedin: "https://www.linkedin.com/in/m-youssef3/",
      photo: "src/profile-pics/mey.png",
      description: "Driving operational excellence and ensuring seamless implementation of Juleb's innovative solutions."
    },
    {
      name: "Mohamed Ghorab",
      title: "Marketing Manager",
      email: "ghorab@juleb.com",
      phone: "+966550012345",
      linkedin: "https://www.linkedin.com/in/mohamed-attia-8686012b/",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      description: "Leading Juleb's vision to revolutionize pharmaceutical supply chain management across the Middle East."
    },
    {
      name: "Eman Khalifa",
      title: "Technical Product Manager",
      email: "eman@juleb.com",
      phone: "+966550023456",
      linkedin: "https://www.linkedin.com/in/eman-khalifa-91159b100/",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      description: "Driving operational excellence and ensuring seamless implementation of Juleb's innovative solutions."
    },
    {
      name: "Ahmed El-Sabbagh",
      title: "Enterprise Innovation Consultant",
      email: "a.elsabbagh@juleb.com",
      phone: "+966560524018",
      linkedin: "linkedin.com/in/ahmedelsabbagh/",
      photo: "src/profile-pics/sabbagh.jpg",
      description: "Licensed pharmacist and results-driven business growth leader with extensive experience in B2B SaaS, healthcare, and pharmaceutical technology. Proven success in expanding markets, boosting sales efficiency by 300%, optimizing sales cycles, and building client relationships across the GCC"
    },
    {
      name: "Nada Elnakoury",
      title: "Enterprise innovation consultant",
      email: "nada@juleb.com",
      phone: "+966557702775",
      linkedin: "https://www.linkedin.com/in/nada-elnakoury-2b50491b3/",
      photo: "src/profile-pics/nada.jpeg",
      description: "Focused on driving business success and contributing to organizational growth through strategic problem-solving and efficient execution"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-background py-10 md:py-20 px-4 border-b">
        <div className="container mx-auto text-center">
          <div className="mb-4 md:mb-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-6">
          Welcome to
          </h2>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-1 md:mb-2" style={{ 
              color: 'hsl(var(--primary))',
              textShadow: '0 0 1px hsl(var(--primary))',
              WebkitTextStroke: '1.5px hsl(var(--primary))',
              WebkitTextFillColor: 'transparent'
            }}>
              Juleb's First DXB Event
            </h1>
          </div>
          
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
          🎉 Welcoming​ 🍽️ Dinner​ 🤝 Networking​
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
              Connect with Juleb team attending the event, and download their contact information!
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
