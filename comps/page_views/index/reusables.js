import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, CardContent, Container, Grid, TextField, Typography } from "@material-ui/core"
import { PCMenu } from "../../general/pc_menu"
import styles from "../../styles/index.module.css"


function ProjectList() {
    return <>
        <Container className={styles.projectlist} >
            <h3 style={{ fontWeight: "bolder", textAlign: "center", fontWeight: 42 }}>
                Projects we have worked on</h3>
            <Grid justify="space-around" container >
                {projectListObjs.map(({ logoSrc, name, bgColorTop,
                    bgColorBottom, colorTop, colorBottom }, index) =>
                    <ProjectTile src={logoSrc} name={name}
                        bgColorTop={bgColorTop}
                        bgColorBottom={bgColorBottom}
                        colorTop={colorTop}
                        colorBottom={colorBottom}
                        key={index} />)}
            </Grid>
        </Container>
    </>
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

function ProjectTile({ src, name, bgColorTop, bgColorBottom, colorTop, colorBottom }) {
    return <>
        <Grid item container md={4} justify="center" style={{ marginBottom: "20px" }} >
            <div className="w3-card" style={{ width: 250,
                borderTopLeftRadius:10,borderTopRightRadius:20 }} >
                <div className={styles.pttop}
                    style={{
                        backgroundColor: bgColorTop, display: "flex",
                        justifyContent: "center", width: "100%"
                    }}>
                    <img src={src} height={200} width={200} />
                </div>
                <div className={styles.ptbottom}
                    style={{
                        backgroundColor: bgColorBottom ,
                        color: colorBottom
                    }}>
                    <Typography style={{ textAlign: "center", fontSize: "25px" }} >{name}</Typography>
                </div>
            </div>
        </Grid>
    </>
}

function WhyWorkView(params) {
    return <>
        <Container className={styles.box1}>
            <h6 style={{ textAlign: 'center' }}>Work with us</h6>
            <h3 className={styles.boxtitle} style={{ textAlign: 'center' }} >Why Join Us?</h3>
            <Grid container direction="column" >
                {whyWorkObjs.map(({ header, desc }, index) =>
                    <ItemOfWhyWorkView headerProps={header} descProps={desc} key={index} />)}
            </Grid>

        </Container>  </>
}

function WhatToOfferView(params) {

    return <>
        <Container className={styles.box1}>
            <h6 style={{ textAlign: 'center' }}>Work with us</h6>
            <h3 className={styles.boxtitle} style={{ textAlign: 'center' }} >What We Have To Offer</h3>

            <Grid container item>
                {whatToOfferObjs.map(({ desc, imgSrc }, index) =>
                    <ItemOfBox4 imgSrcProps={imgSrc} descProps={desc} key={index} />)}
            </Grid>

            <h3 className={styles.boxtitle} style={{ textAlign: 'center' }} >Future Specialization</h3>
            <Grid container item>
                {futureSpecialObjs.map(({ desc, imgSrc }, index) =>
                    <ItemOfBox4 imgSrcProps={imgSrc} descProps={desc} key={index} />)}
            </Grid>
        </Container>
    </>
}

function ItemOfWhyWorkView({ headerProps, descProps }) {
    return <>
        <Grid item container md={12} >
            <Grid item container xs={2}>
                <img height={40} width={40} src="/svgs/arrow_right_signage.svg" />
            </Grid>
            <Grid item container xs={10}>
                <h4 className={styles.boxheader} >{headerProps}</h4>
                <p className={styles.boxsmall}>{descProps}</p>
            </Grid>
        </Grid>

    </>
}

function ItemOfBox4({ imgSrcProps, descProps }) {
    return <>
        <Grid item container xs={6} >
            <Grid item container xs={2}>
                <img height={40} width={40} src={imgSrcProps} />
            </Grid>
            <Grid item container xs={10}>
                <p className={styles.boxsmall}>{descProps}</p>
            </Grid>
        </Grid>

    </>
}

let whyWorkObjs = [
    {
        header: "Hands-on experience",
        desc: `Joining the team and working on real-life project will give you the necessary experience to pivot into the next phase of your career. You also get guidance from our Senior Dev, Temitope who has over 10 years’ experience in programming and over 3 years of experience building web-based softwares. 
        He is obsessed with active learning and consistent development.`
    },
    {
        header: 'Be a part of the next big thing',
        desc: "You’ve missed the chance to win big on bitcoin, you couldn’t be part of the Facebook story, why miss this one?"
    },
    {
        header: 'Earn as you learn',
        desc: 'We take on projects from paying clients from time to time. If you join our team you get to earn commissions working on such projects..'
    },
    {
        header: "Team Support",
        desc: "We are family! We support each other in every possible way"
    }
]

let whatToOfferObjs = [
    {
        imgSrc: "/svgs/educational.svg",
        desc: "Education"
    },
    {
        imgSrc: "/svgs/e_commerce.svg",
        desc: "E-Commerce"
    },
    {
        imgSrc: "/svgs/tutoring.svg",
        desc: "Tutoring"
    },
    {
        imgSrc: "/svgs/real_estate.svg",
        desc: "Real Estate"
    },
]

let futureSpecialObjs = [
    {
        imgSrc: "/svgs/p2p.svg",
        desc: "Peer To Peer"
    },
    {
        imgSrc: "/svgs/bitcoin.svg",
        desc: "Bitcoin"
    },
    {
        imgSrc: "/svgs/network_tooling.svg",
        desc: "Network Tooling"
    },
    {
        imgSrc: "/svgs/social_media.svg",
        desc: "Social Media"
    },
    {
        imgSrc: "/svgs/web_tooling.svg",
        desc: "Web Tooling"
    },
]

let projectListObjs = [{
    logoSrc: "/svgs/stylznshoes.svg",
    name: "StylzNShoes",
    bgColorTop: "#001131",
    bgColorBottom: "white",
    colorTop: "white",
    colorBottom: "#001131"
}, {
    logoSrc: "/svgs/myspace4you.svg",
    name: "MySpace4You",
    bgColorTop: "white",
    bgColorBottom: "#001131",
    colorTop: "white",
    colorBottom: "white"
}, {
    logoSrc: "/svgs/medikedu.svg",
    name: "Medikedu",
    bgColorTop: "white",
    bgColorBottom: "#001131",
    colorTop: "white",
    colorBottom: "white"
}]

export { whyWorkObjs, whatToOfferObjs, futureSpecialObjs, projectListObjs }

export { WhyWorkView, WhatToOfferView, ProjectList, ProjectTile, ItemOfWhyWorkView }
