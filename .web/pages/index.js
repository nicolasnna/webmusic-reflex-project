/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { ArrowLeftToLineIcon as LucideArrowLeftToLineIcon, ArrowRightToLineIcon as LucideArrowRightToLineIcon, SearchIcon as LucideSearchIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Avatar as RadixThemesAvatar, Button as RadixThemesButton, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import env from "/env.json"
import NextLink from "next/link"
import { Box } from "@chakra-ui/react"
import NextHead from "next/head"



export function Grid_94d30ab057349055920e0b8a7109b13d () {
  const state__state_components = useContext(StateContexts.state__state_components)


  return (
    <RadixThemesGrid columns={`2`} css={{"gridTemplateColumns": state__state_components.grid_sidebar, "width": "100%", "height": "100%"}} rows={`1`}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center"}} direction={`column`} gap={`2`}>
  <Fragment_64d99519779f86c90344f16c44a1b1ac/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"backgroundColor": "#c8d7fd", "width": "100%", "alignItems": "center"}} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"textAlign": "center", "width": "100%", "backgroundColor": "#6474f0", "marginBottom": "1em", "paddingInlineStart": "0.7em", "paddingInlineEnd": "0.7em", "paddingTop": "0.7em", "paddingBottom": "0.7em", "alignItems": "center"}} direction={`row`} gap={`2`}>
  <Button_53d37e72acfdeee2fef7aa7acebb556f/>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesHeading css={{"fontSize": "150%", "color": "#eef4ff", "textShadow": "4px 4px 4px black", "textAlign": "center"}}>
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
  <RadixThemesFlex align={`start`} css={{"marginBottom": "1em", "alignItems": "center"}} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontSize": "120%", "textAlign": "center", "marginBottom": "1em", "color": "#1b1c4b"}}>
  {`Primero añade el enlace de la canción`}
</RadixThemesText>
  <Box sx={{"display": ["none", "block", "block", "block"]}}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "alignItems": "center"}} direction={`row`} gap={`2`}>
  <Textfield__input_4ab82d54ac6dbb0adaeefb29ac1b7e4d/>
  <Button_3e7b718634d6d31641fdd2e5cedb5f8f/>
</RadixThemesFlex>
</Box>
  <Box sx={{"display": ["block", "none", "none", "none"]}}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "alignItems": "center"}} direction={`column`} gap={`2`}>
  <Textfield__input_4ab82d54ac6dbb0adaeefb29ac1b7e4d/>
  <Button_3e7b718634d6d31641fdd2e5cedb5f8f/>
</RadixThemesFlex>
</Box>
</RadixThemesFlex>
  <Button_84ac0e614af5b0bea354c7d6b55e84b5/>
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

export function Fragment_e9a05c105aa9215aeba52aeec8fe2e76 () {
  const state = useContext(StateContexts.state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


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

export function Button_3e7b718634d6d31641fdd2e5cedb5f8f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_829758d0490a7fa8206219b3e88b9eb1 = useCallback((_e) => addEvents([Event("state.manage_youtube_api.get_id_from_url_and_redirect", {})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesButton css={{"width": "6.5em", "height": "2.em", "borderRadius": "0.7em", "fontSize": "80%", "padding": "0.4em", "backgroundColor": "#373de1", "border": "1px solid #c8d7fd", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}} onClick={on_click_829758d0490a7fa8206219b3e88b9eb1}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "height": "100%", "alignItems": "center"}} direction={`row`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontSize": "100%", "color": "#eef4ff"}}>
  {`Buscar`}
</RadixThemesText>
  <LucideSearchIcon css={{"color": "var(--current-color)", "width": "2.5em", "heihgt": "auto", "strokeWidth": "2"}}/>
</RadixThemesFlex>
</RadixThemesButton>
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


export function Textfield__input_4ab82d54ac6dbb0adaeefb29ac1b7e4d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_blur_ce8b2331a880fc9468bf3bb159d8c0fa = useCallback((_e0) => addEvents([Event("state.manage_youtube_api.set_url", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <RadixThemesTextField.Input css={{"width": "20em", "colorScheme": "whiteAlpha"}} onBlur={on_blur_ce8b2331a880fc9468bf3bb159d8c0fa} placeholder={`Pega el enlace aquí`} variant={`classic`}/>
  )
}

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

export function Fragment_64d99519779f86c90344f16c44a1b1ac () {
  const state__state_components = useContext(StateContexts.state__state_components)


  return (
    <Fragment>
  {isTrue(state__state_components.extend_sidebar) ? (
  <Fragment>
  <RadixThemesFlex align={`start`} css={{"position": "sticky", "minHeight": "100vh", "height": "100%", "maxHeight": "max-content", "width": "100%", "left": "0px", "zIndex": "5", "paddingInlineStart": "0", "paddingInlineEnd": "0", "paddingTop": "1em", "paddingBottom": "1em", "backgroundColor": "#373de1", "transition": "width 2s", "alignItems": "center"}} direction={`column`} gap={`2`}>
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
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "padding": "0.4em", "backgroundColor": "#373de1", "border": "1px solid #c8d7fd", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center"}} direction={`row`} gap={`2`}>
  <img css={{"width": "2.5em", "height": "auto"}} src={`/logo-yt.ico`}/>
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
  <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "padding": "0.4em", "backgroundColor": "#373de1", "border": "1px solid #c8d7fd", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  {`quinta opcion`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment>
  <RadixThemesFlex align={`start`} css={{"position": "sticky", "minHeight": "100vh", "height": "100%", "maxHeight": "max-content", "width": "100%", "left": "0px", "zIndex": "5", "paddingInlineStart": "0", "paddingInlineEnd": "0", "paddingTop": "1em", "paddingBottom": "1em", "backgroundColor": "#373de1", "transition": "width 2s", "alignItems": "center"}} direction={`column`} gap={`2`}>
  <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesFlex align={`start`} css={{"marginBottom": "2em", "alignItems": "center"}} direction={`column`} gap={`2`}>
  <RadixThemesAvatar css={{"width": "3em", "height": "3em"}} src={`/auriculares.ico`}/>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  <RadixThemesFlex align={`start`} css={{"alignItems": "left", "width": "100%", "paddingInlineStart": "0.4em", "paddingInlineEnd": "0.4em"}} direction={`column`} gap={`3`}>
  <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "padding": "0.4em", "backgroundColor": "#373de1", "border": "1px solid #c8d7fd", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  <img css={{"width": "2.5em", "height": "auto"}} src={`/logo-yt.ico`}/>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "padding": "0.4em", "backgroundColor": "#373de1", "border": "1px solid #c8d7fd", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  <img css={{"width": "2.5em", "height": "auto"}} src={`/logo-spotify.ico`}/>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "padding": "0.4em", "backgroundColor": "#373de1", "border": "1px solid #c8d7fd", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  <img css={{"width": "2.5em", "height": "auto"}} src={`/logo-spotify.ico`}/>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "padding": "0.4em", "backgroundColor": "#373de1", "border": "1px solid #c8d7fd", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  <img css={{"width": "2.5em", "height": "auto"}} src={`/logo-yt.ico`}/>
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
)}
</Fragment>
  )
}

export function Button_84ac0e614af5b0bea354c7d6b55e84b5 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_218768cbadcb1b73d2e7ee5bd46262b0 = useCallback((_e) => addEvents([Event("_console", {message:`jp\u00f1a`})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesButton onClick={on_click_218768cbadcb1b73d2e7ee5bd46262b0}>
  {`log`}
</RadixThemesButton>
  )
}

export function Fragment_6f0c35f34c8f73a29cf4d83d3eb83136 () {
  const state__state_components = useContext(StateContexts.state__state_components)


  return (
    <Fragment>
  {isTrue(state__state_components.extend_sidebar) ? (
  <Fragment>
  <LucideArrowLeftToLineIcon css={{"color": "var(--current-color)", "width": "2em", "heihgt": "auto", "strokeWidth": "2.5"}}/>
</Fragment>
) : (
  <Fragment>
  <LucideArrowRightToLineIcon css={{"color": "var(--current-color)", "width": "2em", "heihgt": "auto", "strokeWidth": "2.5"}}/>
</Fragment>
)}
</Fragment>
  )
}

export function Button_53d37e72acfdeee2fef7aa7acebb556f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_9454e5c339d1838425daf0a7e41cb849 = useCallback((_e) => addEvents([Event("state.state_components.change_sidebar", {})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesButton css={{"backgroundColor": "#373de1", "border": "1px solid #c8d7fd", "color": "#eef4ff", "padding": "0.4em", "width": "max-content", "heihgt": "max-content", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}} onClick={on_click_9454e5c339d1838425daf0a7e41cb849}>
  <Fragment_6f0c35f34c8f73a29cf4d83d3eb83136/>
</RadixThemesButton>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <div css={{"position": "fixed", "width": "100vw", "height": "0"}}>
  <Fragment_e9a05c105aa9215aeba52aeec8fe2e76/>
</div>
  <Fragment_7b7eebc699f74cbb20d10bd8f81ec7ae/>
</Fragment>
  <Grid_94d30ab057349055920e0b8a7109b13d/>
  <NextHead>
  <title>
  {`WebMusic`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`/auriculares.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
