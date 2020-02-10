import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

import Header from "./Header"
import Footer from "./Footer"
import Grid from "@material-ui/core/Grid"
import AuthManager from "../data/AuthManager"
const DEBUG = false
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
    } else if (DEBUG) {
      setUser({ name: "admin@carbon.super" })
    } else {
      const userPromise = AuthManager.getUserFromToken() // Active user check
      userPromise
        .then(loggedUser => {
          if (loggedUser != null) {
            const hasViewScope = loggedUser.scopes.includes("apim:subscribe")
            if (hasViewScope) {
              setUser(loggedUser)
            } else {
              console.log(
                "No relevant scopes found, redirecting to Anonymous View"
              )
              this.setState({ userResolved: true })
            }
          } else {
            console.log("User returned with null, redirect to Anonymous View")
            this.setState({ userResolved: true })
          }
        })
        .catch(error => {
          if (
            error &&
            error.message === CONSTS.errorCodes.INSUFFICIENT_PREVILEGES
          ) {
            this.setState({ userResolved: true, notEnoughPermission: true })
          } else {
            console.log("Error: " + error + ",redirecting to Anonymous View")
            this.setState({ userResolved: true })
          }
        })
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
          <Header user={user} title={title} />
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
