import { useEffect, useState } from "react";
import { Container, Grid, Title, Text, Button, Image, Box, Flex } from "@mantine/core";
import muaz from "../assets/muaz1.webp";
import 'animate.css';




const WORDS_TO_TYPE = ["Full-Stack Developer", "UI/UX Enthusiast", "Problem Solver"];

export function HeroSection() {
  // 1. Core state for the custom typing animation loop
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = WORDS_TO_TYPE[currentWordIndex];

      if (!isDeleting) {
        // Typing out characters
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText === fullWord) {
          // Finished typing -> pause momentarily before deleting
          setTypingSpeed(1500);
          setIsDeleting(true);
        } else {
          setTypingSpeed(100);
        }
      } else {
        // Deleting characters
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          // Finished deleting -> move to next word string
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % WORDS_TO_TYPE.length);
          setTypingSpeed(300);
        } else {
          setTypingSpeed(50);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  return (
    <Box py={{ base: 5, sm: 60 }} style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #2c2e33"  }} id="home">
      <Container size="lg">
        <Grid  align="center">
          {/* LEFT SIDE: Hero copy & animated loop hooks */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Text c="white" fz="xl" fw={500} mb="xs" className="animate__animated  animate__fadeInLeft animate__delay-0.2s">
              Hi, I'm Muaz
            </Text>

            <Title c="white" fz={{ base: "1.9rem", sm: "3.5rem" }} fw={900} lh={1.2} className="animate__animated  animate__fadeInLeft animate__delay-0.5s">
              I build scalable applications as a<br></br>{" "}
              <Text
                component="span"
                c="myColor.5" // Pulls shade 5 from your custom lime green tuple
                inherit
                style={{ borderRight: "3px solid", paddingRight: "4px" }}
              >
                {currentText}
              </Text>
            </Title>

            <Text c="gray.5" fz="lg" mt="md" maw={550} className="animate__animated  animate__fadeInLeft animate__delay-1s">
              Specializing in high-performance web systems, intuitive interfaces, and protected commercial products.
            </Text>
            <Flex gap="md" justify={{ base: "center", sm: "flex-start" }} align="flex-start" direction="row" wrap="wrap">
              <Button
                component="a" 
                href="#projects"
                variant="outline"
                color="myColor.5" // Clean lime green border outline
                size="lg"
                mt="xl"
                radius="md"
                style={{ transition: "all 0.2s ease" }}
                // Custom inline styling parameters are safe and clean with Mantine style hooks
                styles={{
                  root: {
                    color: "var(--mantine-color-myColor-5)",
                    "&:hover": {
                      backgroundColor: "var(--mantine-color-myColor-5)",
                      color: "#1a1b1e", // Flips font to dark gray when hovered
                    },
                  },
                }}
              >
                View Work
              </Button>

              <Button
                component="a" // Turns the button into an <a> tag so href and download work
                href="../assets/Muaz_Baytamouny_Resume.pdf" // Uses the dynamic bundled path from Vite
                download="Muaz_Baytamouny_Resume.pdf" // Forces the browser download
                variant="outline"
                color="myColor.5" // Clean lime green border outline
                size="lg"
                mt="xl"
                radius="md"
                style={{ transition: "all 0.2s ease" }}
                // Custom inline styling parameters are safe and clean with Mantine style hooks
                styles={{
                  root: {
                    color: "var(--mantine-color-myColor-5)",
                    "&:hover": {
                      backgroundColor: "var(--mantine-color-myColor-5)",
                      color: "#1a1b1e", // Flips font to dark gray when hovered
                    },
                  },
                }}
              >
                My Resume
              </Button>
            </Flex>
          </Grid.Col>

          {/* RIGHT SIDE: Upscaled transparent photo frame */}
          <Grid.Col span={{ base: 12, md: 5 }} style={{ display: "flex", justifyContent: "center" }}>
            <Box
              my={{ base: 30, sm: 0 }}
              style={{
                position: "relative",
                borderRadius: "50%",
                // Enhanced subtle lime green glow behind your isolated picture frame
                boxShadow: "0 0 50px rgba(135, 222, 88, 0.25)",
                border: "4px solid var(--mantine-color-myColor-5)",
                overflow: "hidden",

                // NEW GRADIENT: Radiates dark lime green from the center outwards to deep charcoal gray
                background: "radial-gradient(circle, rgba(135, 222, 88, 0.15) 0%, #141517 70%)",

                width: "320px",
                height: "320px",
              }}
            className="animate__animated  animate__zoomIn animate__delay-1.5s"
            >
              <Image
                src={muaz}
                alt="Muaz Portfolio Profile Picture"
                w="100%"
                h="100%"
                fit="contain"
                style={{
                  transform: "scale(1.3)",
                  // Kept your crisp white outline to contrast against the new gradient glow!
                  filter: "drop-shadow(1px 0px 0px #ffffff) drop-shadow(-1px 0px 0px #ffffff) drop-shadow(0px 1px 0px #ffffff) drop-shadow(0px -1px 0px #ffffff)",
                }}
              />
            </Box>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
