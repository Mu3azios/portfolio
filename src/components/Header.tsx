// Header.tsx
import { AppShell, Group, Burger, Text, Anchor, Container } from '@mantine/core';

// Define the TypeScript types for the props the Header needs
interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

export function Header({ opened, toggle }: HeaderProps) {
  return (
    <AppShell.Header style={{ borderBottom: '1px solid #2c2e33' }}>
      <Container size="lg" h="100%">
        <Group h="100%" px="md" justify="space-between">
          
          {/* Left: Branding Identity */}
          <Text 
            fw={800} 
            fz="xl" 
            c="myColor.5" 
            style={{ letterSpacing: '1px' }}
          >
            MUAZ BAYTAMOUNY
          </Text>

          {/* Right: Traditional Navigation Links (Hidden on mobile) */}
          <Group gap="xl" visibleFrom="sm">
            <Anchor href="#home" c="gray.4" underline="never" fw={500} style={{ '&:hover': { color: 'var(--mantine-color-myColor-5)' } }}>
              Home
            </Anchor>
            <Anchor href="#about" c="gray.4" underline="never" fw={500} style={{ '&:hover': { color: 'var(--mantine-color-myColor-5)' } }}>
              About
            </Anchor>
            <Anchor href="#projects" c="gray.4" underline="never" fw={500} style={{ '&:hover': { color: 'var(--mantine-color-myColor-5)' } }}>
              Projects
            </Anchor>
            <Anchor href="#contact" c="gray.4" underline="never" fw={500} style={{ '&:hover': { color: 'var(--mantine-color-myColor-5)' } }}>
              Contact
            </Anchor>
          </Group>

          {/* Hamburger Button for Mobile screens */}
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" color="white" />
        </Group>
      </Container>
    </AppShell.Header>
  );
}