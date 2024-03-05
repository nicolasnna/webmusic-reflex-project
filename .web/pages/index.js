/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { Avatar as RadixThemesAvatar, Button as RadixThemesButton, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Grid as RadixThemesGrid, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import env from "/env.json"
import NextLink from "next/link"
import { SearchIcon as LucideSearchIcon } from "lucide-react"
import NextHead from "next/head"



export function Button_6b3b1a9348d6e51907d8eba71d6483ea () {
  const state__youtube_mp3_downloader = useContext(StateContexts.state__youtube_mp3_downloader)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_d750c6c4964e047c190ab82700dd59b1 = useCallback((_e) => addEvents([Event("_console", {message:state__youtube_mp3_downloader.querystring})], (_e), {}), [addEvents, Event, state__youtube_mp3_downloader])

  return (
    <RadixThemesButton onClick={on_click_d750c6c4964e047c190ab82700dd59b1}>
  {`log`}
</RadixThemesButton>
  )
}

export function Link_11bb0d0964348e4503a1c9d9e7da2730 () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "paddingInlineStart": "0.7em", "paddingInlineEnd": "0.7em", "paddingTop": "0.7em", "paddingBottom": "0.7em", "backgroundColor": "#373de1", "border": "2px solid #6474f0", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "transitionDuration": "0.2s", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  {`cuarta opcion`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Textfield__input_9c66ebe82c62e191543f5930ffe0a3ed () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_blur_788efdd763e7261c332b75fdfbbcebdb = useCallback((_e0) => addEvents([Event("state.youtube_mp3_downloader.set_id", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <RadixThemesTextField.Input css={{"width": "100%", "colorScheme": "whiteAlpha"}} onBlur={on_blur_788efdd763e7261c332b75fdfbbcebdb} placeholder={`Pega el enlace aquí`} variant={`classic`}/>
  )
}

export function Button_5604e7df1c46bafb0e23e03df29561a9 () {
  const state__youtube_mp3_downloader = useContext(StateContexts.state__youtube_mp3_downloader)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_e160178a749828e1180fd02ec85bec99 = useCallback((_e) => addEvents([Event("_console", {message:state__youtube_mp3_downloader.getDataYoutubeMp3})], (_e), {}), [addEvents, Event, state__youtube_mp3_downloader])

  return (
    <RadixThemesButton css={{"width": "6.5em", "height": "2.em", "borderRadius": "0.7em", "fontSize": "80%", "paddingInlineStart": "0.7em", "paddingInlineEnd": "0.7em", "paddingTop": "0.7em", "paddingBottom": "0.7em", "backgroundColor": "#373de1", "border": "2px solid #6474f0", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "transitionDuration": "0.2s", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}} onClick={on_click_e160178a749828e1180fd02ec85bec99}>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "height": "100%", "alignItems": "center"}} direction={`row`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontSize": "100%", "color": "#eef4ff"}}>
  {`Buscar`}
</RadixThemesText>
  <LucideSearchIcon css={{"color": "var(--current-color)", "width": "2em", "heihgt": "2em"}}/>
</RadixThemesFlex>
</RadixThemesButton>
  )
}

export function Link_3b6d86904ac84d299b26a6da7390cf75 () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "paddingInlineStart": "0.7em", "paddingInlineEnd": "0.7em", "paddingTop": "0.7em", "paddingBottom": "0.7em", "backgroundColor": "#373de1", "border": "2px solid #6474f0", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "transitionDuration": "0.2s", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  {`quinta opcion`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_d5f6cf91ad3bd207142d015ee924e4a3 () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "paddingInlineStart": "0.7em", "paddingInlineEnd": "0.7em", "paddingTop": "0.7em", "paddingBottom": "0.7em", "backgroundColor": "#373de1", "border": "2px solid #6474f0", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "transitionDuration": "0.2s", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  {`segunda opcion`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_bf7d6ff4c997c855f3d8dc91d1475544 () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "paddingInlineStart": "0.7em", "paddingInlineEnd": "0.7em", "paddingTop": "0.7em", "paddingBottom": "0.7em", "backgroundColor": "#373de1", "border": "2px solid #6474f0", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "transitionDuration": "0.2s", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  {`primera opcion`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_92f8d8511241f0d71427b2f4c6159d5f () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "borderRadius": "0.7em", "fontSize": "80%", "paddingInlineStart": "0.7em", "paddingInlineEnd": "0.7em", "paddingTop": "0.7em", "paddingBottom": "0.7em", "backgroundColor": "#373de1", "border": "2px solid #6474f0", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "transitionDuration": "0.2s", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  {`tercera opcion`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Fragment_7c51549f6652ffceffab869c0602a73d () {
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <RadixThemesDialog.Root open={connectError !== null}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`} css={{"fontSize": "80%", "color": "#1b1c4b"}}>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
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

export default function Component() {

  return (
    <Fragment>
  <Fragment_7c51549f6652ffceffab869c0602a73d/>
  <RadixThemesGrid columns={`2`} css={{"gridTemplateColumns": "25% 75%", "width": "100%", "height": "100%"}} rows={`1`}>
  <RadixThemesFlex align={`start`} css={{"position": "sticky", "height": "100vh", "width": "100%", "left": "0px", "zIndex": "5", "paddingInlineStart": "0", "paddingInlineEnd": "0", "paddingTop": "1em", "paddingBottom": "1em", "backgroundColor": "#373de1", "borderRight": "0.4em solid #6474f0", "alignItems": "center"}} direction={`column`} gap={`2`}>
  <RadixThemesAvatar css={{"width": "4em", "height": "4em"}} src={`/auriculares.ico`}/>
  <RadixThemesHeading css={{"fontSize": "120%", "marginBottom": "1em", "color": "#eef4ff", "textShadow": "2px 2px 3px black", "textAlign": "center"}}>
  {`Descarga Música`}
</RadixThemesHeading>
  <RadixThemesFlex align={`start`} css={{"alignItems": "left", "width": "100%", "paddingInlineStart": "1em", "paddingInlineEnd": "1em"}} direction={`column`} gap={`3`}>
  <Link_bf7d6ff4c997c855f3d8dc91d1475544/>
  <Link_d5f6cf91ad3bd207142d015ee924e4a3/>
  <Link_92f8d8511241f0d71427b2f4c6159d5f/>
  <Link_11bb0d0964348e4503a1c9d9e7da2730/>
  <Link_3b6d86904ac84d299b26a6da7390cf75/>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"backgroundColor": "#c8d7fd", "alignItems": "center"}} direction={`column`} gap={`2`}>
  <RadixThemesHeading css={{"paddingTop": "0.4em", "paddingBottom": "0.4em", "marginBottom": "0px", "fontSize": "200%", "color": "#1b1c4b", "textShadow": "4px 4px 4px #8298f7", "textAlign": "center"}}>
  {`Descarga y obtén información de la música que te gusta`}
</RadixThemesHeading>
  <RadixThemesFlex align={`start`} css={{"alignItems": "center"}} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"fontSize": "120%", "color": "#1b1c4b"}}>
  {`Primero añade el enlace de la canción`}
</RadixThemesText>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "alignItems": "center"}} direction={`row`} gap={`2`}>
  <Textfield__input_9c66ebe82c62e191543f5930ffe0a3ed/>
  <Button_5604e7df1c46bafb0e23e03df29561a9/>
</RadixThemesFlex>
</RadixThemesFlex>
  <Button_6b3b1a9348d6e51907d8eba71d6483ea/>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "height": "100%", "backgroundColor": "#6474f0", "paddingTop": "0.4em", "paddingBottom": "0.4em", "alignItems": "center"}} direction={`column`} gap={`0`}>
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
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
