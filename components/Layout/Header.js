import React from "react";
import Link from "next/link";
import styles from "./layout.module.css";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link: {
    marginLeft: 20,
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Header = (props) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className={styles.menuWrap}>
            <Link href="/">
              <Typography variant="h6" className={classes.title}>
                Hello Next Blog
              </Typography>
            </Link>
            <div className={styles.menu}>
              <Link className={styles.headerLink} href="/about/">
                <Typography variant="body1">About</Typography>
              </Link>
              <Link className={styles.headerLink} href="/contact/">
                <Typography variant="body1" className={classes.link}>
                  Contact
                </Typography>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};
export default Header;
