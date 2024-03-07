


url= "https://cdn02.ytjar.xyz/get.php/6/29/UxxajLWwzqY.mp3?h=JHV8tm8x78TScrDLmcUiIA&s=1633873888&n=Icona-Pop-I-Love-It-feat-Charli-XCX-OFFICIAL-VIDEO"

import sys
import requests

# pass URL as first argument
response = requests.head(url, allow_redirects=True)
size = response.headers.get('content-length', -1)

# size in megabytes (Python 2, 3)
print('{:<40}: {:.2f} MB'.format('FILE SIZE', int(size) / float(1 << 20)))