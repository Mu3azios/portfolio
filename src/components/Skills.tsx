// SkillsSection.tsx
import { Container, Title, Text, SimpleGrid, Card, Box, Tabs, Group, Badge } from '@mantine/core';

const SKILLS_DATA = {
  frontend: [
    { name: 'React.js', level: 'Expert' },
    { name: 'Vue.js', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'Mantine / Tailwind', level: 'Expert' }
  ],
  backend: [
    { name: 'Laravel', level: 'Expert' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'Express / Fastify', level: 'Advanced' },
    { name: 'RESTful APIs', level: 'Expert' }
  ],
  infrastructure: [
    { name: 'Self-Hosting', level: 'Intermediate' },
    { name: 'Linux / Bash', level: 'Advanced' },
    { name: 'Git / GitHub Actions', level: 'Advanced' },
    { name: 'pnpm / Vite Suite', level: 'Expert' }
  ]
};

export function SkillsSection() {
  return (
    <Box py={{ base: 20, sm: 60 }} id="skills" style={{ borderBottom: '1px solid #2c2e33' }}>
      <Container size="lg">
        
        {/* Section Header */}
        <Box ta="center" mb={40}>
          <Text c="myColor.5" fw={700} tt="uppercase" lts="2px" fz="sm">
            My Tech Stack
          </Text>
          <Title c="white" fz={{ base: '2rem', sm: '2.5rem' }} fw={900} mt="xs">
            Core Competencies & Tools
          </Title>
        </Box>

        {/* Categories Tab Selector */}
        <Tabs defaultValue="frontend" variant="outline" styles={{
          tab: {
            color: 'var(--mantine-color-gray-4)',
            borderBottom: '2px solid transparent',
            '&[data-active]': {
              color: 'var(--mantine-color-myColor-5)',
              borderColor: 'var(--mantine-color-myColor-5)',
            },
            '&:hover': {
              backgroundColor: 'transparent',
              color: 'var(--mantine-color-myColor-4)'
            }
          },
          list: {
            borderColor: '#2c2e33',
            justifyContent: 'center',
            marginBottom: '40px'
          }
        }}>
          <Tabs.List>
            <Tabs.Tab value="frontend" fz="md" fw={600}>Frontend</Tabs.Tab>
            <Tabs.Tab value="backend" fz="md" fw={600}>Backend</Tabs.Tab>
            <Tabs.Tab value="infrastructure" fz="md" fw={600}>DevOps & Tools</Tabs.Tab>
          </Tabs.List>

          {/* Render Loop for Each Section */}
          {Object.entries(SKILLS_DATA).map(([category, skills]) => (
            <Tabs.Panel key={category} value={category}>
              <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
                {skills.map((skill, idx) => (
                  <Card 
                    key={idx} 
                    padding="md" 
                    radius="md" 
                    style={{ backgroundColor: '#141517', border: '1px solid #2c2e33' }}
                  >
                    <Group justify="space-between">
                      <Text c="white" fw={600} fz="sm">{skill.name}</Text>
                      <Badge color="myColor.5" variant="light" size="xs" radius="sm">
                        {skill.level}
                      </Badge>
                    </Group>
                  </Card>
                ))}
              </SimpleGrid>
            </Tabs.Panel>
          ))}
        </Tabs>

      </Container>
    </Box>
  );
}