// Header.tsx
import { AppShell, Group, Burger, Text, Anchor, Container } from '@mantine/core';
import { motion } from "motion/react";
import { useState } from "react";

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

const tabs = ["Home", "About", "Projects", "Contact"];

// TypeScript configuration for the dynamic Anchor layout link props
interface NavAnchorProps {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
}

const NavAnchor = ({ text, selected, setSelected }: NavAnchorProps) => {
  // Converts "Home" to "#home" cleanly for semantic HTML single-page jumping anchor roots
  const sectionHref = `#${text.toLowerCase()}`;

  return (
    <Anchor
      component="a"
      href={sectionHref}
      onClick={() => setSelected(text)}
      underline="never"
      fw={500}
      fz="sm"
      className="premium-hover" /* Integrates your custom macro scale transitions */
      style={{
        position: 'relative',
        padding: '6px 12px',
        borderRadius: '6px',
        transition: 'color 0.2s ease',
        /* If selected, highlights text white; otherwise uses soft slate gray */
        color: selected ? '#ffffff' : 'var(--mantine-color-gray-4)',
      }}
      styles={{
        root: {
          '&:hover': {
            /* If it's already selected, don't change hover text; else flash lime green on hover */
            color: selected ? '#ffffff' : 'var(--mantine-color-myColor-5)',
          }
        }
      }}
    >
      {/* text layer rests on top of the moving background layer */}
      <span style={{ position: 'relative', zIndex: 10 }}>{text}</span>
      
      {selected && (
        <motion.span
          layoutId="header-pill"
          transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            borderRadius: '6px',
            background: 'linear-gradient(to right, var(--mantine-color-myColor-7), var(--mantine-color-myColor-5))',
            boxShadow: '0 4px 12px -4px rgba(163, 230, 53, 0.3)' /* Seamless theme integrated glow track */
          }}
        />
      )}
    </Anchor>
  );
};

export function Header({ opened, toggle }: HeaderProps) {
  // Tracks selection state uniformly inside the parent navigation tree context layout
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <AppShell.Header style={{ borderBottom: '1px solid #2c2e33', backgroundColor: '#141517' }}>
      <Container size="lg" h="100%">
        <Group h="100%" px="md" justify="space-between" wrap="nowrap">
          
          {/* Left: Branding Identity */}
          <Text 
            fw={800} 
            fz="lg" 
            c="white" 
            style={{ letterSpacing: '1px' }}
          >
            MUAZ BAYTAMOUNY
          </Text>

          {/* Right: Dynamic Highlight Nav Link Tracks (Hidden on mobile) */}
          <Group gap={8} visibleFrom="sm" wrap="nowrap">
            {tabs.map((tab) => (
              <NavAnchor
                text={tab}
                selected={selected === tab}
                setSelected={setSelected}
                key={tab}
              />
            ))}
          </Group>

          {/* Hamburger Button for Mobile screens */}
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" color="white" />
        </Group>
      </Container>
    </AppShell.Header>
  );
}