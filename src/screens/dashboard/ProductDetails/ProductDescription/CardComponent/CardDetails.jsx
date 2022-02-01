import React from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Chip from "@mui/material/Chip";
import Icon from "@mui/material/Icon";

import { AppContext } from "../../../../../App";
import Attachment from "../../../../../assets/icons/attachment.svg";

const formatItem = (item) => {
  return (
    <Typography variant="body2">
      <span>{item.label + ": "} </span>
      <span style={{ fontWeight: "bold" }}>{item.value}</span>{" "}
    </Typography>
  );
};

const formatAttachments = (item) => {
  return (
    <Typography variant="body2">
      <Link href={item.file_link}>{item.file_label}</Link>
    </Typography>
  );
};

const FeaturesList = ({ data }) => {
  const features = Object.keys(data).map((el) => {
    return { label: el, value: data[el] };
  });

  return features.length ? (
    <List sx={{ padding: 0 }}>
      {features.map((el) => {
        return (
          <span key={el.label}>
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
              {formatItem(el)}
            </ListItem>
          </span>
        );
      })}
    </List>
  ) : (
    <span>No features available at this point</span>
  );
};

const AttachmentsList = ({ data }) => {
  return data.length ? (
    <List sx={{ padding: 0 }}>
      {data.map((el) => {
        return (
          <span key={el.file_label}>
            <ListItem disablePadding>
              <Attachment
                width="15px"
                style={{
                  color: "#000",
                  marginRight: 12,
                }}
              />
              {formatAttachments(el)}
            </ListItem>
          </span>
        );
      })}
    </List>
  ) : (
    <span>No attachments available at this point</span>
  );
};

const CardDetails = () => {
  const { data } = React.useContext(AppContext);

  return (
    <Stack>
      {/* Best practice would be with definition list, where there would be a lot of non Material-UI styling involved*/}
      <Typography variant="h4">Features</Typography>
      <FeaturesList data={data.article.features} />
      <Typography variant="h4">Attachments</Typography>
      <List>
        <AttachmentsList data={data.article.attachments} />
      </List>
      <Typography variant="h4">Keywords</Typography>
      <Stack direction="row" spacing={1} mt={1}>
        {data.article.keywords.map((el) => {
          return (
            <Chip
              key={el}
              label={el}
              sx={{
                textTransform: "uppercase",
                color: "#FFF",
                bgcolor: "#CED4DB",
              }}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};

export default CardDetails;
