import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '../Components/Grid'
import Button from '../Components/Button'

import close from './../assets/img/Close.svg'
import cardBack from './../assets/img/cardBack.svg'
import shopify from './../assets/img/shopify.svg'
import img1 from './../assets/img/image 5.png'
import img2 from './../assets/img/image 6.png'
import back from './../assets/img/back.png'

function Home() {
  const useStyles = makeStyles((theme) => ({
    body: {
      margin: 0
    },

    background: {
      padding: '120px 0px',
      backgroundColor: '#989898',
      fontFamily: 'Roboto, sans-serif',
      [theme.breakpoints.down('lg')]: {
        padding: '60px 30px',
      },
      [theme.breakpoints.down('xs')]: {
        padding: '30px 16px',
      },
    },

    mainContainer: {
      padding: '30px 62px',
      width: '1270px',
      boxShadow: '0px 14px 24px rgba(0, 0, 0, 0.15)',
      backgroundColor: '#ffffff',
      borderRadius: 5,
      [theme.breakpoints.down('md')]: {
        padding: '30px 32px',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '24px',
        width: '100%',
      },
    },

    title: {
      fontWeight: 700,
      fontSize: 25,
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'normal',
      marginTop: 47,
      lineHeight: '30px',
      marginBottom: 38,
      [theme.breakpoints.down('md')]: {
        fontSize: 22,
        marginTop: 24,
        marginBottom: 24,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 20,
      },
    },

    demoCard: {
      padding: '32px 42px',
      backgroundColor: '#0D2B4A',
      borderRadius: 5,
      backgroundImage: `url(${cardBack})`,
      width: '100%',
      minHeight: '250px',
      height: '100%',
      backgroundRepeat: 'no-repeat',
      [theme.breakpoints.down('md')]: {
        padding: '24px',
      },
      [theme.breakpoints.down('xs')]: {
        padding: '16px',
      },
    },

    topInfo: {
      marginLeft: 38,
      marginRight: 20,
      [theme.breakpoints.down('md')]: {
        marginLeft: 24,
        marginRight: 16,
      },
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
        marginRight: 0,
        marginTop: 16
      },
    },

    cardTitle: {
      fontWeight: 700,
      fontSize: 25,
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'normal',
      lineHeight: '33px',
      color: '#F5F5F5',
      [theme.breakpoints.down('md')]: {
        fontSize: 22,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 20,
      },
    },

    extraInfo: {
      [theme.breakpoints.down('sm')]: {
        marginTop: 24
      },
    },
    subTitle: {
      marginTop: 5,
      marginBottom: 10,
      fontWeight: 400,
      fontSize: 16,
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'normal',
      lineHeight: '22px',
      color: '#FFFFFF'
    },

    extraInfoTitle: {
      fontWeight: 700,
      fontSize: 16,
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'normal',
      lineHeight: '20px',
      color: '#A1C0DC'
    },

    extraInfoSub: {
      marginTop: 13,
      fontWeight: 400,
      fontSize: 16,
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'normal',
      lineHeight: '24px',
      color: '#F5F5F5',
      width: 120,
      [theme.breakpoints.down('sm')]: {
        marginTop: 8,
        marginRight: 8
      },
    },

    detailsContainer: {
      marginTop: 64,
      marginBottom: 43,
      [theme.breakpoints.down('sm')]: {
        marginTop: 32,
        marginRight: 32
      },
    },

    detailsTitle: {
      color: '#0D2B4A',
      fontWeight: 700,
      fontSize: 25,
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'normal',
      lineHeight: '33px',
      [theme.breakpoints.down('md')]: {
        fontSize: 22,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 20,
      },
    },

    detailsText: {
      marginTop: 16,
      fontWeight: 400,
      fontSize: 16,
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'normal',
      lineHeight: '22px',
      color: '#0D2B4A'
    },

    cardDetails: {
      padding: '38px 36px',
      backgroundColor: '#e4e9ed66',
      borderRadius: 5,
      [theme.breakpoints.down('md')]: {
        marginTop: 24,
        padding: '32px 24px',
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: 24,
        padding: '32px 16px',
      },
    },

    detailsInfo: {
      marginTop: 40,
      marginBottom: 40,
      fontWeight: 400,
      fontSize: 16,
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'normal',
      lineHeight: '19.09px',
      color: '#000000',
      [theme.breakpoints.down('md')]: {
        marginTop: 24,
        marginBottom: 24,
      },
    },

    categoriesTitle: {
      marginTop: 50,
      marginBottom: 28,
      fontWeight: 700,
      fontSize: 16,
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'normal',
      lineHeight: '22px',
      color: '#0D2B4A'
    },

    tag: {
      backgroundColor: '#E4E9ED',
      borderRadius: 5,
      padding: '8px 16px',
      fontWeight: 400,
      fontSize: 16,
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'normal',
      lineHeight: '22px',
      color: '#000000',
      maxWidth: 160
    },

    wow: {
      backgroundColor: '#E4E9ED',
      borderRadius: 5,
      padding: '8px 16px',
      fontWeight: 400,
      fontSize: 16,
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'normal',
      lineHeight: '22px',
      color: '#000000',
      marginLeft: 12,
      maxWidth: 70,
      textAlign: 'center',
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
        marginTop: 12,
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft: 0,
        marginTop: 12,
      },
    },

    testing: {
      backgroundColor: '#E4E9ED',
      borderRadius: 5,
      padding: '8px 16px',
      fontWeight: 400,
      fontSize: 16,
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'normal',
      lineHeight: '22px',
      color: '#000000',
      marginLeft: 12,
      maxWidth: 100,
      textAlign: 'center'
    },

    integration: {
      backgroundColor: '#E4E9ED',
      borderRadius: 5,
      padding: '8px 16px',
      fontWeight: 400,
      fontSize: 16,
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'normal',
      lineHeight: '22px',
      color: '#000000',
      maxWidth: 100,
      textAlign: 'center'
    },

    tabsContainer: {
      marginTop: 42,
      [theme.breakpoints.down('sm')]: {
        marginTop: 32,
      },
    },

    summary: {
      marginLeft: 22,
      fontWeight: 500,
      fontSize: 16,
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'normal',
      lineHeight: '19.54px',
      color: '#969696'
    },

    details: {
      marginLeft: 22,
      padding: '9px 28px',
      fontWeight: 500,
      fontSize: 16,
      fontFamily: 'Roboto, sans-serif',
      fontStyle: 'normal',
      lineHeight: '19.54px',
      color: '#969696',
      backgroundColor: '#E8E8E8',
      borderRadius: 5
    },

    imgContainer1: {
      padding: '8px 10px',
      backgroundColor: '#e4e9ede6',
      borderRadius: 5,
      [theme.breakpoints.only('lg')]: {
        padding: '8px 8px',
      },
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
      },
    },

    imgContainer2: {
      padding: '8px 10px',
      backgroundColor: '#e4e9ede6',
      borderRadius: 5,
      marginLeft: 14,
      [theme.breakpoints.down('lg')]: {
        padding: '8px 8px',
      },
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
        marginTop: 14,
      },
    },

    img: {
      filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.12))',
      [theme.breakpoints.down('lg')]: {
        width: 280,
      },
      [theme.breakpoints.only('sm')]: {
        width: 250,
      },
      [theme.breakpoints.only('xs')]: {
        width: 220,
      },
    },

    shopifyLogo: {
      alignSelf: 'flex-start'
    },

    contImages: {
      marginTop: 50,
      [theme.breakpoints.down('sm')]: {
        marginTop: 20,
      },
    },

    spaceXS: {
      [theme.breakpoints.down('xs')]: {
        marginTop: 30
      },
    },

    imagePoz: {
      verticalAlign: 'text-top'
    },

    additionalContainer: {
      marginTop: 64,
      [theme.breakpoints.down('sm')]: {
        marginTop: 32
      },
    }

  }))
  const classes = useStyles()

  return (
    <Grid container justify="center" alignItems="center" className={classes.background}>
      <div className={classes.mainContainer}>
        <Grid container justify="space-between" alignItems="center">
          <Button 
            title={
              <Grid alignItems="center"><img src={back}  alt="Back Button" className={classes.imagePoz}/> Back</Grid>
            } 
          />
          <img src={close}  alt="Back Button"/>
        </Grid>

        <Grid container>
          <div className={classes.title}>Add Insight</div>
          <Grid container className={classes.demoCard}>
            <img src={shopify} alt="Shopify Image" className={classes.shopifyLogo}/>
            <Grid xs={12} sm={6} md={3} lg={3} xl={3} className={classes.topInfo}>
              <div className={classes.cardTitle}>Ecommerce Intelligence App</div>
              <div className={classes.subTitle}>
                Standartize experience data collection<br /> with Datos Capture
              </div>
              <Button title="Get a Demo" type="primary" />
            </Grid>
            <Grid xs={12} sm={12} md={6} lg={6} xl={6} className={classes.extraInfo}>
              <Grid container>
                <Grid xs={6} sm={4} md={4} lg={4} xl={4}>
                  <div className={classes.extraInfoTitle}>Experience</div>
                  <div className={classes.extraInfoSub}>B2B Customer /EXPERIENCE TYPE</div>
                </Grid>
                <Grid xs={6} sm={4} md={4} lg={4} xl={4}>
                  <div className={classes.extraInfoTitle}>Function</div>
                  <div className={classes.extraInfoSub}>Responding in the moment </div>
                </Grid>
                <Grid xs={6} sm={4} md={4} lg={4} xl={4} className={classes.spaceXS}>
                  <div className={classes.extraInfoTitle}>Created By</div>
                  <div className={classes.extraInfoSub}>AA Team</div>
                </Grid>
                <Grid xs={6} sm={4} md={4} lg={4} xl={4} paddingT={30}>
                  <div className={classes.extraInfoTitle}>Industry</div>
                  <div className={classes.extraInfoSub}>Multi Industry</div>
                </Grid>
                <Grid xs={6} sm={4} md={4} lg={4} xl={4} paddingT={30}>
                  <div className={classes.extraInfoTitle}>Languages</div>
                  <div className={classes.extraInfoSub}>English</div>
                </Grid>
                <Grid xs={6} sm={4} md={4} lg={4} xl={4} paddingT={30}>
                  <div className={classes.extraInfoTitle}>Cost</div>
                  <div className={classes.extraInfoSub}>Get a Quote</div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className={classes.tabsContainer} justify=" " alignItems="center">
          <div className={classes.summary}>Summary</div>
          <div className={classes.details}>Details</div>
        </Grid>

        <Grid container className={classes.detailsContainer} justify="space-between">
          <Grid xs={12} sm={12} md={12} lg={7} xl={7}>
            <div>
              <div className={classes.detailsTitle}>What You Get</div>
              <div className={classes.detailsText}>
                Health systems and all providers across the continuum can now easily identify drivers influencing patient satisfaction in less time with a pre-built solution
                designed by healthcare industry experts. <br /><br />We’ll help you deploy a best-in-class, real-time patient experience program to better coordinate care,
                 empower your front line with insights, and truly improve hospital service and patient care. Health systems and all providers across the continuum can now
                 easily identify drivers influencing patient satisfaction in less time with a pre-built solution designed by healthcare industry experts.<br /><br />
                 We’ll help you deploy a best-in-class, real-time patient experience program to better coordinate care, empower your front line with insights, and truly
                 improve hospital service and patient care.
              </div>
            </div>
            <Grid container className={classes.contImages}>
              <Grid className={classes.imgContainer1}>
                <img src={img1} alt="Dashboard Img 1" className={classes.img}/>
              </Grid>
              <Grid className={classes.imgContainer2}>
                <img src={img2} alt="Dashboard Img 2" className={classes.img}/>
              </Grid>
            </Grid>
            <Grid className={classes.additionalContainer}>
              <div className={classes.detailsTitle}>Additional Resource</div>
              <div className={classes.detailsText}>
                Health systems and all providers across the continuum can now easily identify drivers influencing patient satisfaction in less time with a pre-built solution
                designed by healthcareindustry experts.<br /><br />
                We’ll help you deploy a best-in-class, real-time patient experience program to better coordinate care, empower your front line with insights, and truly
                improve hospital service and patient care. Health systems and all providers across the continuum can now easily
              </div>
            </Grid>
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={4} xl={4}>
            <Grid className={classes.cardDetails}>
              <div className={classes.detailsTitle}>Business impact</div>
              <div className={classes.detailsInfo}>
                <b>1 -</b> Responding in the moment leads to higher quality insights
              </div>
              <div className={classes.detailsInfo}>
                <b>2 -</b> Chatbots and AI reduce operating costs and make feedback more scalable
              </div>
              <div className={classes.detailsInfo}>
                <b>3 -</b>Flip interactions into opportunities to delight and exceed expectations
              </div>
              <div className={classes.categoriesTitle}>Categories Tags</div>
              <Grid container marginB={24}>
                <Grid container>
                  <div className={classes.tag}>
                  Customer Experience
                  </div>
                </Grid>
                <Grid container marginT={12}>
                  <Grid xs={4} sm={4} md={4} lg={4} xl={4} className={classes.integration}>Integration</Grid>
                  <Grid xs={4} sm={3} md={3} lg={3} xl={3} className={classes.testing}>Testing</Grid>
                  <Grid xs={4} sm={4} md={3} lg={3} xl={3} className={classes.wow}>Wow</Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </div>
    </Grid>
  )
}

export default Home