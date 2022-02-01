import React, { useState } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { AppContext } from "../../../App";
import Disctount from "../../../assets/icons/discount.svg";
import Add from "../../../assets/icons/add.svg";

const ProductInfo = () => {
  let [noOfIems, setNoOfIems] = useState(1);
  const { data, setData } = React.useContext(AppContext);
  let rating = Math.round(data.article.stars);

  return (
    <Stack direction="column" justifyContent="space-between" p={0.5}>
      <Stack direction="column">
        <Typography variant="h2" component="h2">
          {data.article.title}
        </Typography>

        <div>
          <span>by </span>

          <Link href={data.article.supplier_link}>
            {data.article.supplier_name}
          </Link>
        </div>

        <Rating
          name="rating"
          value={rating}
          onChange={(_, value) => {
            setValue(value);
          }}
          sx={{ marginY: 2 }}
        />

        <Stack direction="row" flex alignItems="center" spacing={1} mt={2}>
          <div style={{ fontWeight: "bold" }}>
            {Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: data.article.currency,
            }).format(data.article.price)}
          </div>
          <div> + </div>
          <div>
            {" "}
            {Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: data.article.currency,
            }).format(data.article.transport_costs)}
          </div>
          <div> shipping</div>
          <Disctount width={15} />
        </Stack>

        <Typography variant="body1" component="div" fontSize={12}>
          all prices inc. {data.article.vat_percent}% taxes
        </Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Stack direction="row" alignItems="center">
          <TextField
            type="number"
            id="outlined-basic"
            variant="outlined"
            InputProps={{ inputProps: { min: 1, max: 10 } }}
            defaultValue={1}
            onChange={(event) => {
              setNoOfIems(event.target.value);
            }}
          />
          <span style={{ marginLeft: "5px" }}>PCE</span>
        </Stack>
        <Button
          variant="contained"
          onClick={() => {
            setData({
              ...data,
              cart: { ...data.cart, items: data.cart.items + +noOfIems },
            });
          }}
        >
          <Add width={20} fill="#fff" style={{ paddingRight: "10px" }} />
          Add to cart
        </Button>
      </Stack>
    </Stack>
  );
};

export default ProductInfo;
