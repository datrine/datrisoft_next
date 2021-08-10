import { Container, Grid } from "@material-ui/core";

import styles from "../styles/pcmenu.module.css"
function PCMenu() {
    return<>
    <Container className={styles.menu} >
        <Grid container>
            <Grid item container md={6}></Grid>
            <Grid item container md={6} justifyContent="space-around" >
                <a className={styles.link}>Home</a>
                <a className={styles.link}>Projects</a>
                <a className={styles.link}>Vacancies</a>
                <a className={styles.link}>Contact Us</a>
            </Grid>
        </Grid>
    </Container>
    </>
}

export {PCMenu}