import { Typography, Divider } from "@mui/material";

function Title(props) {
  return (
    <>
      <Typography variant="h2">{props.children}</Typography>
      <Divider />
    </>
  );
}

export default Title;
