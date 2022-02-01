import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const SectionWrapper = ({ bgColor, children }) => {
  return (
    <Container sx={{ background: bgColor }} maxWidth="100%">
      <Box maxWidth={1080} paddingY={6}>
        {children}
      </Box>
    </Container>
  );
};

export default SectionWrapper;
