import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Globe, Linkedin, UserPlus } from "lucide-react";
import { toast } from "sonner";

interface EmployeeCardProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  website?: string;
  linkedin?: string;
  photo: string;
  description?: string;
}

const EmployeeCard = ({ 
  name, 
  title, 
  email, 
  phone, 
  website, 
  linkedin, 
  photo,
  description 
}: EmployeeCardProps) => {
  
  const generateVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${name}
TITLE:${title}
ORG:Juleb Inc
EMAIL:${email}
TEL:${phone}
${website ? `URL:${website}` : ''}
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${name.replace(/\s+/g, '_')}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    toast.success(`Contact for ${name} downloaded!`);
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Header with gradient */}
      <div className="bg-gradient-to-br from-primary to-secondary p-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5" />
        <h3 className="text-3xl font-bold text-white mb-2 relative z-10 tracking-wide">JULEB</h3>
      </div>

      {/* Profile Photo */}
      <div className="flex justify-center -mt-16 mb-4">
        <div className="bg-white p-2 rounded-3xl shadow-lg">
          <img 
            src={photo} 
            alt={name}
            className="w-32 h-32 rounded-2xl object-cover"
          />
        </div>
      </div>

      {/* Employee Info */}
      <div className="px-6 pb-6 text-center">
        <h3 className="text-2xl font-bold text-foreground mb-1">{name}</h3>
        <p className="text-muted-foreground font-medium mb-2">{title}</p>
        <p className="text-sm text-muted-foreground mb-4">Juleb Inc</p>

        {/* Social Links */}
        {(website || linkedin) && (
          <div className="flex justify-center gap-3 mb-4">
            {website && (
              <a 
                href={website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors"
              >
                <Globe className="w-6 h-6" />
              </a>
            )}
            {linkedin && (
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            )}
          </div>
        )}

        {/* Description */}
        {description && (
          <p className="text-sm text-foreground mb-6 leading-relaxed">
            {description}
          </p>
        )}

        {/* Contact Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 bg-muted/50 p-3 rounded-xl">
            <div className="bg-primary p-2 rounded-full">
              <Mail className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-foreground font-medium">{email}</span>
          </div>
          
          <div className="flex items-center gap-3 bg-muted/50 p-3 rounded-xl">
            <div className="bg-primary p-2 rounded-full">
              <Phone className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-foreground font-medium">{phone}</span>
          </div>
        </div>

        {/* Add to Contact Button */}
        <Button 
          onClick={generateVCard}
          className="w-full"
          size="lg"
        >
          <UserPlus className="w-4 h-4 mr-2" />
          Add to contact
        </Button>
      </div>
    </Card>
  );
};

export default EmployeeCard;
