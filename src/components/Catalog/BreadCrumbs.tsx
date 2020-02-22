import React from "react"
import { Route, MemoryRouter } from "react-router"
import { Link as RouterLink } from "react-router-dom"

import { makeStyles, Theme } from "@material-ui/core/styles"
import { 
  Box,
  Link,
  LinkProps,
  Typography,
  Breadcrumbs
 } from "@material-ui/core"
 import { Home } from "@material-ui/icons"

const breadcrumbNameMap: { [key: string]: string } = {
  '/inbox': 'Inbox',
  '/inbox/important': 'Important',
  '/trash': 'Trash',
  '/spam': 'Spam',
  '/drafts': 'Drafts'
}

const useStyles = makeStyles((theme: Theme) => ({
  breadcrumbs: {
    margin: "10px 10px 10px 30px"
  },
  link: {
    alignItems: "center",
    borderRadius: "6px",
    display: "flex",
    padding: 10,
    "&:hover": {
      backgroundColor: "black",
      color: theme.palette.secondary.main,
      textDecoration: "none",
      transitionDuration: ".25s"
    }
  }
}))

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => <Link {...props} component={RouterLink as any} />;

const RouterBreadcrumbs = () => {

  const classes = useStyles()

  return (
    <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
      <Box>
        <Route>
          {({ location }) => {
            const pathnames = location.pathname.split('/').filter(x => x);

            return (
              <Breadcrumbs className={classes.breadcrumbs} aria-label="breadcrumb">
                <LinkRouter className={classes.link} color="inherit" to="/">
                  <Home />
                  Home
                </LinkRouter>

                {pathnames.map((value, index) => {
                  const last = index === pathnames.length - 1;
                  const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                  return last ? (
                    <Typography color="textPrimary" key={to}>
                      {breadcrumbNameMap[to]}
                    </Typography>
                  ) : (
                    <LinkRouter color="inherit" to={to} key={to}>
                      {breadcrumbNameMap[to]}
                    </LinkRouter>
                  );
                })}
              </Breadcrumbs>
            )
          }}
        </Route>

      </Box>
    </MemoryRouter>
  )
}

export default RouterBreadcrumbs