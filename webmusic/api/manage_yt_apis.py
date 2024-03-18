#API YT info: https://rapidapi.com/h0p3rwe/api/youtube-search-and-download
#API YT Download: https://rapidapi.com/ytjar/api/youtube-mp36
import reflex as rx
import re
import requests as rq
import webmusic.constants as cnst
from webmusic.model.yt_info import YoutubeInfoData
from webmusic.model.yt_download import YoutubeDownloadData
from webmusic.model.yt_info_playlist import YoutubeInfoPlaylistData
from webmusic.routes import Route
from .state_components import StateComponents

class ManageYoutubeApi(rx.State):
    '''
    Class for Handling APIs: YT Info and YT Mp3 Download
    '''
    data_info: YoutubeInfoData = YoutubeInfoData()
    data_download: YoutubeDownloadData = YoutubeDownloadData()
    data_playlist: YoutubeInfoPlaylistData = YoutubeInfoPlaylistData()
    
    url: str = ""
    msg_response_info = ""
    msg_response_download = ""
    msg_response_playlist = ""
    from_redirect: bool = False

    def create_blank_template(self):
        '''
        Create a blank template for YoutubeInfoData and YoutubeDownloadData
        '''
        self.data_info.title = 'Desconocido'
        self.data_info.author = 'Desconocido'
        self.data_info.view_count = '0'
        self.data_info.img_src = '/interrogacion.png'
        self.data_info.img_width = '640'
        self.data_info.img_height = '360'

        self.data_playlist.title_playlist = 'Desconocido'
        self.data_playlist.videos_count = 0
        self.data_playlist.item_number_current = 0
        self.data_playlist.image_playlist = '/interrogacion.png'
        self.data_playlist.view_playlist = '0'

        self.data_download.title = 'desconocido'
        self.data_download.file_size = 0
        self.data_download.format_size = 'kb'
        self.data_download.link = '/interrogacion.png'

    def get_id_from_url_and_redirect(self):
        '''
        Extract the ID from the URL, then redirect to /yt_download.
        '''
        start = re.search(r"=",self.url).span()[0]+1
        end = re.search(r"&|$",self.url).span()[0]
        self.data_info.id = self.url[start:end]

        self.from_redirect = True

        return rx.redirect(f"{Route.YOUTUBE_DOWNLOAD.value}/{self.data_info.id}")
    
    def get_id_playlist_from_url_and_redirect(self):
        '''
        Extract the playlist ID from the URL, then redirect to /yt_playlist.
        '''
        split_list = re.split(r"=",self.url)
        self.data_playlist.id_playlist = split_list[len(split_list)-1]

        self.from_redirect = True
    
        return rx.redirect(f"{Route.YOUTUBE_PLAYLIST.value}/{self.data_playlist.id_playlist}")
    
    def get_next_playlist_song(self):
        '''
        Get next song from the playlist and redirect
        '''
        if self.data_playlist.item_number_current<self.data_playlist.videos_count:
            self.data_playlist.item_number_current += 1
        else:
            self.data_playlist.item_number_current = 1

        self.data_info.id = self.data_playlist.contents_playlist[self.data_playlist.item_number_current-1]['video']['videoId']
        self.from_redirect = True

        return rx.redirect(f"{Route.YOUTUBE_PLAYLIST.value}/{self.data_playlist.id_playlist}/{self.data_info.id}")
    
    def get_id_song_from_playlist(self):
        '''
        Get current song id and redirect
        '''
        self.data_info.id = self.data_playlist.contents_playlist[self.data_playlist.item_number_current-1]['video']['videoId']
        self.from_redirect = True

        return rx.redirect(f"{Route.YOUTUBE_PLAYLIST.value}/{self.data_playlist.id_playlist}/{self.data_info.id}")

    def get_previous_playlist_song(self):
        '''
        Get previous song from the playlist and redirect
        '''
        if self.data_playlist.item_number_current>1:
            self.data_playlist.item_number_current -= 1
        else:
            self.data_playlist.item_number_current = self.data_playlist.videos_count

        self.data_info.id = self.data_playlist.contents_playlist[self.data_playlist.item_number_current-1]['video']['videoId']
        self.from_redirect = True

        return rx.redirect(f"{Route.YOUTUBE_PLAYLIST.value}/{self.data_playlist.id_playlist}/{self.data_info.id}")

    def _json_yt_info_to_data_info(self):
        ''''
        Save the API response from YT Info in the data_info (YoutubeInfoData)        
        '''
        length_thumbnail = len(self.msg_response_info['thumbnail']['thumbnails'])-1
        self.data_info.author = self.msg_response_info['author']
        self.data_info.title = self.msg_response_info['title']    
        self.data_info.view_count = "{:,}".format(int(self.msg_response_info['viewCount']))
        self.data_info.img_src = self.msg_response_info['thumbnail']['thumbnails'][length_thumbnail-1]['url']
        self.data_info.img_width = self.msg_response_info['thumbnail']['thumbnails'][length_thumbnail-1]['width']
        self.data_info.img_height = self.msg_response_info['thumbnail']['thumbnails'][length_thumbnail-1]['height']

    def _format_bytes(self):
        '''
        Convert from byte to KB, MB, GB or TB
        '''
        # 2**10 = 1024
        power = 2**10
        n = 0
        power_labels = {0 : '', 1: 'Kb', 2: 'Mb', 3: 'Gb', 4: 'Tb'}

        while self.data_download.file_size > power:
            self.data_download.file_size /= power
            n += 1

        self.data_download.file_size = round(self.data_download.file_size,2)
        self.data_download.format_size = power_labels[n]
        
    def _json_yt_down_to_data_down(self):
        ''''
        Save the API response from YT Download in the data_download (YoutubeDownloadData)
        '''
        self.data_download.link = self.msg_response_download['link']
        self.data_download.title = self.msg_response_download['title']
        self.data_download.duration = self.msg_response_download['duration']
        try:
            self.data_download.file_size = self.msg_response_download['filesize']
            self._format_bytes()
        except:
            self.data_download.file_size = '0'
            self.data_download.format_size = 'b'

    def _json_yt_playlist_to_data_playlist(self):
        '''
        Save the API response from YT Info Playlist in the data_playlist (YoutubeInfoPlaylistData)
        '''
        self.data_playlist.title_playlist = self.msg_response_playlist['title']
        self.data_playlist.videos_count = len(self.msg_response_playlist['contents'])
        self.data_playlist.view_playlist = re.split(r" ",self.msg_response_playlist['views'])[0]
        self.data_playlist.item_number_current = 1
        self.data_playlist.contents_playlist = list(self.msg_response_playlist['contents'])
        self.data_playlist.id_current = self.data_playlist.contents_playlist[0]['video']['videoId']
        self.data_playlist.image_playlist = self.msg_response_playlist['thumbnails'][len(self.msg_response_playlist['thumbnails'])-1]['url']

    @rx.background
    async def getYoutubeInfo(self):
        '''
        Send a request to YT Info's API and evaluates the response
        '''
        async with self:
            if not self.from_redirect:
                self.data_info.id = self.router.page.params.get("id_song", "no id_song")

            response = rq.get(cnst.URL_YT_INFO, 
                              headers=cnst.HEADERS_YT_INFO, 
                              params={"id": self.data_info.id})
            self.msg_response_info = response.json()['videoDetails']

            if self.msg_response_info == None or self.msg_response_download == None:
                return [StateComponents.change_card_info(False),
                        rx.window_alert("No se ha encontrado el video de Youtube")]
            else:
                self._json_yt_info_to_data_info()
            
            self.from_redirect = False
            
    @rx.background
    async def getYoutubeMp3(self):
        '''
        Send a request to YT Download's API
        '''
        async with self:
            response = rq.get(cnst.URL_YT_DOWN, 
                              headers=cnst.HEADERS_YT_DOWN, 
                              params={"id": self.data_info.id})
            self.msg_response_download = response.json()

            if self.msg_response_info != None and self.msg_response_download != None:
                self._json_yt_down_to_data_down()

            self.from_redirect = False

            # Change card info state once the file size has been obtained
            if self.data_download.file_size != 0:
                return StateComponents.change_card_info(True)
            
    @rx.background
    async def getYoutubeInfoPlaylist(self):
        '''
        Send a request to YT Info Playlist's API
        '''
        async with self:
            if not self.from_redirect:
                self.data_playlist.id_playlist = self.router.page.params.get("id_playlist", "no id_playlist")

            
            response = rq.get(cnst.URL_YT_INFO_PLAYLIST, 
                            headers=cnst.HEADERS_YT_INFO, 
                            params={"id": self.data_playlist.id_playlist})
            self.msg_response_playlist = response.json()

            if self.msg_response_playlist != None:
                self._json_yt_playlist_to_data_playlist()
            else: 
                return [rx.window_alert("No se ha encontrado la playlist"),
                        rx.redirect(f"{Route.YOUTUBE_PLAYLIST}")]
            
            self.from_redirect = False
            return StateComponents.change_card_info(True)
        
           
    @rx.var
    def getDataYoutubeInfo(self) -> YoutubeInfoData:
        return self.data_info
    
    @rx.var
    def getDataYoutubeDownload(self) -> YoutubeDownloadData:
        return self.data_download
    
    @rx.var
    def getDataYoutubeInfoPlaylist(self) -> YoutubeInfoPlaylistData:
        return self.data_playlist
    
    def verify_redirect_yt_api(self, text: str, route: str):
        if self.from_redirect is False:
            return [rx.window_alert(text),
                    rx.redirect(route)]
    

    