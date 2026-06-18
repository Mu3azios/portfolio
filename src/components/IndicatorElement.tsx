import {Flex, Box } from '@mantine/core';


const IndicatorElement = () => {
  return (
    <div>
      <Flex direction="column" align="center" mt="md" gap="xs">
        {/* The solid accent vertical vector track */}
        <Box
          style={{
            width: "2px",
            height: "50px",
            backgroundColor: "var(--mantine-color-myColor-5)", // Your primary lime green
          }}
        />

        {/* The small terminal accent circular dot anchor point */}
        <Box
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: "var(--mantine-color-myColor-5)",
          }}
        />
      </Flex>
    </div>
  );
};

export default IndicatorElement;
