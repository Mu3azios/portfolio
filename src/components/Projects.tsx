import React from "react";
import { Container, SimpleGrid, Title, Text, Card, Box, Image, Badge, Group, Button, Flex } from "@mantine/core";
import { IconSunHigh, IconBrandLaravel, IconAtom, IconBrandReact  } from '@tabler/icons-react';

// Importing your assets correctly
import khaledJewelleryLogo from '../assets/Khaled-jewellery-logo-optimised.webp';

const Projects = () => {
  const myPreviousWork = [
    {
      name: "Khaled Jewellery",
      description: "A luxury website built with Laravel and React JS, with live gold and silver. Fully functional with an admin control dashboard, custom image compression workflows, and intersection observer performance scaling.",
      githubLink: "",
      liveLink: "https://khaledjewellery.com/",
      isPrivate: true, // Swapped to true to demonstrate the automated disabling functionality
      isDeployed: true,
      image: khaledJewelleryLogo, // FIXED: Removed the extra curly braces wrapper
      techStack: [
        { name: "React", icon: <IconBrandReact stroke={1.5} size={16} />  },
        { name: "Material UI" },
        { name: "Laravel", icon: <IconBrandLaravel stroke={1.5} size={16} /> },
      ],
    },
    {
      name: "Multi Display Screen Dimmer",
      description: "An elegant cross-platform desktop application built to dim multiple auxiliary displays simultaneously. Controls brightness instantly via simple keyboard macros.",
      githubLink: "https://github.com/Mu3azios/Multi-Display-DimScreen-Electron-js-app",
      liveLink: "https://github.com/Mu3azios/Multi-Display-DimScreen-Electron-js-app",
      isPrivate: false,
      isDeployed: false,
      image: null, // Keep this null or empty so our conditional UI can render the vector icon asset smoothly
      icon: <IconSunHigh stroke={1} size={150} color="var(--mantine-color-myColor-5)" />, // Separated component data type
      techStack: [
        { name: "Electron JS", icon: <IconAtom stroke={1.5} size={16} /> },
      ],
    },
  ];

  return (
    <Box py={{ base: 40, sm: 60 }} id="projects"  style={{ borderBottom: "1px solid #2c2e33" }}>
      <Container size="lg">
        
        {/* HEADER BLOCK */}
        <Box ta="center" mb={50}>
          <Text c="myColor.5" fw={700} tt="uppercase" lts="2px" fz="sm">
            My Previous Work
          </Text>
          <Title c="white" fz={{ base: "2rem", sm: "2.5rem" }} fw={900} mt="xs">
            Proven Development Case Studies
          </Title>
          <Text c="gray.5" fz="md" maxW={600} mx="auto" mt="sm">
            Review production-ready projects showing strict type safety, clean semantic markup, and responsive performance scales.
          </Text>
        </Box>

        {/* RESPONSIVE PROJECTS GRID */}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
          {myPreviousWork.map((work, index) => (
            <Card 
              key={index}
              shadow="sm" 
              padding="lg" 
              radius="md"
              style={{ backgroundColor: "#141517", border: "1px solid #2c2e33", display: "flex", flexDirection: "column" }}
            >
              <Card.Section>
                {work.image ? (
                  // Renders screen capture assets perfectly
                  <Image   bg="#1a1b1e"  src={work.image} height={180} alt={work.name} fit="contain"   style={{ borderBottom: "1px solid #2c2e33" }} />
                ) : (
                  // Elegant dark-mode fallback banner block for desktop utility apps without screenshots
                  <Flex 
                    height={180} 
                    bg="#1a1b1e" 
                    justify="center" 
                    align="center" 
                    style={{ height: 180, borderBottom: "1px solid #2c2e33" }}
                  >
                    {work.icon}
                  </Flex>
                )}
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Title order={3} c="white" fz="lg" fw={600}>{work.name}</Title>
              </Group>

              <Text size="sm" c="gray.5" style={{ flexGrow: 1 }} mb="md">
                {work.description}
              </Text>

              {/* TECH STACK BADGES */}
              <Flex gap="xs" wrap="wrap" mb="xl">
                {work.techStack.map((stack, idx) => (
                  <Badge key={idx} color="myColor.5" variant="light" radius="sm" px={8} py={4}>
                    <Group gap={4} wrap="nowrap">
                      {stack.icon && <span style={{ display: "flex", alignItems: "center" }}>{stack.icon}</span>}
                      <span>{stack.name}</span>
                    </Group>
                  </Badge>
                ))}
              </Flex>

              {/* INTERACTIVE LINK ACTIONS */}
              <Flex gap="md" mt="auto">
                <Button
                  component="a"
                  href={work.isPrivate ? undefined : work.githubLink}
                  target="_blank"
                  variant="outline"
                  color="myColor.5"
                  size="sm"
                  fullWidth
                  radius="md"
                  disabled={work.isPrivate} // FIXED: Automatically disables if repository context parameter dictates privacy
                  style={{ transition: "all 0.2s ease" }}
                  styles={{
                    root: {
                      color: work.isPrivate ? "var(--mantine-color-gray-6)" : "var(--mantine-color-myColor-5)",
                      "&:hover": {
                        backgroundColor: work.isPrivate ? undefined : "var(--mantine-color-myColor-5)",
                        color: work.isPrivate ? undefined : "#1a1b1e",
                      },
                    },
                  }}
                >
                  {work.isPrivate ? "Private Repo" : "GitHub"}
                </Button>
                
                <Button
                  component="a"
                  href={!work.isDeployed ? undefined : work.liveLink}
                  target="_blank"
                  variant="outline"
                  color="myColor.5"
                  size="sm"
                  fullWidth
                  radius="md"
                  disabled={!work.isDeployed} // FIXED: Automatically disables if deployment flag returns false
                  style={{ transition: "all 0.2s ease" }}
                  styles={{
                    root: {
                      color: !work.isDeployed ? "var(--mantine-color-gray-6)" : "var(--mantine-color-myColor-5)",
                      "&:hover": {
                        backgroundColor: !work.isDeployed ? undefined : "var(--mantine-color-myColor-5)",
                        color: !work.isDeployed ? undefined : "#1a1b1e",
                      },
                    },
                  }}
                >
                  Live Demo
                </Button>
              </Flex>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Projects;