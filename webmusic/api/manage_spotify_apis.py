# https://rapidapi.com/tahirafridi/api/spotify-downloader6
import reflex as rx
import re
import requests as rq
import webmusic.constants as cnst
from webmusic.routes import Route
from webmusic.model.spotify_download import SpotifyDownloadData
from .state_components import StateComponents

class ManageSpotifyApi(rx.State):
    '''
    Class for Handling Spotify Downloader API
    '''
    data_download: SpotifyDownloadData = SpotifyDownloadData()

    url: str = ""
    from_redirect: bool = False
    msg_response = ""

    def create_blank_template(self):
        '''
        Create a blank template for SpotifyDownloadData 
        '''
        self.data_download.title = 'Desconocido'
        self.data_download.author = 'Desconocido'
        self.data_download.type = 'Desconocido'
        self.data_download.image = '/interrogacion.png'
        self.data_download.link_download = '/interrogacion.png'

    def get_id_type_from_url_and_redirect(self):
        '''
        Extract the type and id content from the URL and redirect for download
        '''
        split_list = re.split("/",self.url)
        if re.search('\?',split_list[len(split_list)-1]) != None:
            self.data_download.id = split_list[len(split_list)-1]
        else:
            end = re.search("\?",split_list[len(split_list)-1])
            self.data_download.id = split_list[len(split_list)-1][0:end]
        self.data_download.type = split_list[len(split_list)-2]
        self.data_download.url_song = self.url

        self.from_redirect = True
        return rx.redirect(f"{Route.SPOTIFY_DOWNLOAD.value}/{self.data_download.type}/{self.data_download.id}")
    
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
        Save the API response from Spotify Download to data_download (SpotifyDataDownload)
        '''
        self.data_download.title = self.msg_response['title']
        self.data_download.author = self.msg_response['artist']
        self.data_download.image = self.msg_response['cover']
        self.data_download.type = self.msg_response['type']
        self.data_download.link_download = self.msg_response['download_link']

    @rx.background
    async def getSpotifyDownload(self):
        '''
        Send a request to the Spotify Download API and evaluate the response
        '''
        async with self:
            if self.from_redirect == False:
                self.data_download.id = self.router.page.params.get("id", "no id")
                self.data_download.type = self.router.page.params.get("type", "no type")
                self._rebuild_url_from_id_type()

            response = rq.get(cnst.URL_SPOTIFY_DOWN, 
                              headers=cnst.HEADERS_SPOTIFY_DOWN, 
                              params={"spotifyUrl": self.data_download.url_song})
            self.msg_response = response.json()

            self.from_redirect = False

            if self.msg_response == None:
                return [StateComponents.change_card_info(False),
                        rx.window_alert("No se ha encontrado el video de Youtube")]
            else:
                self._json_spotify_down_to_data_down()
                return StateComponents.change_card_info(True)
            

    @rx.var
    def getDataSpotifyDownload(self):
        '''
        Return data_download (SpotifyDownloadData)
        '''
        return self.data_download