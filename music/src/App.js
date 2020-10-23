import React from 'react'
import MainPage from './components/mainpage'
import styled from 'styled-components';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import {Wrapper, Title, textStyle} from '../src/css/mainpage-css'

import ThemePractice from './components/themepractice';

const theme = {backgroundColor:'green'}

const useStyles = makeStyles ((theme) => ({
  root : {
    backgroundColor : 'skyblue',
    color : 'white',
    '& p' : {
      color : 'red',
      '& span' : {
        color : 'yellow'
      }
    }
  },
  propsButton : props => ({
    backgroundColor : props.backgroundColor,
    color : props.color
  }),
  customButton : props => ({
    backgroundColor : props.color === "red" ? 'red' : 'blue',
    padding : '0px 30px',
    boxShadow : props.color === 'red'? '0 0.9px 4px 2px rgba(255,0,0,0.5)' :'0 0.9px 4px 2px rgba(0,0,255,0.5)'
  })
}))

const MyButton = (props) => {
  const {color, ...other} = props;
  const classes = useStyles(props);
  return <Button className = {classes.customButton} {...other}/>
}

const App = () => {
  const props = {backgroundColor : 'red', color : 'white'}
  const classes = useStyles(props);
  return (
    /*<div>
    <Wrapper>
      <Title>this is independent</Title>
      </Wrapper>
      <div style ={textStyle}>
        <div>this is inherit</div>
      </div>

      <div>
      <Button className = {classes.root}>
        this is mui Button
      <p>this is red</p>
      </Button>
      <Button className = {`${classes.propsButton}`}>this is mui props button</Button>
      <MyButton color = "red">red</MyButton>
      <MyButton color = "blue">blue</MyButton>
      </div>
      <ThemeProvider theme = {theme}>
        <ThemePractice/>
      </ThemeProvider>
    </div>*/
    <MuiThemeProvider>
      <MainPage/>
    </MuiThemeProvider>
  )
}

export default App;