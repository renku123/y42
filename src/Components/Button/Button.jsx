import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

let classNames = require('classnames')

function Button(props) {
  let {  type, title, style,  } = props

  const useStyles = makeStyles((theme) => ({
    ButtonRoot: {
      padding: '9px 27px',
      borderRadius: '5px',
      border: '1px solid #E0E0E0',
      borderColor: '#E0E0E0',
      borderWidth: 1,
      borderStyle: 'solid',
      fontSize: '16px',
      color: '#969696',
      outline: 'none',
      backgroundColor: '#ffffff',
      cursor: 'pointer',
      ...style
    },
    primary: {
      border: '0px',
      backgroundColor: '#6FD8B2',
      color: '#0D2B4A',
      lineHeight: '19.54px',
      padding: '15px 46px',
      fontWeight: 700
    },
  }))

  const classes = useStyles()
  return (
    <button  className={classNames(classes.ButtonRoot, classes[type])}>
      {title}
    </button>
	
  )
}

export default Button

Button.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
}