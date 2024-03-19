# https://rapidapi.com/tahirafridi/api/spotify-downloader6
# https://rapidapi.com/Glavier/api/spotify23
import reflex as rx
import re
import requests as rq
import webmusic.constants as cnst
from webmusic.routes import Route
from webmusic.model.spotify_download import SpotifyDownloadData
from webmusic.model.spotify_playlist import SpotifyPlaylistData
from .state_components import StateComponents

class ManageSpotifyApi(rx.State):
    '''
    Class for Handling Spotify Downloader API 
    '''
    data_download: SpotifyDownloadData = SpotifyDownloadData()
    data_playlist: SpotifyPlaylistData = SpotifyPlaylistData()

    url: str = ""
    from_redirect: bool = False
    msg_response_download = ""
    msg_response_playlist = ""


    def create_blank_template(self):
        '''
        Create a blank template for SpotifyDownloadData 
        '''
        self.data_download.title = 'Desconocido'
        self.data_download.author = 'Desconocido'
        self.data_download.type = 'Desconocido'
        self.data_download.image = '/interrogacion.png'
        self.data_download.link_download = '/interrogacion.png'

        self.data_playlist.title = 'Desconocido'
        self.data_playlist.author = 'Desconocido'
        self.data_playlist.img_playlist = '/interrogacion.png'
        self.data_playlist.followers = '0'
        self.data_playlist.list_item = '0'
        self.data_playlist.total_song = 0

    def get_id_type_from_url_and_redirect(self):
        '''
        Extract and validate the type and id content from the URL and redirect for download
        '''
        split_list = re.split("/",self.url)

        if split_list[len(split_list)-2] != 'track':
            return rx.window_alert("No se ha ingresado el enlace de una canción de Spotify")
        
        if re.search('\?',split_list[len(split_list)-1]) != None:
            self.data_download.id = split_list[len(split_list)-1]
        else:
            end = re.search("\?",split_list[len(split_list)-1])
            self.data_download.id = split_list[len(split_list)-1][0:end]
        
        self.data_download.type = split_list[len(split_list)-2]
        self.data_download.url_song = self.url

        self.from_redirect = True
        return rx.redirect(f"{Route.SPOTIFY_DOWNLOAD.value}/{self.data_download.type}/{self.data_download.id}")
    
    def get_id_playlist_from_url_and_redirect(self):
        '''
        Extract and validate the id playlist from the URL and redirect 
        '''
        split_list = re.split("/",self.url)

        if split_list[len(split_list)-2] != 'playlist':
            return rx.window_alert('No se ha ingresado el enlace de una playlist de Spotify')
        
        if re.search('\?',split_list[len(split_list)-1]) == None:
            self.data_playlist.id_playlist = split_list[len(split_list)-1]
        else: 
            self.data_playlist.id_playlist = re.split('\?',split_list[len(split_list)-1])[0]

        self.from_redirect = True
        return rx.redirect(f"{Route.SPOTIFY_PLAYLIST.value}/{self.data_playlist.id_playlist}")

    def get_id_song_from_playlist(self):
        '''
        Get current song id and redirect
        '''
        self.data_download.id = self.data_playlist.list_item[self.data_playlist.current_number_song-1]['track']['id']
        self.data_download.type = 'track'
        self._rebuild_url_from_id_type()
        self.from_redirect = True

        return rx.redirect(f"{Route.SPOTIFY_PLAYLIST.value}/{self.data_playlist.id_playlist}/{self.data_download.type}/{self.data_download.id}")
    
    def get_next_playlist_song(self):
        '''
        Get next song from the playlist and redirect
        '''
        if self.data_playlist.current_number_song<self.data_playlist.total_song:
            self.data_playlist.current_number_song += 1
        else:
            self.data_playlist.current_number_song = 1

        self.data_download.id = self.data_playlist.list_item[self.data_playlist.current_number_song-1]['track']['id']
        self._rebuild_url_from_id_type()
        self.from_redirect = True

        return rx.redirect(f"{Route.SPOTIFY_PLAYLIST.value}/{self.data_playlist.id_playlist}/{self.data_download.type}/{self.data_download.id}")
    
    def get_previous_playlist_song(self):
        '''
        Get previous song from the playlist and redirect
        '''
        if self.data_playlist.current_number_song>1:
            self.data_playlist.current_number_song -= 1
        else:
            self.data_playlist.current_number_song = self.data_playlist.total_song
        
        self.data_download.id = self.data_playlist.list_item[self.data_playlist.current_number_song-1]['track']['id']
        self._rebuild_url_from_id_type()
        self.from_redirect = True

        return rx.redirect(f"{Route.SPOTIFY_PLAYLIST.value}/{self.data_playlist.id_playlist}/{self.data_download.type}/{self.data_download.id}")

    def _rebuild_url_from_id_type(self):
        '''
        Reconstruct the URL from the type and ID content
        '''
        SPOTIFY_URL_BASE = "https://open.spotify.com/intl-es/"
        self.data_download.url_song = (SPOTIFY_URL_BASE + 
                                       self.data_download.type + 
                                       "/" + self.data_download.id)

    def _json_spotify_down_to_data_down(self):
        '''
        Save the API response from Spotify Download to data_download (SpotifyDownloadData)
        '''
        self.data_download.title = self.msg_response_download['title']
        self.data_download.author = self.msg_response_download['artist']
        self.data_download.image = self.msg_response_download['cover']
        self.data_download.type = self.msg_response_download['type']
        self.data_download.link_download = self.msg_response_download['download_link']

    def _json_spotify_playlist_to_data_playlist(self):
        '''
        Save the API response from Spotify to data_playlist (SpotifyPlaylistData)
        '''
        self.data_playlist.list_item = self.msg_response_playlist['items']
        self.data_playlist.total_song = len(self.msg_response_playlist['items'])
        self.data_playlist.current_number_song = 1

    def _json_spotify_info_playlist_to_data_playlist(self):
        '''
        Save the API response from Spotify Info Playlist to data_playlist (SpotifyPlaylistData)
        '''
        self.data_playlist.title = self.msg_response_playlist['name']
        self.data_playlist.author = self.msg_response_playlist['owner']['display_name']
        self.data_playlist.img_playlist = self.msg_response_playlist['images'][0]['url']
        self.data_playlist.followers = "{:,}".format(int(self.msg_response_playlist['followers']['total']))

    @rx.background
    async def getSpotifyDownload(self):
        '''
        Send a request to the Spotify Download API and evaluate the response
        '''
        async with self:
            if self.from_redirect == False:
                self.data_download.id = self.router.page.params.get("id_song", "no id_song")
                self.data_download.type = self.router.page.params.get("type", "no type")
                self._rebuild_url_from_id_type()

            response = rq.get(cnst.URL_SPOTIFY_DOWN, 
                              headers=cnst.HEADERS_SPOTIFY_DOWN, 
                              params={"spotifyUrl": self.data_download.url_song})
            self.msg_response_download = response.json()

            self.from_redirect = False

            if self.msg_response_download == None:
                return [StateComponents.change_card_info(False),
                        rx.window_alert("No se ha encontrado la canción de Spotify")]
            else:
                self._json_spotify_down_to_data_down()
                return StateComponents.change_card_info(True)
            
    @rx.background
    async def getSpotifyPlaylist(self):
        '''
        Send a request to the Spotify API and evaluate the response
        '''
        async with self:
            if self.from_redirect == False:
                self.data_playlist.id_playlist = self.router.page.params.get("id_playlist", "no id_playlist")

            self.from_redirect = False

            # Get Info Playlist
            QUERYSTRING = {"id": self.data_playlist.id_playlist}

            response = rq.get(cnst.URL_SPOTIFY_PLAYLIST_INFO,
                              headers=cnst.HEADERS_SPOTIFY_PLAYLIST,
                              params=QUERYSTRING)
            self.msg_response_playlist = response.json()    

            if self.msg_response_playlist == None:
                return [StateComponents.change_card_info(False),
                        rx.window_alert("No se ha encontrado la playlist de Spotify")]
            else:
                self._json_spotify_info_playlist_to_data_playlist()

            # Get Tracks for Playlist
            QUERYSTRING.update({"offset": "0","limit": "100"})

            response = rq.get(cnst.URL_SPOTIFY_PLAYLIST, 
                              headers=cnst.HEADERS_SPOTIFY_PLAYLIST,
                              params=QUERYSTRING)
            self.msg_response_playlist = response.json()

            if self.msg_response_playlist == None:
                return [StateComponents.change_card_info(False),
                        rx.window_alert("No se ha encontrado la playlist de Spotify")]
            else:
                self._json_spotify_playlist_to_data_playlist()
  
            return StateComponents.change_card_info(True)   


    @rx.var
    def getDataSpotifyDownload(self):
        '''
        Return data_download (SpotifyDownloadData)
        '''
        return self.data_download
    
    @rx.var
    def getDataSpotifyPlaylist(self):
        '''
        Return data_playlist (SpotifyPlaylistData)
        '''
        return self.data_playlist
    
    def verify_redirect_api(self, text: str, route: str):
        if self.from_redirect is False:
            return [rx.window_alert(text),
                    rx.redirect(route)]