import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "/utils/state.js"

export const initialState = {"state": {"id": "", "id_playlist": "", "id_song": "", "is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}, "type": ""}, "state.update_vars_internal_state": {}, "state.on_load_internal_state": {}, "state.manage_youtube_api": {"data_download": {"link": "", "title": "", "duration": 0, "file_size": 0, "format_size": ""}, "data_info": {"id": "", "author": "", "title": "", "view_count": "", "img_src": "", "img_width": 0, "img_height": 0}, "data_playlist": {"id_playlist": "", "title_playlist": "", "item_number_current": 0, "contents_playlist": [], "image_playlist": "", "view_playlist": "", "videos_count": 0}, "from_redirect": false, "getDataYoutubeDownload": {"link": "", "title": "", "duration": 0, "file_size": 0, "format_size": ""}, "getDataYoutubeInfo": {"id": "", "author": "", "title": "", "view_count": "", "img_src": "", "img_width": 0, "img_height": 0}, "getDataYoutubeInfoPlaylist": {"id_playlist": "", "title_playlist": "", "item_number_current": 0, "contents_playlist": [], "image_playlist": "", "view_playlist": "", "videos_count": 0}, "msg_response_download": "", "msg_response_info": "", "msg_response_playlist": "", "url": ""}, "state.state_components": {"extend_sidebar": false, "grid_sidebar": "5% 95%", "show_card_info": false}, "state.manage_spotify_api": {"data_download": {"id": "", "url_song": "", "link_download": "", "title": "", "author": "", "image": "", "type": ""}, "from_redirect": false, "getDataSpotifyDownload": {"id": "", "url_song": "", "link_download": "", "title": "", "author": "", "image": "", "type": ""}, "msg_response": "", "url": ""}}

export const defaultColorMode = "light"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  state: createContext(null),
  state__update_vars_internal_state: createContext(null),
  state__on_load_internal_state: createContext(null),
  state__manage_youtube_api: createContext(null),
  state__state_components: createContext(null),
  state__manage_spotify_api: createContext(null),
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
  const [state__update_vars_internal_state, dispatch_state__update_vars_internal_state] = useReducer(applyDelta, initialState["state.update_vars_internal_state"])
  const [state__on_load_internal_state, dispatch_state__on_load_internal_state] = useReducer(applyDelta, initialState["state.on_load_internal_state"])
  const [state__manage_youtube_api, dispatch_state__manage_youtube_api] = useReducer(applyDelta, initialState["state.manage_youtube_api"])
  const [state__state_components, dispatch_state__state_components] = useReducer(applyDelta, initialState["state.state_components"])
  const [state__manage_spotify_api, dispatch_state__manage_spotify_api] = useReducer(applyDelta, initialState["state.manage_spotify_api"])
  const dispatchers = useMemo(() => {
    return {
      "state": dispatch_state,
      "state.update_vars_internal_state": dispatch_state__update_vars_internal_state,
      "state.on_load_internal_state": dispatch_state__on_load_internal_state,
      "state.manage_youtube_api": dispatch_state__manage_youtube_api,
      "state.state_components": dispatch_state__state_components,
      "state.manage_spotify_api": dispatch_state__manage_spotify_api,
    }
  }, [])

  return (
    <StateContexts.state.Provider value={ state }>
    <StateContexts.state__update_vars_internal_state.Provider value={ state__update_vars_internal_state }>
    <StateContexts.state__on_load_internal_state.Provider value={ state__on_load_internal_state }>
    <StateContexts.state__manage_youtube_api.Provider value={ state__manage_youtube_api }>
    <StateContexts.state__state_components.Provider value={ state__state_components }>
    <StateContexts.state__manage_spotify_api.Provider value={ state__manage_spotify_api }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.state__manage_spotify_api.Provider>
    </StateContexts.state__state_components.Provider>
    </StateContexts.state__manage_youtube_api.Provider>
    </StateContexts.state__on_load_internal_state.Provider>
    </StateContexts.state__update_vars_internal_state.Provider>
    </StateContexts.state.Provider>
  )
}