import React from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

import { AppContext } from "../../../../../App";

const formatItem = (item) => {
  return (
    <Typography variant="body2">
      <span>{item.label + ": "} </span>
      <span style={{ fontWeight: "bold" }}>
        {item.value + " " + item.optional}
      </span>{" "}
    </Typography>
  );
};

const ShippingDetails = ({ data }) => {
  return (
    <List>
      <ListItem disablePadding>
        <Icon
          style={{
            color: "#333",
            transform: "scale(0.4)",
            marginRight: 6,
          }}
        >
          circle
        </Icon>
        {formatItem({
          label: "Minimum order",
          value: data.minimum_order_quantity,
          optional: "PCE",
        })}
      </ListItem>
      <ListItem disablePadding>
        <Icon
          style={{
            color: "#333",
            transform: "scale(0.4)",
            marginRight: 6,
          }}
        >
          circle
        </Icon>
        {formatItem({
          label: "Shipping",
          value: data.transport_costs,
          optional: "EUR",
        })}
      </ListItem>
      <ListItem disablePadding>
        <Icon
          style={{
            color: "#333",
            transform: "scale(0.4)",
            marginRight: 6,
          }}
        >
          circle
        </Icon>
        {formatItem({
          label: "Delivery",
          value: data.delivery_time,
          optional: "days",
        })}
      </ListItem>
    </List>
  );
};

const Prices = ({ prices }) => {
  return (
    <List>
      <Divider />
      {Object.keys(prices).map((el) => {
        return (
          <span key={el}>
            <ListItem sx={{ justifyContent: "space-between" }}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {"ex " + el + " PCE"}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {prices[el] + " EUR/PCE"}
              </Typography>
            </ListItem>
            <Divider />
          </span>
        );
      })}
    </List>
  );
};

const CardPricing = () => {
  const { data } = React.useContext(AppContext);

  return (
    <Stack maxWidth={200}>
      {/* Best practice would be with definition list, where there would be a lot of non Material-UI styling involved*/}
      <ShippingDetails data={data.article} />
      <Typography variant="h4">Price breaks</Typography>
      <Prices prices={data.article.price_breaks} />
    </Stack>
  );
};

export default CardPricing;
