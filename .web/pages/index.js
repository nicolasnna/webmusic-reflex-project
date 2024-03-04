/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { EventLoopContext } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { Avatar as RadixThemesAvatar, Button as RadixThemesButton, Container as RadixThemesContainer, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import NextLink from "next/link"
import NextHead from "next/head"



export function Fragment_1762bb90abdb81b879b2a22edbbe01a1 () {
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
  <RadixThemesText as={`p`}>
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

export function Link_8376a1a770901602fd28d5f2d9d0461b () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "borderRadius": "0.7em", "fontSize": "1em", "paddingInlineStart": "0.7em", "paddingInlineEnd": "0.7em", "paddingTop": "0.7em", "paddingBottom": "0.7em", "backgroundColor": "#373de1", "border": "2px solid #6474f0", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "transitionDuration": "0.2s", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  {`tercera opcion`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_b2c0c3525fcf6ec88f5a6e7445d4e012 () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "borderRadius": "0.7em", "fontSize": "1em", "paddingInlineStart": "0.7em", "paddingInlineEnd": "0.7em", "paddingTop": "0.7em", "paddingBottom": "0.7em", "backgroundColor": "#373de1", "border": "2px solid #6474f0", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "transitionDuration": "0.2s", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  {`primera opcion`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_23ccf28efc842bb377d3da6f93314375 () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "borderRadius": "0.7em", "fontSize": "1em", "paddingInlineStart": "0.7em", "paddingInlineEnd": "0.7em", "paddingTop": "0.7em", "paddingBottom": "0.7em", "backgroundColor": "#373de1", "border": "2px solid #6474f0", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "transitionDuration": "0.2s", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  {`quinta opcion`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_48de31fe604656aa1ec6de6ea45f5c81 () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "borderRadius": "0.7em", "fontSize": "1em", "paddingInlineStart": "0.7em", "paddingInlineEnd": "0.7em", "paddingTop": "0.7em", "paddingBottom": "0.7em", "backgroundColor": "#373de1", "border": "2px solid #6474f0", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "transitionDuration": "0.2s", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  {`segunda opcion`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_04f6f330b9c607726cc65a82da3a5b4f () {


  return (
    <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesButton css={{"width": "100%", "height": "100%", "borderRadius": "0.7em", "fontSize": "1em", "paddingInlineStart": "0.7em", "paddingInlineEnd": "0.7em", "paddingTop": "0.7em", "paddingBottom": "0.7em", "backgroundColor": "#373de1", "border": "2px solid #6474f0", "color": "#eef4ff", "backgroundImage": "linear-gradient(#6474f0, #373de1)", "transitionDuration": "0.2s", "&:hover": {"backgroundImage": "linear-gradient(#373de1, #393bc9)"}}}>
  {`cuarta opcion`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_1762bb90abdb81b879b2a22edbbe01a1/>
  <Fragment>
  <RadixThemesFlex align={`start`} css={{"position": "fixed", "height": "100%", "left": "0px", "top": "0px", "zIndex": "5", "paddingInlineStart": "1em", "paddingInlineEnd": "1em", "paddingTop": "1em", "paddingBottom": "1em", "backgroundColor": "#373de1", "borderRight": "0.4em solid #6474f0", "width": "15em", "alignItems": "center"}} direction={`column`} gap={`2`}>
  <RadixThemesAvatar css={{"width": "4em", "height": "4em"}} src={`/auriculares.ico`}/>
  <RadixThemesHeading align={`center`} css={{"fontSize": "1.5em", "marginBottom": "1em", "color": "#eef4ff", "textShadow": "2px 2px 3px black"}}>
  {`Descarga Música`}
</RadixThemesHeading>
  <RadixThemesFlex align={`start`} css={{"alignItems": "left", "width": "100%", "paddingInlineStart": "1em", "paddingInlineEnd": "1em"}} direction={`column`} gap={`3`}>
  <Link_b2c0c3525fcf6ec88f5a6e7445d4e012/>
  <Link_48de31fe604656aa1ec6de6ea45f5c81/>
  <Link_8376a1a770901602fd28d5f2d9d0461b/>
  <Link_04f6f330b9c607726cc65a82da3a5b4f/>
  <Link_23ccf28efc842bb377d3da6f93314375/>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesContainer css={{"marginLeft": "16em"}}>
  <RadixThemesText as={`p`}>
  {`asdggfadgadgadfhadrgefsdfaeedaslkfnklasfnlkaenfjlnejnfkawbfnkjbdnafhbwehfbwahbfajwhbfaewkjhfbdsabfnbehjfbwafhbhb`}
</RadixThemesText>
</RadixThemesContainer>
</Fragment>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
