
import { Container, Grid, Typography } from "@material-ui/core";
import styles from "../../styles/mobileIndex.module.css"
import { FooterNew, futureSpecialObjs, ProjectList, whatToOfferObjs, whyWorkObjs, WhyWorkView } from "./reusables";

function MobileIndex(params) {
    return <>
        <TopBanner />
        <WhyWorkWithUs />
        <WhatToOfferView />
        <ProjectList />
        <FooterNew/>
    </>
}

function TopBanner(params) {
    return <>
        <Container className={styles.topbanner}>
            <Grid className={styles.tbgridparent} container>
                <Grid className={styles.tbgrid1} item xs={8} container >
                    <h3 className={styles.tbg1h3}>Grow Your
                        <label style={{ color: "#fda34b" }}> Web development </label>
                        skills with
                        <label style={{ color: "#fda34b", fontWeight: 'bold' }}> Datrisoft
                        </label>
                    </h3>
                    <p>
                        Learn how to develop effective and captivating web apps using the
                        latest web development tools and practices
                    </p>
                    <p>
                        <ApplyBtn />
                    </p>

                </Grid>
            </Grid>
        </Container>

    </>
}

function ApplyBtn(params) {
    return <>
        <button className="w3-btn"
            style={{ borderRadius: "100px", backgroundColor: "white", fontWeight: "bolder" }} >Apply now</button>
    </>
}

function WhyWorkWithUs(params) {
    return <>
        <Container className={styles.whyWorkCls}>
            <Typography style={{ textAlign: 'center', fontSize: "30px" }}>Work with us</Typography>
            <Typography className={styles.boxtitle}
                style={{
                    textAlign: 'center', textTransform: "uppercase",
                    fontWeight: "bolder"
                }} >Why Join Us?</Typography>
            <Grid container direction="column" >
                {whyWorkObjs.map(({ header, desc }, index) =>
                    <ItemOfWhyWorkView headerProps={header} descProps={desc} key={index} />)}
            </Grid>

        </Container>
    </>
}


function ItemOfWhyWorkView({ headerProps, descProps }) {
    return <>
        <Grid item container md={12} >
            <Grid item container xs={2}>
                <img height={40} width={40} src="/svgs/arrow_right_signage_mob.svg" />
            </Grid>
            <Grid item container xs={10}>
                <h4 style={{ fontWeight: "bolder" }} >{headerProps}</h4>
                <p className={styles.boxsmall}>{descProps}</p>
            </Grid>
        </Grid>

    </>
}


function WhatToOfferView(params) {

    return <>
        <Container className={styles.whatofferCls}>
            <Typography
                style={{ textAlign: 'center', fontSize: "30px", fontWeight: "bolder" }} >
                Projects So Far</Typography>

            <Grid container item>
                {whatToOfferObjs.map(({ desc, imgSrc }, index) =>
                    <ItemOfBoxToOffer imgSrcProps={imgSrc} descProps={desc} key={index} />)}
            </Grid>

            <h3 className={styles.boxtitle} style={{ textAlign: 'center' }} >Future Specialization</h3>
            <Grid container item>
                {futureSpecialObjs.map(({ desc, imgSrc }, index) =>
                    <ItemOfBoxToOffer imgSrcProps={imgSrc} descProps={desc} key={index} />)}
            </Grid>
        </Container>
    </>
}

function ItemOfBoxToOffer({ imgSrcProps, descProps }) {
    return <>
        <Grid item container xs={6} style={{ marginBottom: "10px" }} >
            <Grid item container xs={4}>
                <img height={40} width={40} src={imgSrcProps} />
            </Grid>
            <Grid item container xs={8}>
                <p className={styles.boxsmall}>{descProps}</p>
            </Grid>
        </Grid>

    </>
}

export default MobileIndex;