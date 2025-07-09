
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" 
  alignItems="center" 
  p={2}
   sx={{ position:  "sticky", background: 'beige ', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <h1 style={{
  color: 'black',
  fontSize: '30px',
  fontWeight: 'bold',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
  letterSpacing: '4px' // Adjust the value to your desired letter spacing
}}>
  VIDEO VERSE
</h1>




    <SearchBar />
  </Stack>
);

export default Navbar;