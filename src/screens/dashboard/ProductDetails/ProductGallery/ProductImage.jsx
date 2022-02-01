import React from "react";

import Package from "../../../../assets/icons/package.svg";
import ZoomIn from "../../../../assets/icons/zoom-in.svg";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

const ProductImage = ({ withZoom }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: theme.palette.secondary.light,
        position: "relative",
      }}
    >
      <Package fill={theme.palette.secondary.main} />
      {withZoom ? (
        <Box position="absolute" right={5} bottom={5} width={20} height={20}>
          <ZoomIn fill={theme.palette.secondary.main} />
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default ProductImage;
