#API YT info: https://rapidapi.com/h0p3rwe/api/youtube-search-and-download
#API YT Download: https://rapidapi.com/ytjar/api/youtube-mp36
import reflex as rx
import re
import requests as rq
import webmusic.constants as cnst
from webmusic.model.yt_info import YoutubeInfoData
from webmusic.model.yt_download import YoutubeDownloadData
from webmusic.routes import Route
from .state_components import StateComponents
class ManageYoutubeApi(rx.State):
    '''
    Class for Handling APIs: YT Info and YT Mp3 Download
    '''
    data_info: YoutubeInfoData = YoutubeInfoData()
    data_download: YoutubeDownloadData = YoutubeDownloadData()
    
    url: str = ""
    msg_response = ""
    msg_response_2 = ""
    from_redirect: bool = False

    def get_id_from_url_and_redirect(self):
        '''
        Extract the ID from the URL, then redirect to /yt_download.
        '''
        start = re.search(r"=",self.url).span()[0]+1
        end = re.search(r"&|$",self.url).span()[0]
        self.data_info.id = self.url[start:end]

        self.from_redirect = True

        return rx.redirect(f"{Route.YOUTUBE_DOWNLOAD.value}/{self.data_info.id}")

    def _json_yt_info_to_data_info(self):
        ''''
        Save the API response from YT Info in the data_info (YoutubeInfoData)        
        '''
        length_thumbnail = len(self.msg_response['thumbnail']['thumbnails'])-1
        self.data_info.author = self.msg_response['author']
        self.data_info.title = self.msg_response['title']    
        self.data_info.view_count = "{:,}".format(int(self.msg_response['viewCount']))
        self.data_info.img_src = self.msg_response['thumbnail']['thumbnails'][length_thumbnail-1]['url']
        self.data_info.img_width = self.msg_response['thumbnail']['thumbnails'][length_thumbnail-1]['width']
        self.data_info.img_height = self.msg_response['thumbnail']['thumbnails'][length_thumbnail-1]['height']


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
        self.data_download.link = self.msg_response_2['link']
        self.data_download.title = self.msg_response_2['title']
        self.data_download.duration = self.msg_response_2['duration']
        self.data_download.file_size = self.msg_response_2['filesize']
        self._format_bytes()


    @rx.background
    async def getYoutubeInfo(self):
        '''
        Send a request to YT Info's API and evaluates the response
        '''
        async with self:
            if not self.from_redirect:
                self.data_info.id = self.router.page.params.get("id", "no id")

            response = rq.get(cnst.URL_YT_INFO, headers=cnst.HEADERS_YT_INFO, params={"id": self.
            data_info.id})
            self.msg_response = response.json()['videoDetails']

            if self.msg_response == None or self.msg_response_2 == None:
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

            response = rq.get(cnst.URL_YT_DOWN, headers=cnst.HEADERS_YT_DOWN, params={"id": self.data_info.id})
            self.msg_response_2 = response.json()

            if self.msg_response != None and self.msg_response_2 != None:
                self._json_yt_down_to_data_down()

            self.from_redirect = False

            # Change card info state once the file size has been formatted
            if self.data_download.format_size != '':
                return StateComponents.change_card_info(True)

    @rx.var
    def getDataYoutubeInfo(self) -> YoutubeInfoData:
        return self.data_info
    
    @rx.var
    def getDataYoutubeDownload(self) -> YoutubeDownloadData:
        return self.data_download
    
    

    