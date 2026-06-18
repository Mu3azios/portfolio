import { useRef } from 'react';
import { Container, Button, Group, SimpleGrid, Text, Textarea, TextInput } from '@mantine/core';
import emailjs from '@emailjs/browser'; // Using the clean, standard browser package
import { ContactIconsList } from './ContactIcons';
import classes from './GetInTouch.module.css';

export function GetInTouch() {
  // Attached directly to the HTML form element
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(
      'service_vfvtaxi', 
      'template_p4t6w1p', 
      formRef.current, 
      'eDVENzkvHt4bTwe5X'
    )
    .then(() => {
      alert('Message sent successfully!');
      formRef.current?.reset();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      alert('Failed to send message, please try again.');
    });
  };

  return (
    <div className={classes.wrapper} id="contact">
      <Container size="lg" w="100%" px={0} style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
        
        {/* Left Side: Contact Info Sidebar */}
        <div className={classes.contacts}>
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Contact information
          </Text>
          <ContactIconsList />
        </div>

        {/* Right Side: Interactive Email Form */}
        <form 
          ref={formRef} 
          className={classes.form} 
          onSubmit={sendEmail}
        >
          <Text fz="lg" fw={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              {/* Note: 'name' attributes match your existing EmailJS template keys exactly */}
              <TextInput label="Your name" placeholder="Your Full Name" name="name" required />
              <TextInput label="Your email" placeholder="hello@mantine.dev" name="email" required />
            </SimpleGrid>

            {/* If your template handles a subject line field, keep this. Otherwise, it safely ignores it */}
            <TextInput mt="md" label="Subject" placeholder="Subject" name="subject" />

            <Textarea
              mt="md"
              label="Your message"
              placeholder="Your Message"
              minRows={5}
              name="message"
              required
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control}>
                Send message
              </Button>
            </Group>
          </div>
        </form>

      </Container>
    </div>
  );
}