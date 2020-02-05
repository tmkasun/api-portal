import React from "react"
import { fade, makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { Link, graphql, useStaticQuery } from "gatsby"
import SearchIcon from "@material-ui/icons/Search"
import InputBase from "@material-ui/core/InputBase"

import logo from "../../../static/sample1.png"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbarColor: {
    backgroundColor: "white",
  },
  caption: {
    color: "#103f4887",
    marginTop: "27px",
  },
  inputRoot: {
    color: "inherit",
    boxShadow: "0px 0px 20px -11px #888888",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}))

export default function Header(props) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const classes = useStyles()
  const { title } = props
  const { description } = data.site.siteMetadata
  return (
    <div className={classes.root}>
      <AppBar
        className={classes.appbarColor}
        color="inherit"
        position="static"
      >
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <Link
                    activeStyle={{
                      color: "read",
                      display: "contents",
                      textShadow: "none",
                    }}
                    to="/"
                  >
                    <img style={{ marginBottom: 0 }} width="70px" src={logo} />
                    <Typography className={classes.caption} variant="caption">
                      <i>Developer</i>
                    </Typography>
                  </Link>
                </Grid>

                <Grid item>
                  <Link activeStyle={{ color: "read" }} to="/contents">
                    <Button
                      className={classes.menuButton}
                      size="small"
                      color="inherit"
                    >
                      Products
                    </Button>
                  </Link>
                </Grid>

                <Grid item>
                  <Link activeStyle={{ color: "read" }} to="/docs">
                    <Button
                      className={classes.menuButton}
                      size="small"
                      color="inherit"
                    >
                      Documentation
                    </Button>
                  </Link>
                </Grid>

                <Grid item>
                  <Link activeStyle={{ color: "read" }} to="/api-key">
                    <Button
                      className={classes.menuButton}
                      size="small"
                      color="inherit"
                    >
                      API-Key
                    </Button>
                  </Link>
                </Grid>

                <Grid item>
                  <Link activeStyle={{ color: "read" }} to="/contact">
                    <Button
                      className={classes.menuButton}
                      size="small"
                      color="inherit"
                    >
                      Contacts
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ "aria-label": "search" }}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
              >
                <Grid item>
                  <Button
                    href="/devportal/services/configs"
                    variant="outlined"
                    color="primary"
                    size="small"
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}
