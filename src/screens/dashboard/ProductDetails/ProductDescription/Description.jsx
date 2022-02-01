import React from "react";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import { AppContext } from "../../../../App";
import CardComponent from "./CardComponent/CardComponent";
import CardDetails from "./CardComponent/CardDetails";
import CardPricing from "./CardComponent/CardPricing";

const Description = () => {
  const { data } = React.useContext(AppContext);

  return (
    <>
      <Stack fontSize={2}>
        <Typography variant="h3" component="h3" textTransform="uppercase">
          description
        </Typography>
        <Typography variant="body2" component="p" fontWeight="bold">
          {data.article.description_long}
        </Typography>
        <Typography variant="body2" component="p" fontWeight="bold" mt={2}>
          {data.article.description_short}
        </Typography>
      </Stack>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        columnSpacing={6}
      >
        <CardComponent title="details">
          <CardDetails />
        </CardComponent>
        <CardComponent title="pricing & shipping">
          <CardPricing />
        </CardComponent>
      </Grid>
    </>
  );
};

export default Description;
