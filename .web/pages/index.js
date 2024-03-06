/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { SearchIcon as LucideSearchIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Avatar as RadixThemesAvatar, Button as RadixThemesButton, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import env from "/env.json"
import NextLink from "next/link"
import NextHead from "next/head"



export function Button_6b3b1a9348d6e51907d8eba71d6483ea () {
  const state__youtube_mp3_downloader = useContext(StateContexts.state__youtube_mp3_downloader)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_d750c6c4964e047c190ab82700dd59b1 = useCallback((_e) => addEvents([Event("_console", {message:state__youtube_mp3_downloader.querystring})], (_e), {}), [addEvents, Event, state__youtube_mp3_downloader])

  return (
    <RadixThemesButton onClick={on_click_d750c6c4964e047c190ab82700dd59b1}>
  {`log`}
</RadixThemesButton>
  )
}

export function Link_930f221fdbd13504382fb74fa43b08ba () {


  return (
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

export function Link_fd2ffc4e5e1bcd42615180d5336fd2cc () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "paddingInlineStart": "0.7em", "paddingInlineEnd": "0.7em", "paddingTop": "0.7em", "paddingBottom": "0.7em", "backgroundColor": "#373de1", "border": "2px solid #6474f0", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  {`segunda opcion`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_22f122f3f5342e1d63fcdf600036852b () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "paddingInlineStart": "0.7em", "paddingInlineEnd": "0.7em", "paddingTop": "0.7em", "paddingBottom": "0.7em", "backgroundColor": "#373de1", "border": "2px solid #6474f0", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  {`tercera opcion`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Textfield__input_9c66ebe82c62e191543f5930ffe0a3ed () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_blur_788efdd763e7261c332b75fdfbbcebdb = useCallback((_e0) => addEvents([Event("state.youtube_mp3_downloader.set_id", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <RadixThemesTextField.Input css={{"width": "100%", "colorScheme": "whiteAlpha"}} onBlur={on_blur_788efdd763e7261c332b75fdfbbcebdb} placeholder={`Pega el enlace aquí`} variant={`classic`}/>
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

export function Link_ec117e2928eeb6129ae78030dbd9189f () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "paddingInlineStart": "0.7em", "paddingInlineEnd": "0.7em", "paddingTop": "0.7em", "paddingBottom": "0.7em", "backgroundColor": "#373de1", "border": "2px solid #6474f0", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  {`quinta opcion`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Button_cafe9ae7b105e29c0f93bf4d014ae3c7 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_5a0e0789f60aedb05dde05c8b1a12997 = useCallback((_e) => addEvents([Event("_redirect", {path:`/youtube_info_page`,external:false})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesButton css={{"width": "6.5em", "height": "2.em", "borderRadius": "0.7em", "fontSize": "80%", "paddingInlineStart": "0.7em", "paddingInlineEnd": "0.7em", "paddingTop": "0.7em", "paddingBottom": "0.7em", "backgroundColor": "#373de1", "border": "2px solid #6474f0", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}} onClick={on_click_5a0e0789f60aedb05dde05c8b1a12997}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "height": "100%", "alignItems": "center"}} direction={`row`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontSize": "100%", "color": "#eef4ff"}}>
  {`Buscar`}
</RadixThemesText>
  <LucideSearchIcon css={{"color": "var(--current-color)", "width": "2em", "heihgt": "2em"}}/>
</RadixThemesFlex>
</RadixThemesButton>
  )
}

export function Link_7b393dd77e002e31452609a5484313f7 () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "paddingInlineStart": "0.7em", "paddingInlineEnd": "0.7em", "paddingTop": "0.7em", "paddingBottom": "0.7em", "backgroundColor": "#373de1", "border": "2px solid #6474f0", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  {`primera opcion`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_9bbc6ce943a15638cdc6b042d079b70d () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "paddingInlineStart": "0.7em", "paddingInlineEnd": "0.7em", "paddingTop": "0.7em", "paddingBottom": "0.7em", "backgroundColor": "#373de1", "border": "2px solid #6474f0", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  {`cuarta opcion`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
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
  <RadixThemesGrid columns={`2`} css={{"gridTemplateColumns": "20% 80%", "width": "100%", "height": "100%"}} rows={`1`}>
  <RadixThemesFlex align={`start`} css={{"position": "sticky", "minHeight": "100vh", "maxHeight": "max-content", "width": "100%", "left": "0px", "zIndex": "5", "paddingInlineStart": "0", "paddingInlineEnd": "0", "paddingTop": "1em", "paddingBottom": "1em", "backgroundColor": "#373de1", "borderRight": "0.4em solid #6474f0", "borderRadius": "0.7em", "transition": "width 2s", "display": "inline", "alignItems": "center"}} direction={`column`} gap={`2`}>
  <Link_930f221fdbd13504382fb74fa43b08ba/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "left", "width": "100%", "paddingInlineStart": "1em", "paddingInlineEnd": "1em"}} direction={`column`} gap={`3`}>
  <Link_7b393dd77e002e31452609a5484313f7/>
  <Link_fd2ffc4e5e1bcd42615180d5336fd2cc/>
  <Link_22f122f3f5342e1d63fcdf600036852b/>
  <Link_9bbc6ce943a15638cdc6b042d079b70d/>
  <Link_ec117e2928eeb6129ae78030dbd9189f/>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"backgroundColor": "#c8d7fd", "width": "100%", "alignItems": "center"}} direction={`column`} gap={`2`}>
  <RadixThemesHeading css={{"paddingTop": "0.4em", "paddingBottom": "0.4em", "marginBottom": "0px", "fontSize": "200%", "color": "#1b1c4b", "textShadow": "4px 4px 4px #8298f7", "textAlign": "center"}}>
  {`Descarga y obtén información de la música que te gusta`}
</RadixThemesHeading>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center"}} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontSize": "120%", "color": "#1b1c4b"}}>
  {`Primero añade el enlace de la canción`}
</RadixThemesText>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "alignItems": "center"}} direction={`row`} gap={`2`}>
  <Textfield__input_9c66ebe82c62e191543f5930ffe0a3ed/>
  <Button_cafe9ae7b105e29c0f93bf4d014ae3c7/>
</RadixThemesFlex>
</RadixThemesFlex>
  <Button_6b3b1a9348d6e51907d8eba71d6483ea/>
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
