import React, { useEffect, useState } from "react";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Badge from "@mui/material/Badge";
import { useTheme } from "@mui/material/styles";

import FactsSoft from "../../../assets/icons/facts-soft.svg";
import Favorite from "../../../assets/icons/favorite.svg";
import Cart from "../../../assets/icons/cart.svg";
import { AppContext } from "../../../App";

const Header = () => {
  const { data } = React.useContext(AppContext);
  const theme = useTheme();

  const [scrollEvent, setScrollEvent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollEvent(true);

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollEvent]);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        position: "sticky",
        top: 0,
        background: "#FFF",
        zIndex: 10,
        borderBottom: "1px solid",
        borderColor: theme.palette.secondary.light,
        overflow: "hidden",
        boxShadow: scrollEvent ? "rgba(0, 0, 0, 0.1) 0px 4px 12px" : "",
      }}
    >
      <Typography
        variant="body1"
        component="h1"
        color="primary"
        fontSize={24}
        px={3}
        py={2}
      >
        {data.article.title}
      </Typography>

      <Stack direction="row" spacing={3}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Favorite fill={theme.palette.secondary.main} height={30} />
          <FactsSoft fill={theme.palette.secondary.main} height={30} />
        </Stack>

        <Divider
          orientation="vertical"
          flexItem
          color={theme.palette.secondary.light}
        />

        <Stack justifyContent="center" paddingRight={3}>
          <Badge
            badgeContent={data.cart.items}
            color="primary"
            overlap="circular"
          >
            <Cart fill={theme.palette.secondary.main} height={30} />
          </Badge>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header;
