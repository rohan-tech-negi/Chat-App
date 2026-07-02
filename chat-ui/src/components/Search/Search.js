import { alpha, styled } from "@mui/material";

const Search = styled("div")(({theme})=>({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.default, 1),
  marginRight: theme.spacing(2),
  width: "100%",
  marginLeft: 0
}))

export default Search