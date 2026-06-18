import { IconAt, IconBrandLinkedin, IconBrandGithub, IconBrandWhatsapp, IconSun } from '@tabler/icons-react';
import { Box, Stack, Text } from '@mantine/core';
import classes from './ContactIcons.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
  link?: string; // Optional link property for click-through actions
}

function ContactIcon({ icon: Icon, title, description, link, ...others }: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      {/* Icon Wrapper colored with your lime green theme token */}
      <Box mr="md" style={{ display: 'flex', alignItems: 'center', color: 'var(--mantine-color-myColor-5)' }}>
        <Icon size={24} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        
        {link ? (
          <Text 
            component="a" 
            href={link} 
            target='_blank' 
            rel="noopener noreferrer"
            className={classes.description}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {description}
          </Text>
        ) : (
          <Text className={classes.description}>{description}</Text>
        )}
      </div>
    </div>
  );
}

// Fixed the mismatched icons and added clean url link targets
const MOCKDATA = [
  { 
    title: 'Email', 
    description: 'baytamounymuaz@gmail.com', 
    icon: IconAt,
    link: 'mailto:baytamounymuaz@gmail.com'
  },
  { 
    title: 'Phone', 
    description: '+60 11 3799 4173', 
    icon: IconBrandWhatsapp, // Keeping WhatsApp icon for the phone slot as specified
    link: 'https://wa.me/601137994173' // Clean WhatsApp API URL structure without spaces or plus signs
  },
  { 
    title: 'LinkedIn', 
    description: 'linkedin.com/in/muazbaytamouny', 
    icon: IconBrandLinkedin, // Fixed: Swapped IconMapPin out for correct LinkedIn vector asset
    link: 'https://www.linkedin.com/in/muazbaytamouny/'
  },
  { 
    title: 'Github', 
    description: 'github.com/Mu3azios', 
    icon: IconBrandGithub,
    link: 'https://github.com/Mu3azios'
  },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack gap="md">{items}</Stack>;
}