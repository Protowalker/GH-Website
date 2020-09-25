import * as React from "react"
import { GHThemeProvider } from "../Theme"
import {
  BottomNavigationAction,
  Button,
  CardActionArea,
  Fab,
  IconButton,
  Link,

} from "gatsby-theme-material-ui";

import {Paper } from '@material-ui/core';

export default function Home() {
  return (
      <Paper>
        <Button color={'secondary'}>Button 1</Button>
        <h1>Soon to be Grandeur Hammers</h1> <div>Hello world!</div>
      </Paper>
  )
}
