import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

import Header from "./Header"
import Footer from "./Footer"
import Grid from "@material-ui/core/Grid"
import AuthManager from "../data/AuthManager"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}))

export default props => {
  const { children, title } = props
  const [user, setUser] = useState(null)
  const classes = useStyles()
  useEffect(() => {
    const user = AuthManager.getUser()
    if (user) {
      setUser(user)
    }
  }, [])
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="stretch"
      >
        <Grid item>
          <Header title={title} />
        </Grid>
        <Grid item md={12}>
          {children}
        </Grid>
        <Grid item md={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  )
}
