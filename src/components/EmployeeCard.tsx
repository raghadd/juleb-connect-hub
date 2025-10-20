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
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border/50">
      {/* Header with Juleb branding */}
      <div className="bg-primary p-8 text-center relative overflow-hidden">
        <h3 className="text-4xl font-extrabold tracking-wide" style={{ 
          color: 'white',
          textShadow: '0 0 1px white',
          WebkitTextStroke: '1.5px white',
          WebkitTextFillColor: 'transparent'
        }}>JULEB</h3>
      </div>

      {/* Profile Photo */}
      <div className="flex justify-center -mt-16 mb-6">
        <div className="bg-card p-2.5 rounded-3xl shadow-xl ring-4 ring-background">
          <img 
            src={photo} 
            alt={name}
            className="w-36 h-36 rounded-2xl object-cover"
          />
        </div>
      </div>

      {/* Employee Info */}
      <div className="px-6 pb-8 text-center">
        <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-base text-muted-foreground font-medium mb-1">{title}</p>
        <p className="text-sm text-muted-foreground/80 mb-6">Juleb Inc</p>

        {/* Social Links */}
        {(website || linkedin) && (
          <div className="flex justify-center gap-4 mb-5">
            {website && (
              <a 
                href={website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-all hover:scale-110"
              >
                <Globe className="w-7 h-7" />
              </a>
            )}
            {linkedin && (
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-all hover:scale-110"
              >
                <Linkedin className="w-7 h-7" />
              </a>
            )}
          </div>
        )}

        {/* Description */}
        {description && (
          <p className="text-sm text-foreground/90 mb-8 leading-relaxed px-2">
            {description}
          </p>
        )}

        {/* Contact Details */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 bg-muted/40 p-4 rounded-xl border border-border/30">
            <div className="bg-primary p-2.5 rounded-full">
              <Mail className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-sm text-foreground font-medium">{email}</span>
          </div>
          
          <div className="flex items-center gap-3 bg-muted/40 p-4 rounded-xl border border-border/30">
            <div className="bg-primary p-2.5 rounded-full">
              <Phone className="w-4 h-4 text-primary-foreground" />
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
