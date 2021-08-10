import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, CardContent, Container, Grid, TextField } from "@material-ui/core"
import { PCMenu } from "../../general/pc_menu"
import styles from "../../styles/index.module.css"

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
        <Container className={styles.topbanner} >
            <PCMenu />
            <Grid className={styles.tbgridparent} alignItems="flex-end" container>
                <Grid className={styles.tbgrid1} item md={6} container >
                    <h3 className={styles.tbg1h3}>Grow Your
                        <label style={{ color: "white" }}> Web </label>
                        development skills with
                        <label style={{ color: "white", fontWeight: 'bold' }}> Datrisoft</label> </h3>
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
    </>
}

function ApplyBtn(params) {
    return <>
            <button className="w3-btn"
                style={{ borderRadius: "100px", backgroundColor: "white" }} >Apply now</button>
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

function ProjectList() {
    return <>
        <Container className={styles.projectlist} >
            <h3 style={{ fontWeight: "bolder", textAlign: "center", fontWeight: 42 }}>
                Projects we have worked on</h3>
            <Grid justify="space-around" container >
                {projectListObjs.map(({ logoSrc, name, bgColorTop, bgColorBottom }, index) =>
                    <ProjectTile src={logoSrc} name={name}
                        bgColorTop={bgColorTop} bgColorBottom={bgColorBottom} key={index} />)}
            </Grid>
        </Container>
    </>
}

function FooterNew(params) {
    return <>
        <Grid container className={styles.footernew}>
            <Grid container style={{ height: "150px" }}></Grid>
            <Grid container style={{ height: "150px",}} 
            justifyContent="center" direction="column">
                <Container>
                <h2 style={{ color: "white",textAlign:"center" }}>JOIN US TODAY AT DATRISOFT</h2>
              <p style={{textAlign:"center"}} > <ApplyBtn /></p> 
                </Container>
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

function ProjectTile({ src, name, bgColorTop, bgColorBottom }) {
    return <>
        <Card variant="elevation" >
            <CardContent>
                <div className={styles.pttop} style={{ backgroundColor: bgColorTop }}>
                    <img src={src} height={100} />
                </div>
                <div className={styles.ptbottom} style={{ backgroundColor: bgColorBottom }}>
                    <h4>{name}</h4>
                </div>
            </CardContent>
        </Card>
    </>
}

function Box1(params) {

    return <>
        <Container className={styles.box1}>
            <h6 style={{ textAlign: 'center' }}>Work with us</h6>
            <h3 className={styles.boxtitle} style={{ textAlign: 'center' }} >Why Join Us?</h3>
            <Grid container direction="column" >
                {box1TxtObjs.map(({ header, desc }, index) =>
                    <ItemOfBox1 headerProps={header} descProps={desc} key={index} />)}
            </Grid>

        </Container>  </>
}

function Box4(params) {

    return <>
        <Container className={styles.box1}>
            <h6 style={{ textAlign: 'center' }}>Work with us</h6>
            <h3 className={styles.boxtitle} style={{ textAlign: 'center' }} >What We Have To Offer</h3>

            <Grid container item>
                {box4Txt1Objs.map(({ desc, imgSrc }, index) =>
                    <ItemOfBox4 imgSrcProps={imgSrc} descProps={desc} key={index} />)}
            </Grid>

            <h3 className={styles.boxtitle} style={{ textAlign: 'center' }} >Future Specialization</h3>
            <Grid container item>
                {box4Txt2Objs.map(({ desc, imgSrc }, index) =>
                    <ItemOfBox4 imgSrcProps={imgSrc} descProps={desc} key={index} />)}
            </Grid>
        </Container>
    </>
}

function ItemOfBox1({ headerProps, descProps }) {
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
        <Grid item container md={6} >
            <Grid item container xs={2}>
                <img height={40} width={40} src={imgSrcProps} />
            </Grid>
            <Grid item container xs={10}>
                <p className={styles.boxsmall}>{descProps}</p>
            </Grid>
        </Grid>

    </>
}

let box1TxtObjs = [
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

let box4Txt1Objs = [
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

let box4Txt2Objs = [
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
    bgColorTop: "black",
    bgColorBottom: "white"
}, {
    logoSrc: "/svgs/myspace4you.svg",
    name: "MySpace4You"
}, {
    logoSrc: "/svgs/medikedu.svg",
    name: "Medikedu"
}]

export default PCIndex
