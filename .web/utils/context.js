import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "/utils/state.js"

export const initialState = {"state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "state.state": {}, "state.youtube_mp3_downloader": {"HEADERS": {"X-RapidAPI-Key": "bd82ec0ba3mshbc9f9b34c257a1bp13d818jsn4644fe015839", "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com"}, "URL": "https://youtube-mp36.p.rapidapi.com/dl", "data": {}, "getDataYoutubeMp3": {}, "id": ""}, "state.side_bar_state": {"state_sidebar": true}, "state.link_input": {"id": ""}}

export const defaultColorMode = "None"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  state: createContext(null),
  state__state: createContext(null),
  state__youtube_mp3_downloader: createContext(null),
  state__side_bar_state: createContext(null),
  state__link_input: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}}

export const state_name = "state"
export const onLoadInternalEvent = () => [
    Event('state.update_vars_internal', {vars: hydrateClientStorage(clientStorage)}),
    Event('state.on_load_internal')
]

export const initialEvents = () => [
    Event('state.hydrate'),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext.Provider value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext.Provider>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectError] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectError]}>
      {children}
    </EventLoopContext.Provider>
  )
}

export function StateProvider({ children }) {
  const [state, dispatch_state] = useReducer(applyDelta, initialState["state"])
  const [state__state, dispatch_state__state] = useReducer(applyDelta, initialState["state.state"])
  const [state__youtube_mp3_downloader, dispatch_state__youtube_mp3_downloader] = useReducer(applyDelta, initialState["state.youtube_mp3_downloader"])
  const [state__side_bar_state, dispatch_state__side_bar_state] = useReducer(applyDelta, initialState["state.side_bar_state"])
  const [state__link_input, dispatch_state__link_input] = useReducer(applyDelta, initialState["state.link_input"])
  const dispatchers = useMemo(() => {
    return {
      "state": dispatch_state,
      "state.state": dispatch_state__state,
      "state.youtube_mp3_downloader": dispatch_state__youtube_mp3_downloader,
      "state.side_bar_state": dispatch_state__side_bar_state,
      "state.link_input": dispatch_state__link_input,
    }
  }, [])

  return (
    <StateContexts.state.Provider value={ state }>
    <StateContexts.state__state.Provider value={ state__state }>
    <StateContexts.state__youtube_mp3_downloader.Provider value={ state__youtube_mp3_downloader }>
    <StateContexts.state__side_bar_state.Provider value={ state__side_bar_state }>
    <StateContexts.state__link_input.Provider value={ state__link_input }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.state__link_input.Provider>
    </StateContexts.state__side_bar_state.Provider>
    </StateContexts.state__youtube_mp3_downloader.Provider>
    </StateContexts.state__state.Provider>
    </StateContexts.state.Provider>
  )
}