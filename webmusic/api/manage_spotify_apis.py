# https://rapidapi.com/tahirafridi/api/spotify-downloader6
import reflex as rx
import re
import requests as rq
import webmusic.constants as cnst
from webmusic.routes import Route
from webmusic.model.spotify_download import SpotifyDownloadData
from .state_components import StateComponents

class ManageSpotifyApi(rx.State):
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
        SPOTIFY_URL_BASE = "https://open.spotify.com/intl-es/"
        self.data_download.url_song = (SPOTIFY_URL_BASE + 
                                       self.data_download.type + 
                                       "/" + self.data_download.id)

    @rx.background
    async def getSpotifyDownload(self):
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

    @rx.var
    def getDataSpotifyDownload(self):
        return self.msg_response