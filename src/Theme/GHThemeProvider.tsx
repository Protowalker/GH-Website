import * as React from "react"
import { ThemeProvider } from "@material-ui/core";
import themeForGH from './GHTheme';

export interface GHThemeProvider{
  children: React.ReactNode;
}

function GHThemeProvider(props: GHThemeProvider) {

  return <ThemeProvider {...props} theme={themeForGH} children={props.children}/>
}

export default GHThemeProvider;
