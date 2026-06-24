// Services.tsx
import { Container, Title, Text, Box, Flex, Group } from "@mantine/core";
import IndicatorElement from "./IndicatorElement";
import { IconCodeCircle2, IconDeviceMobileCode, IconServerBolt, IconBolt } from "@tabler/icons-react";
import SplitText from "../animated/splitText/SplitText";

const SERVICES_DATA = [
  {
    title: "Website Development",
    icon: <IconCodeCircle2 stroke={1.5} size={50} />,
  },
  {
    title: "App Development",
    icon: <IconDeviceMobileCode stroke={1.5} size={50} />,
  },
  {
    title: "Website Hosting",
    icon: <IconServerBolt stroke={1.5} size={50} />,
  },
  {
    title: "Performance Optimisation",
    icon: <IconBolt stroke={1.5} size={50} />,
  },
];

export function About() {
  return (
    <Box py={{ base: 20, sm: 60 }} id="about" style={{ borderBottom: "1px solid #2c2e33" }}>
      <Container size="lg">
        <Flex
          direction={{ base: "column", md: "row" }} // Stacks on mobile/tablet, splits perfectly 50/50 on desktop screens
          gap={{ base: 50, md: 80 }}
          align="flex-start"
          justify="space-between"
        >
          {/* LEFT SIDE COLUMN: SERVICES TRACK TIMELINE */}
          <Box style={{ flex: 1, width: "100%", maxWidth: "450px" }}>
            <Flex direction="column" >
              {SERVICES_DATA.map((service, index) => (
                <Group key={index} align="center" gap="md" style={{ width: "100%" }} >
                  {/* Your custom drawn line-and-dot component */}
                  <IndicatorElement />

                  {/* Icon and Title Container */}
                  <Group gap="sm" wrap="nowrap" className='premium-hover' style={{padding:"10px", borderRadius:"10px"}}>
                    <span style={{ display: "flex", alignItems: "center", color: "var(--mantine-color-myColor-5)" }}>{service.icon}</span>
                    <Text fz="lg" fw={500} c="white">
                      {service.title}
                    </Text>
                  </Group>
                </Group>
              ))}
            </Flex>
          </Box>

          {/* RIGHT SIDE COLUMN: ABOUT CONTENT & STAT COUNTERS */}
          <Box style={{ flex: 1.2, width: "100%" }}>
            {/* Main Section Header */}
            <Title order={2} fz={{ base: "1rem", sm: "1.5rem" }} fw={800} mb="lg" c="myColor.5" tt="uppercase" lts="2px">
              About me
            </Title>

            {/* Profile Prose Description */}
          <SplitText 
  text="I'm a full-stack developer with over 4 years of experience, specialised in building custom websites, mobile applications, and innovative digital solutions from the ground up. I work across the entire stack, crafting clean, responsive frontends and architecting solid, scalable backends, so your product is in one pair of hands from idea to launch. Beyond building new things, I also help businesses get more out of what they already have. Whether it's tracking down stubborn bugs, squeezing better performance out of a slow application, or setting up reliable cloud hosting that keeps things running smoothly, I treat every project like it's my own."
  className="text-2xl font-semibold leading-[1rem]"
  duration={3} 
  ease="power3.out" 
  splitType="lines" 
  from={{ opacity: 0, y: 40 }} 
  to={{ opacity: 1, y: 0 }} 
  threshold={0.1} 
  // rootMargin="-100px" 
  textAlign="justify" 
/>
          
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
