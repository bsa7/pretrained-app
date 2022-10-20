import React, { Fragment, ReactElement, useState } from 'react'
import {
  AppBar,
  Avatar,
  Button,
  IconButton,
} from '@react-native-material/core'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { PrimeNumbersPage } from './components/pages/primeNumbersPage'

type IconProps = {
  color: string
  size: number
}

type IconButtonProps = IconProps
type ButtonProps = IconProps

const nameIcon = (props: IconProps) => <Icon {...props} name="menu"/>
const iconButton = (props: IconButtonProps) => {
  return (
    <IconButton {...props} icon={nameIcon}/>
  )
}

type LayoutProps = {
  title: string
  children: ReactElement
}

export const Layout = (layoutProps: LayoutProps) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const toggleLoggedIn = () => setLoggedIn(!loggedIn)
  const { title } = layoutProps
  const loggedButton = (props: IconButtonProps) => {
    return (
      <IconButton
        icon={<Avatar label="Yaman KATBY" size={28}/>}
        onPress={toggleLoggedIn}
        {...props}
      />
    )
  }

  const logInButton = (props: ButtonProps) => {
    return (
      <Button
        variant="text"
        title="Login"
        compact
        style={{ marginEnd: 4 }}
        onPress={toggleLoggedIn}
        {...props}
      />
    )
  }

  return (
    <Fragment key="some">
      <AppBar
        title={title}
        leading={iconButton}
        trailing={loggedIn ? loggedButton : logInButton}
      />
      <PrimeNumbersPage/>
    </Fragment>
  )
}
