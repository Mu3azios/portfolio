// App.tsx
import { AppShell, Group, Anchor } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Header } from "./components/Header"; // Import your new Header component
import { HeroSection } from "./components/Hero"; // Your hero section file
import { About } from "./components/About";
import Projects from "./components/Projects";
import { GetInTouch } from "./components/GetInTouch";
import { SkillsSection } from "./components/Skills";
import IndicatorElement from "./components/IndicatorElement";
import "./App.css";

export default function App() {
  const [opened, { toggle }] = useDisclosure(); // Tracks if mobile drawer is open

  return (
    <AppShell header={{ height: 70 }} navbar={{ width: "100%", breakpoint: "sm", collapsed: { desktop: true, mobile: !opened } }} padding="md">
      {/* 1. RENDER RENDERED HEADER COMPONENT */}
      <Header opened={opened} toggle={toggle} />

      {/* MOBILE DRAWER PANEL */}
      <AppShell.Navbar p="xl" bg="#141517" style={{ borderBottom: "1px solid #2c2e33" }}>
        <Group gap="lg" direction="column">
          <Anchor href="#home" c="white" fz="lg" onClick={toggle}></Anchor>
          <Anchor href="#about" c="white" fz="lg" onClick={toggle}>
            About
          </Anchor>
          <Anchor href="#projects" c="white" fz="lg" onClick={toggle}>
            Projects
          </Anchor>
          <Anchor href="#contact" c="white" fz="lg" onClick={toggle}>
            Contact
          </Anchor>
        </Group>
      </AppShell.Navbar>

      {/* CORE CONTENT CANVAS */}
      <AppShell.Main>
        <HeroSection />
        <SkillsSection />
        <About />
      
        <Projects />
        <GetInTouch />
      </AppShell.Main>
    </AppShell>
  );
}
