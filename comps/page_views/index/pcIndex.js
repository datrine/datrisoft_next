import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, CardContent, Container, Grid, TextField } from "@material-ui/core"
import { PCMenu } from "../../general/pc_menu"
import styles from "../../styles/index.module.css"
import { ProjectList, WhatToOfferView, WhyWorkView ,FooterNew} from "./reusables"

const PCIndex = () => {
    return <>
        <TopBanner />
        <FourBigBoxes />
        <ProjectList />
        <FooterNew />
    </>
}

function TopBanner(params) {
    return <>
        <div className={styles.topdiv} >
            <Container className={styles.topbanner} >
                <PCMenu />
                <Grid className={styles.tbgridparent} alignItems="flex-end" container>
                    <Grid className={styles.tbgrid1} item md={6} container >
                        <h3 className={styles.tbg1h3}>Grow Your
                            <label style={{ color: "#fda34b" }}> Web development </label>
                            skills with
                            <label style={{ color: "#fda34b", fontWeight: 'bold' }}> Datrisoft</label> </h3>
                        <h6>
                            Learn how to develop effective and captivating web apps using the
                            latest web development tools and practices.
                            Gain experience developing with React, Nodejs, CMS like Strapi,
                            MySQL, POSTGRESQL, MongoDB.
                        </h6>
                        <p> <ApplyBtn /></p>

                    </Grid>
                </Grid>
            </Container>
        </div>
    </>
}

function FourBigBoxes(params) {
    return <>
        <Grid container className={styles.fourbigboxes}>
            <Grid item container md={6} className={styles.grid1}>
                <Box1 />
            </Grid>
            <Grid item container md={6}>
                <Container className={styles.grid2}></Container>
            </Grid>
            <Grid item container md={6}>
                <Container className={styles.grid3}></Container>
            </Grid>
            <Grid item container md={6} className={styles.grid1}>
                <Box4 />
            </Grid>
        </Grid>
    </>
}


function Footer() {
    return <>
        <Grid container className={styles.footer} >
            <Grid item container className={styles.footerdiv1} md={6} >
                <FormContact /></Grid>
            <Grid item container className={styles.footerdiv2} md={6}>
                <Grid item container md={8}>
                </Grid>
                <Grid item container md={4}>
                    <Container>
                        <h4><FontAwesomeIcon icon={faPhone} /></h4>
                        <p style={{ textAlign: "center" }}>+234 706 896 8932</p>
                        <p style={{ textAlign: "center" }}>+234 806 472 5517</p>
                    </Container>
                    <Container>
                        <h4><FontAwesomeIcon icon={faEnvelope} /></h4>
                        <p style={{ textAlign: "center" }}>help@datrisoft.com</p>
                        <p style={{ textAlign: "center" }}>devs@datrisoft.com</p>
                    </Container>
                </Grid>
            </Grid>
        </Grid></>
}

function FormContact(params) {
    return <>
        <Container>
            <Grid container justifyContent="center" style={{}}>
                <Grid style={{ width: 400, height: "100%", height: "400px" }}>
                    <TextField className={styles.fcinput} fullWidth placeholder="Name..." />
                    <TextField className={styles.fcinput} fullWidth placeholder="email..." />
                    <TextField className={styles.fcinput} fullWidth placeholder="Message..." />
                </Grid>
            </Grid>
        </Container>
    </>
}

function Box1(params) {

    return <>
        <WhyWorkView />
    </>
}

function Box4(params) {

    return <><WhatToOfferView /></>
}

export default PCIndex

export { TopBanner }
