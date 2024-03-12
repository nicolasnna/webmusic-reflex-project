/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { ArrowLeftToLineIcon as LucideArrowLeftToLineIcon, ArrowRightToLineIcon as LucideArrowRightToLineIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Avatar as RadixThemesAvatar, Button as RadixThemesButton, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import { Box } from "@chakra-ui/react"
import NextLink from "next/link"
import NextHead from "next/head"



export function Fragment_7b7eebc699f74cbb20d10bd8f81ec7ae () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectErrors.length >= 2) ? (
  <Fragment>
  <RadixThemesDialog.Root css={{"zIndex": 9999}} open={connectErrors.length >= 2}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`} css={{"fontSize": "80%", "color": "#1b1c4b"}}>
  {`Cannot connect to server: `}
  {(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Fragment_1951457ffdfa9972621b7e3900e6ed90 () {
  const state__state_components = useContext(StateContexts.state__state_components)


  return (
    <Fragment>
  {isTrue(state__state_components.extend_sidebar) ? (
  <Fragment>
  <LucideArrowLeftToLineIcon css={{"color": "var(--current-color)", "width": "3em", "heihgt": "auto", "strokeWidth": "2.5"}}/>
</Fragment>
) : (
  <Fragment>
  <LucideArrowRightToLineIcon css={{"color": "var(--current-color)", "width": "3em", "heihgt": "auto", "strokeWidth": "2.5"}}/>
</Fragment>
)}
</Fragment>
  )
}

export function Link_38ae1c5dff0d3e42eddfe5c51028966a () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "max-content"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "max-content", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "padding": "0.4em", "backgroundColor": "#373de1", "border": "1px solid #c8d7fd", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  <img css={{"width": "2.5em", "height": "auto"}} src={`/logo-spotify.ico`}/>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Button_ef1f5be29ad91e4fe886874f258cfc5d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_9454e5c339d1838425daf0a7e41cb849 = useCallback((_e) => addEvents([Event("state.state_components.change_sidebar", {})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesButton css={{"backgroundColor": "#373de1", "border": "1px solid #c8d7fd", "color": "#eef4ff", "padding": "0.4em", "width": "max-content", "heihgt": "max-content", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}} onClick={on_click_9454e5c339d1838425daf0a7e41cb849}>
  <Fragment_1951457ffdfa9972621b7e3900e6ed90/>
</RadixThemesButton>
  )
}

export function Link_946febab9167efbee47da7ba55649224 () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "max-content", "heihgt": "100%", "marginInlineStart": "0.5em", "marginInlineEnd": "0.5em"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesFlex align={`start`} css={{"marginBottom": "0.5em", "alignItems": "center"}} direction={`column`} gap={`2`}>
  <RadixThemesAvatar css={{"width": "2.5em", "height": "auto"}} src={`/auriculares.ico`}/>
</RadixThemesFlex>
  <Box sx={{"marginTop": "2em", "marginBottom": "2em", "display": ["none", "block", "block", "block"]}}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Fragment_966c0378eb9d65bdfb5286644be9b831 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const state = useContext(StateContexts.state)


  return (
    <Fragment>
  {isTrue(((!state.is_hydrated) || (connectErrors.length > 0))) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "30px", "right": "30px", "animation": `${pulse} 1s infinite`}} size={32}>
  {`wifi_off`}
</LucideWifiOffIcon>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Fragment_3169a84610b7c2e6b326ac8b5e52dd3a () {
  const state__state_components = useContext(StateContexts.state__state_components)


  return (
    <Fragment>
  {isTrue(state__state_components.extend_sidebar) ? (
  <Fragment>
  <RadixThemesFlex align={`start`} css={{"minHeight": "100vh", "height": "100%", "maxHeight": "max-content", "width": "100%", "left": "0px", "zIndex": "5", "paddingInlineStart": "0", "paddingInlineEnd": "0", "paddingTop": "1em", "paddingBottom": "1em", "backgroundColor": "#373de1", "transition": "width 2s", "alignItems": "center"}} direction={`column`} gap={`2`}>
  <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center"}} direction={`column`} gap={`2`}>
  <RadixThemesAvatar css={{"width": "4em", "height": "4em"}} src={`/auriculares.ico`}/>
  <RadixThemesHeading css={{"fontSize": "120%", "marginBottom": "1em", "color": "#eef4ff", "textShadow": "2px 2px 3px black", "textAlign": "center"}}>
  {`Descarga Música`}
</RadixThemesHeading>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  <RadixThemesFlex align={`start`} css={{"alignItems": "left", "width": "100%", "paddingInlineStart": "1em", "paddingInlineEnd": "1em"}} direction={`column`} gap={`3`}>
  <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/yt_download`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "padding": "0.4em", "backgroundColor": "#373de1", "border": "1px solid #c8d7fd", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center"}} direction={`row`} gap={`2`}>
  <img css={{"width": "100%", "maxWidth": "2.5em", "height": "auto"}} src={`/logo-yt.ico`}/>
  <RadixThemesText as={`p`} css={{"fontSize": "120%", "color": "#eef4ff"}}>
  {`Descargar desde Youtube`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "padding": "0.4em", "backgroundColor": "#373de1", "border": "1px solid #c8d7fd", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  {`segunda opcion`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "padding": "0.4em", "backgroundColor": "#373de1", "border": "1px solid #c8d7fd", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  {`tercera opcion`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "padding": "0.4em", "backgroundColor": "#373de1", "border": "1px solid #c8d7fd", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  {`cuarta opcion`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment>
  <RadixThemesFlex align={`start`} css={{"align": "center", "height": "100%", "maxHeight": "max-content", "paddingTop": "0.4em", "paddingBottom": "0.4em", "width": "100%", "backgroundColor": "#373de1", "zIndex": "5", "alignItems": "center"}} direction={`column`} gap={`2`}>
  <RadixThemesLink asChild={true} css={{"width": "max-content", "heihgt": "100%", "marginInlineStart": "0.5em", "marginInlineEnd": "0.5em"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesFlex align={`start`} css={{"marginBottom": "0.5em", "alignItems": "center"}} direction={`column`} gap={`2`}>
  <RadixThemesAvatar css={{"width": "2.5em", "height": "auto"}} src={`/auriculares.ico`}/>
</RadixThemesFlex>
  <Box sx={{"marginTop": "2em", "marginBottom": "2em", "display": ["none", "block", "block", "block"]}}/>
</NextLink>
</RadixThemesLink>
  <Box sx={{"heihgt": "100%", "gap": "2.5em", "display": ["block", "none", "none", "none"]}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center", "width": "max-content", "paddingInlineStart": "0.4em", "paddingInlineEnd": "0.4em"}} direction={`row`} gap={`3`}>
  <RadixThemesLink asChild={true} css={{"width": "max-content"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/yt_download`} passHref={true}>
  <RadixThemesButton css={{"width": "max-content", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "padding": "0.4em", "backgroundColor": "#373de1", "border": "1px solid #c8d7fd", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  <img css={{"width": "2.5em", "height": "auto"}} src={`/logo-yt.ico`}/>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"width": "max-content"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "max-content", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "padding": "0.4em", "backgroundColor": "#373de1", "border": "1px solid #c8d7fd", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  <img css={{"width": "2.5em", "height": "auto"}} src={`/logo-spotify.ico`}/>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"width": "max-content"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "max-content", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "padding": "0.4em", "backgroundColor": "#373de1", "border": "1px solid #c8d7fd", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  <img css={{"width": "2.5em", "height": "auto"}} src={`/logo-spotify.ico`}/>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"width": "max-content"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "max-content", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "padding": "0.4em", "backgroundColor": "#373de1", "border": "1px solid #c8d7fd", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  <img css={{"width": "2.5em", "height": "auto"}} src={`/logo-yt.ico`}/>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</Box>
  <Box sx={{"height": "100vh", "gap": "1.5em", "display": ["none", "block", "block", "block"]}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center", "width": "max-content", "paddingInlineStart": "0.4em", "paddingInlineEnd": "0.4em"}} direction={`column`} gap={`3`}>
  <RadixThemesLink asChild={true} css={{"width": "max-content"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/yt_download`} passHref={true}>
  <RadixThemesButton css={{"width": "max-content", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "padding": "0.4em", "backgroundColor": "#373de1", "border": "1px solid #c8d7fd", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  <img css={{"width": "2.5em", "height": "auto"}} src={`/logo-yt.ico`}/>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"width": "max-content"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "max-content", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "padding": "0.4em", "backgroundColor": "#373de1", "border": "1px solid #c8d7fd", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  <img css={{"width": "2.5em", "height": "auto"}} src={`/logo-spotify.ico`}/>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"width": "max-content"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "max-content", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "padding": "0.4em", "backgroundColor": "#373de1", "border": "1px solid #c8d7fd", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  <img css={{"width": "2.5em", "height": "auto"}} src={`/logo-spotify.ico`}/>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"width": "max-content"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "max-content", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "padding": "0.4em", "backgroundColor": "#373de1", "border": "1px solid #c8d7fd", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  <img css={{"width": "2.5em", "height": "auto"}} src={`/logo-yt.ico`}/>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</Box>
</RadixThemesFlex>
</Fragment>
)}
</Fragment>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Link_c91d25ec631848602f41236b1ec41797 () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "max-content"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "max-content", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "padding": "0.4em", "backgroundColor": "#373de1", "border": "1px solid #c8d7fd", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  <img css={{"width": "2.5em", "height": "auto"}} src={`/logo-yt.ico`}/>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_087eedddf3ae635ba69b653183df6f92 () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "max-content"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/yt_download`} passHref={true}>
  <RadixThemesButton css={{"width": "max-content", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "padding": "0.4em", "backgroundColor": "#373de1", "border": "1px solid #c8d7fd", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  <img css={{"width": "2.5em", "height": "auto"}} src={`/logo-yt.ico`}/>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Grid_bd155fc635c9ca9f3b7710e93a3dd7a9 () {
  const state__state_components = useContext(StateContexts.state__state_components)


  return (
    <RadixThemesGrid css={{"gridTemplateColumns": state__state_components.grid_sidebar, "width": "100%", "height": "100%"}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center"}} direction={`column`} gap={`2`}>
  <Fragment_3169a84610b7c2e6b326ac8b5e52dd3a/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"backgroundColor": "#c8d7fd", "width": "100%", "alignItems": "center"}} direction={`column`} gap={`0`}>
  <Box sx={{"width": "100%", "display": ["block", "none", "none", "none"]}}>
  <RadixThemesFlex align={`start`} css={{"align": "center", "height": "100%", "maxHeight": "max-content", "paddingTop": "0.4em", "paddingBottom": "0.4em", "width": "100%", "backgroundColor": "#373de1", "zIndex": "5", "alignItems": "center"}} direction={`row`} gap={`2`}>
  <Link_946febab9167efbee47da7ba55649224/>
  <Box sx={{"heihgt": "100%", "gap": "2.5em", "display": ["block", "none", "none", "none"]}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center", "width": "max-content", "paddingInlineStart": "0.4em", "paddingInlineEnd": "0.4em"}} direction={`row`} gap={`3`}>
  <Link_087eedddf3ae635ba69b653183df6f92/>
  <Link_38ae1c5dff0d3e42eddfe5c51028966a/>
  <Link_38ae1c5dff0d3e42eddfe5c51028966a/>
  <Link_c91d25ec631848602f41236b1ec41797/>
</RadixThemesFlex>
</Box>
  <Box sx={{"height": "100vh", "gap": "1.5em", "display": ["none", "block", "block", "block"]}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center", "width": "max-content", "paddingInlineStart": "0.4em", "paddingInlineEnd": "0.4em"}} direction={`column`} gap={`3`}>
  <Link_087eedddf3ae635ba69b653183df6f92/>
  <Link_38ae1c5dff0d3e42eddfe5c51028966a/>
  <Link_38ae1c5dff0d3e42eddfe5c51028966a/>
  <Link_c91d25ec631848602f41236b1ec41797/>
</RadixThemesFlex>
</Box>
</RadixThemesFlex>
</Box>
  <RadixThemesFlex align={`start`} css={{"textAlign": "center", "width": "100%", "backgroundColor": "#6474f0", "marginBottom": "1em", "paddingInlineStart": "0.7em", "paddingInlineEnd": "0.7em", "paddingTop": "0.7em", "paddingBottom": "0.7em", "alignItems": "center"}} direction={`row`} gap={`2`}>
  <Button_ef1f5be29ad91e4fe886874f258cfc5d/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesHeading css={{"fontSize": "150%", "color": "#eef4ff", "textShadow": "4px 4px 4px black", "marginLeft": "2em", "textAlign": "center"}}>
  {`Web Music`}
</RadixThemesHeading>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesHeading css={{"fontSize": "150%", "color": "#eef4ff", "textShadow": "4px 4px 4px black", "textAlign": "center"}}>
  {`Nicolás NA`}
</RadixThemesHeading>
</RadixThemesFlex>
  <RadixThemesHeading css={{"paddingTop": "0.4em", "paddingBottom": "0.4em", "paddingInlineStart": "1em", "paddingInlineEnd": "1em", "marginBottom": "1em", "fontSize": "200%", "color": "#1b1c4b", "textShadow": "4px 4px 4px #8298f7", "textAlign": "center"}}>
  {`Descarga y obtén información de la música que te gusta`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} css={{"fontSize": "120%", "textAlign": "center", "marginBottom": "1em", "color": "#1b1c4b"}}>
  {`Primero añade el enlace de la canción`}
</RadixThemesText>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "height": "100%", "backgroundColor": "#6474f0", "paddingTop": "1.5em", "paddingBottom": "0.4em", "alignItems": "center"}} direction={`column`} gap={`0`}>
  <RadixThemesAvatar css={{"width": "3em", "height": "3em", "border": "3px solid #8298f7", "padding": "0.2em", "background": "#c8d7fd"}} src={`/auriculares.ico`}/>
  <RadixThemesText align={`center`} as={`p`} css={{"marginTop": "0.6em", "color": "#eef4ff", "fontSize": "80%"}}>
  {`Esta página ha sido desarrollada por fines educativos.`}
</RadixThemesText>
  <RadixThemesText align={`center`} as={`p`} css={{"color": "#eef4ff", "fontSize": "80%"}}>
  {`Nicolás Norambena Alarcón. 2024`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesGrid>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <div css={{"position": "fixed", "width": "100vw", "height": "0"}}>
  <Fragment_966c0378eb9d65bdfb5286644be9b831/>
</div>
  <Fragment_7b7eebc699f74cbb20d10bd8f81ec7ae/>
</Fragment>
  <Fragment>
  <Box sx={{"display": ["none", "block", "block", "block"]}}>
  <Grid_bd155fc635c9ca9f3b7710e93a3dd7a9/>
</Box>
  <Box sx={{"display": ["block", "none", "none", "none"]}}>
  <RadixThemesFlex align={`start`} css={{"backgroundColor": "#c8d7fd", "width": "100%", "alignItems": "center"}} direction={`column`} gap={`0`}>
  <Box sx={{"width": "100%", "display": ["block", "none", "none", "none"]}}>
  <RadixThemesFlex align={`start`} css={{"align": "center", "height": "100%", "maxHeight": "max-content", "paddingTop": "0.4em", "paddingBottom": "0.4em", "width": "100%", "backgroundColor": "#373de1", "zIndex": "5", "alignItems": "center"}} direction={`row`} gap={`2`}>
  <Link_946febab9167efbee47da7ba55649224/>
  <Box sx={{"heihgt": "100%", "gap": "2.5em", "display": ["block", "none", "none", "none"]}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center", "width": "max-content", "paddingInlineStart": "0.4em", "paddingInlineEnd": "0.4em"}} direction={`row`} gap={`3`}>
  <Link_087eedddf3ae635ba69b653183df6f92/>
  <Link_38ae1c5dff0d3e42eddfe5c51028966a/>
  <Link_38ae1c5dff0d3e42eddfe5c51028966a/>
  <Link_c91d25ec631848602f41236b1ec41797/>
</RadixThemesFlex>
</Box>
  <Box sx={{"height": "100vh", "gap": "1.5em", "display": ["none", "block", "block", "block"]}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center", "width": "max-content", "paddingInlineStart": "0.4em", "paddingInlineEnd": "0.4em"}} direction={`column`} gap={`3`}>
  <Link_087eedddf3ae635ba69b653183df6f92/>
  <Link_38ae1c5dff0d3e42eddfe5c51028966a/>
  <Link_38ae1c5dff0d3e42eddfe5c51028966a/>
  <Link_c91d25ec631848602f41236b1ec41797/>
</RadixThemesFlex>
</Box>
</RadixThemesFlex>
</Box>
  <RadixThemesFlex align={`start`} css={{"textAlign": "center", "width": "100%", "backgroundColor": "#6474f0", "marginBottom": "1em", "paddingInlineStart": "0.7em", "paddingInlineEnd": "0.7em", "paddingTop": "0.7em", "paddingBottom": "0.7em", "alignItems": "center"}} direction={`row`} gap={`2`}>
  <Button_ef1f5be29ad91e4fe886874f258cfc5d/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesHeading css={{"fontSize": "150%", "color": "#eef4ff", "textShadow": "4px 4px 4px black", "marginLeft": "2em", "textAlign": "center"}}>
  {`Web Music`}
</RadixThemesHeading>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesHeading css={{"fontSize": "150%", "color": "#eef4ff", "textShadow": "4px 4px 4px black", "textAlign": "center"}}>
  {`Nicolás NA`}
</RadixThemesHeading>
</RadixThemesFlex>
  <RadixThemesHeading css={{"paddingTop": "0.4em", "paddingBottom": "0.4em", "paddingInlineStart": "1em", "paddingInlineEnd": "1em", "marginBottom": "1em", "fontSize": "200%", "color": "#1b1c4b", "textShadow": "4px 4px 4px #8298f7", "textAlign": "center"}}>
  {`Descarga y obtén información de la música que te gusta`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} css={{"fontSize": "120%", "textAlign": "center", "marginBottom": "1em", "color": "#1b1c4b"}}>
  {`Primero añade el enlace de la canción`}
</RadixThemesText>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "height": "100%", "backgroundColor": "#6474f0", "paddingTop": "1.5em", "paddingBottom": "0.4em", "alignItems": "center"}} direction={`column`} gap={`0`}>
  <RadixThemesAvatar css={{"width": "3em", "height": "3em", "border": "3px solid #8298f7", "padding": "0.2em", "background": "#c8d7fd"}} src={`/auriculares.ico`}/>
  <RadixThemesText align={`center`} as={`p`} css={{"marginTop": "0.6em", "color": "#eef4ff", "fontSize": "80%"}}>
  {`Esta página ha sido desarrollada por fines educativos.`}
</RadixThemesText>
  <RadixThemesText align={`center`} as={`p`} css={{"color": "#eef4ff", "fontSize": "80%"}}>
  {`Nicolás Norambena Alarcón. 2024`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
</Box>
</Fragment>
  <NextHead>
  <title>
  {`WebMusic`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
