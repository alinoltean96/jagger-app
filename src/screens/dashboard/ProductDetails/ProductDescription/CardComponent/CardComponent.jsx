import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

const CardComponent = ({ title, children }) => {
  return (
    <Grid item xs={12} md={6} mt={6}>
      <Card sx={{ height: "100%" }}>
        <CardContent>
          <Typography
            variant="h3"
            component="h3"
            textTransform="uppercase"
            mb={1.5}
          >
            {title}
          </Typography>
          <Divider />
          {children}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardComponent;
