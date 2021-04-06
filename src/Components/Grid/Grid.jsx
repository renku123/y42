import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import classNames  from 'classnames'
import PropTypes from 'prop-types'

function FGrid(props) {
  let { marginL, marginR, marginB, marginT, margin, paddingL, paddingR, paddingT, paddingB, padding, alignSelf, height, ...rest  } = props
  // give props like marginT={22} marginB={2} marginL={5} marginR={9} margin="1px 2px 3px 5px"

  let style ={}
  if (paddingL)
    style.paddingLeft = paddingL
  if (paddingR)
    style.paddingRight = paddingR
  if ( paddingT)
    style.paddingTop = paddingT
  if (paddingB)
    style.paddingBottom = paddingB
  if (padding)
    style.padding= props.padding


  if (marginL)
    style.marginLeft = marginL
  if (marginR)
    style.marginRight = marginR
  if ( marginT)
    style.marginTop = marginT
  if (marginB)
    style.marginBottom = marginB
  if (margin)
    style.margin= props.margin

  if (alignSelf)
    style.alignSelf= alignSelf

  if (height)
    style.height= height

		
  const useStyles = makeStyles(() => ({
    FGrid: {
      ...style,
    }
  }))    
    
  const classes = useStyles()
  return (
    <Grid {...rest} className={classNames(props.className, classes.FGrid)} />
  )
}

export default FGrid

FGrid.propTypes = {
  marginL: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  marginR: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  marginB: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  marginT: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  margin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  paddingB: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  paddingT: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  paddingL: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  paddingR: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  alignSelf: PropTypes.string,
  className: PropTypes.string
}