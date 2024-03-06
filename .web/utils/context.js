import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "/utils/state.js"

export const initialState = {"state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "state.on_load_internal_state": {}, "state.youtube_mp3_downloader": {"HEADERS": {"X-RapidAPI-Key": "bd82ec0ba3mshbc9f9b34c257a1bp13d818jsn4644fe015839", "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com"}, "URL": "https://youtube-mp36.p.rapidapi.com/dl", "data": [], "getDataYoutubeMp3": [], "id": "", "querystring": {}}, "state.youtube_info": {"data_info": {"author": "", "title": "", "view_count": 0, "img_src": "", "img_width": 0, "img_heihgt": 0}, "getDataYoutubeInfo": {"author": "", "title": "", "view_count": 0, "img_src": "", "img_width": 0, "img_heihgt": 0}, "id": "mLW35YMzELE", "querystring": {"id": "mLW35YMzELE"}}, "state.update_vars_internal_state": {}}

export const defaultColorMode = "light"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  state: createContext(null),
  state__on_load_internal_state: createContext(null),
  state__youtube_mp3_downloader: createContext(null),
  state__youtube_info: createContext(null),
  state__update_vars_internal_state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}}

export const state_name = "state"

// Theses events are triggered on initial load and each page navigation.
export const onLoadInternalEvent = () => {
    const internal_events = [];

    // Get tracked cookie and local storage vars to send to the backend.
    const client_storage_vars = hydrateClientStorage(clientStorage);
    // But only send the vars if any are actually set in the browser.
    if (client_storage_vars && Object.keys(client_storage_vars).length !== 0) {
        internal_events.push(
            Event(
                'state.update_vars_internal_state.update_vars_internal',
                {vars: client_storage_vars},
            ),
        );
    }

    // `on_load_internal` triggers the correct on_load event(s) for the current page.
    // If the page does not define any on_load event, this will just set `is_hydrated = true`.
    internal_events.push(Event('state.on_load_internal_state.on_load_internal'));

    return internal_events;
}

// The following events are sent when the websocket connects or reconnects.
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
  const [addEvents, connectErrors] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectErrors]}>
      {children}
    </EventLoopContext.Provider>
  )
}

export function StateProvider({ children }) {
  const [state, dispatch_state] = useReducer(applyDelta, initialState["state"])
  const [state__on_load_internal_state, dispatch_state__on_load_internal_state] = useReducer(applyDelta, initialState["state.on_load_internal_state"])
  const [state__youtube_mp3_downloader, dispatch_state__youtube_mp3_downloader] = useReducer(applyDelta, initialState["state.youtube_mp3_downloader"])
  const [state__youtube_info, dispatch_state__youtube_info] = useReducer(applyDelta, initialState["state.youtube_info"])
  const [state__update_vars_internal_state, dispatch_state__update_vars_internal_state] = useReducer(applyDelta, initialState["state.update_vars_internal_state"])
  const dispatchers = useMemo(() => {
    return {
      "state": dispatch_state,
      "state.on_load_internal_state": dispatch_state__on_load_internal_state,
      "state.youtube_mp3_downloader": dispatch_state__youtube_mp3_downloader,
      "state.youtube_info": dispatch_state__youtube_info,
      "state.update_vars_internal_state": dispatch_state__update_vars_internal_state,
    }
  }, [])

  return (
    <StateContexts.state.Provider value={ state }>
    <StateContexts.state__on_load_internal_state.Provider value={ state__on_load_internal_state }>
    <StateContexts.state__youtube_mp3_downloader.Provider value={ state__youtube_mp3_downloader }>
    <StateContexts.state__youtube_info.Provider value={ state__youtube_info }>
    <StateContexts.state__update_vars_internal_state.Provider value={ state__update_vars_internal_state }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.state__update_vars_internal_state.Provider>
    </StateContexts.state__youtube_info.Provider>
    </StateContexts.state__youtube_mp3_downloader.Provider>
    </StateContexts.state__on_load_internal_state.Provider>
    </StateContexts.state.Provider>
  )
}