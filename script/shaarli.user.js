// ==UserScript==
// @name        shaarli
// @namespace   http://devedge.bour.cc/wiki/MonkeyShaarli
// @include     *
// @version     0.1
// @grant       GM_log
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_deleteValue
// @grant       GM_xmlhttpRequest
// ==/UserScript==

// for test
//GM_setValue("uri", "http://localhost/shaarli/");
//GM_deleteValue("uri");

var tile="\
iVBORw0KGgoAAAANSUhEUgAAADwAAAAcCAYAAAA9UNxEAAAABmJLR0QA/wD/AP+gvaeTAAAACXBI\
WXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gUFEikpAojYJAAAABl0RVh0Q29tbWVudABDcmVhdGVk\
IHdpdGggR0lNUFeBDhcAABEkSURBVFjDpZh5lFTlmYefb7n31q2lq6uaZml6dwCFBsEIxDGIHpUx\
Eo0R4zLjvpsxyUnGM3GyHeY4c6KTxTGJS/RM1HFiYkxA1IkmuDBGxUZEogitINDYNL3Q3dXUdutu\
3/zR2BOTGB1z/7mnTt2q5/6+93u/9/e+gv/HddY/zNIHRvszMravcu3kRV50qAvJ266dfMaPqjea\
Uq7w/E96YwBjjAUghAj4C6+rr75aHzx4MGOMucpxnIuCIOiSUr7tOM4zYRje6Hle4ZFHHvlQXPFh\
odfedELq7cE3ryiUxm+tRZ4E0BriGKII0k6SOJIXHS+++5Pv3XuNOQxXgBFCxB9V7I033pjq7++/\
olgs3hoEwWGuJo5joijCdV2iKLpo+vTpP7nzzjs/kKs/LLhn/7YryrXybX5Uo2W2YHqnJOEKImPo\
f9Owd3sFS8sfv2J9NQR+dniVI2OMNMYIIYT5KIJ7e3uv8DzvtjAM6ezspKWlhUQigTGGPXv2sHPn\
TrTWPx4bG/tQ3A8V4aUXp47xjXdvGEbzFyxXYuEpkkwDGEBKqBRg0zrDtpdCErbdbZnUOS/eP9b3\
7u8/quCzzjrrmCiK7g3DcP7SpUvF8ccfTy6XwxiDlJJischTTz3Fli1bsG27W0p5zpo1a/4sV34Q\
9BuPShGqypJaLW5vmaPEghMVqZwgDARxKAiqAishWHq2JJkWxJil2o1Pes+qfgSxd999twCW+L7f\
3tnZKT7+8Y+TzWYJgoAoiqjVajiOw4oVK0ilUgBLHcf5QO4HCn704TgVRqbTRMbuXCBpbJYoI6kd\
kpQGJVJILEviupIFyxTVakAUmSXX/fMpyb/koHrsscdSURR1RlFkH3XUUcyYMQOAcrnMyMgIQgi0\
1riuy+LFi6lWq0RRtOQrX/nKn+W+r+Av/MtKPXtlUmRS6aQyVkumXtrZBolEEAeC5x4K+fm3fYb3\
GiQCKQQtszUYqNRKR2za9du6b9x85Z/8f2PM+6bS1772NX3CCSeIVCqVFEK01NXV2blcDoAwDHn8\
8ce5++672b9/P0IIhBB0dnZijMHzvCN27NhRd9NNN70v9z2H1imXdejAGZtSizxn70jPCam8X6rW\
TFNsxCcSGWQqLVEogrJh8J2IkWHDSJ+g5QiFVFCXj0nVCQJPdBkVnPly3/rBeRfyYmOmvrrhzkLp\
/bbaueeeq5VSU8IwdAYHB0/IZrMlz/Oa4jj+RCqVkqlUCiEE1WqV/v5+RkZGGBgYoK2tDaUU9fX1\
ZDIZarVal1LqzF27dg2uXLnyxWw2W33wwQffw50UfPL1+WmlyuBnCczpFS/I7avsn13zw8AYVOCT\
zU2XuI7CFprYDzGAtqFWBhVLtBYkLEF9g2T/7rjFGHPzAf9AVUp+Vw0qPSd/rvEpWyXXP/GD3vfU\
x4suumhapVL5bBRFp3uel6tWq7N93w+MMcr3/WxjYyOO4yClJAxDACzLolKpTGxRKbEsi1wux759\
+1qMMTcHQVAVQvzO9/2eCy+88Cmt9fr77rsvmCxLi6+mo1gt/rDmmeVBGKWyjVBXF5BIaZQFlha0\
/pVFvkEjY4EJ4d0YSQRKSLQQpFzBscsdmjsiisU4VzgY5UaHaRof808J04XztRq/9+wb5n5/zXe2\
DwKcc845HZVK5Yee5y0PwzCVz+fJZDK4rotlWWitaW9vJ5/PY4yZFHw4WgghkFLiui7HHXccra2t\
lEql3OjoaG5kZKSpUCickkqlzldK3XvNNdd8/0c/+tGg/tjlwop99VPfD5bmpykW/XWCme2abL3C\
TQssB7QlUEIQxyAEGF9iDgvWUqClRAmB68LiZS5CgB/EjA0ZBvoD3no9sLa/4s/wPfnV/rHdDcu/\
nPp8fs8KwjD8qe/7S6dMmcLixYtpaWkhm82STCaxbRvLshBCEMfxZITNYbCUEqUUQghc12Xp0qUI\
IQiCYHLL79ixw3rttddmeJ731YMHDzZceumln9cqSl7gx5WlU2cqVp6XZs4CB2IwxmBiMVmsjQAh\
QSlB6VBAHB/+QkDSVmhLMvEqBmPAkopUK7S228w7OqJzVo1nHq9QGvfOD8Z4ImdMNoqipdOnT+fT\
n/40c+fOJY7jCa4x74mkUgqlFKVSiTiOJ6P77qIcPpAAUErR3NxMS0sL8+bNo7Ozk/Xr11MsFs+P\
ougJbYy5SkhD16IECxa51KqGOIagJiiVIspeSFAR+DWD7xu8Wswrz3v4NYObhC0vehwai3DTAqHB\
ciCb0uSnaJo7LBIJSTphseR4xfhozG9/U8maWJ9sjFkkhGD+/PksWLAAz/OI4xjf9ymVSnieh+d5\
+L6P7/vUajU2bdqE7/u4rsvLL7/M+Pg4yWQSpRS2bZNOp8nn87S2tpJIJCYjXygU2LBhQ9YYc7IW\
guMtGxobNRpFrAzFYsTD9x+iZ0cVqQTmsCOVciKoQWAQApSC0njMpudqk75NiMPPCZjRornmSw0k\
shKtJZ1HOLyoq9gmeaUQImFZFlOmTJmMYrlc5qGHHuLNN99EKUUcx5Pb992y9O7nYrHIxo0b/yif\
hRA0NTVx7bXXUldXh2VZdHR08PzzzyOEuFI7MjNUjSvTiAW2VETE2Aoa8prGqRaOIxESgpphZCSg\
WjVo9X+nbBjC/GNtHFsRhRBHBqnA0pKmFgtHapQRCAlJRyOEMMIoV2s9GMfxNGPMZC4qpcjlcjQ2\
NmLbNlJKfN9ndHSUarWKUur3uCFHH300tm0TRRFRFKGUQmvNzJkzJ5+VUuI4zgRXCFcnEvrZ8RLn\
v7M7IKyBLRU6LTljVZZSMY1SE4mqFLyxtcbjjxYolkKMmfDSYQSN0zTnrGqgXIkxBqQArQQJdyKv\
pRBoLTg4WCYKjfBN5dFEIlEpFArn9/b24vs+SinS6TRnnHEGpVJpMlpSSrZt28YTTzxBuVyezPEo\
ipg6dSpnnnkm1WoVY8zkoiUSiUmxWmuGh4cJw1AIIR5VMxepTXEYf2lgsEZCa46c46KUwLYUmbQm\
ndKkU4op9RavvFLm9dcrCAnTp1k0ZDUVL2Lf7oBMTnLMggyWVriOwrEn7q6lkEay8YUSj60bI/AU\
qWT6HrfU/u9RFH1paGgIy7KYNWsWSiksyyKVSpFKpUgmk9TX17N161a2b9+OEIKpU6dSX1+P53n0\
9vaSzWbp6upCa43jONi2PXk3xtDd3c2vfvUrarUayWTyHjVlkVcWIh4OA3P69jeqvPa7CkIK6lwL\
NylRCBxbsW+fz29+Pc7oWEQmrbnyqqmccUae/j6fwaGA7a97ZPOaI9oTCCMQwC/XjHD//UOs+cUY\
mzeViUKJ67gPY/wbEsXOkhBiOAzD03t6eti2bdtkiXFdd/IU7uvr4+mnn6ZQKJBKpbj00ks57bTT\
6O/vZ3h4mO3bt1NfX09bW9v/+f9HH+XBBx9k3bp1bNmyhSiKcBznYWPMDerAq5imZbyiQ2sIxJGj\
Y2HdppfK8qXucVpnusxpSxGE8NTT47z00oRLO/bYFCtOypPJaBYuSLNnj8fAYMAb2yo4rmRWWxJL\
KWZ1pHjrLY89e2rYtohcK/WDk9v+7ur/+nZ33NPTYxYtWvRKHMdDwJGFQqFu8+bNcvPmzTQ1NdHW\
1kYYhmzYsIHNmzcDsHDhQpYvX046naarq4ve3l6GhobYvn07iURi0mq2t7eza9cuent7sSwrsm37\
B/Pmzbv69ttvj2VfX1/iulk/ky/fG9yeENlTbW1v1RrT3p7g6AVpQLBrl8cLLxSJY8g3aM74ZAPp\
pCYOoC6t+ftrZrL4YxkqZfjFz0f49VMF4kiQdhWXXzSNuUe5eFURpVRe7BvdnwLo6+tLLFu2TK5d\
u/Z2rfWpWuutWmvT2tpKV1cXALt376a7u5s4jsnlcqxYsYJkMkkYhqTTaS6//HIWLlxIpVJh7dq1\
PPvss5NTkAsuuIA5c+bgeV5k27YYHh5OAcgoilRVDCcBXrx/dHcYBb7jCDF3TpKmhIvnGV5/vczI\
wRCEYNUZjcxuT6FiSUJpZCyZUm9z3WVNHH9chmIRfvP0CNVDMQrJ1LzDyr/J46awx7zhFW+MPJ0B\
iKJIRVGUBFizZs3uKIp827bF7NmzSafTeJ7HG2+8MdkKrly5kvb2dowxaK0xxlBfX8/FF1/MkiVL\
KJVKbNiwgVKphBCCfD7PKaecQjKZtMvl8or9+/dnALTjODXLZCoAJ1wy87yxcGBOLidZckyWgJg4\
gko5RijDZ8+cwqnLcyghKFdjfrp2gAXz0nxsfoZsRvO5y2fS3jKKMZBJayQTudzR5tLR7vBWTzD9\
yJZZp55wyxEPOI5TE0JUAFatWnWe53lz6uvrWbhwIXEcE8cxlUoFKSUrV65k2bJlSCmpVCqsW7eO\
uXPn0tXVRSaT4ZJLLqG5uRmAdDo9WZdbW1tpa2tj586d09va2k5dvXr1A1opZa79wqUTwy8ZWCY2\
ImFrmqakEAiyrsU5n5rGaSc10NmSnDAcQtDzToUXXhznfzaOsfrLRzC7wyWfVly2aqJRD+IJi4mA\
XNImX2fjh54cGB62CsMhSilz/fXXm8PGwYrjWNi2TWNjI0IIkskkp59+OsuXL6elpWWyRPX19dHd\
3U13dzdf/OIX6ejoIJPJcPbZZwNM2lOAVCpFXV0dQRDI4eFha3R0FPme3jRW40ISVmsx+wc8Elgo\
JC2NSbra67CEQgvF6FjIul8fZLwYmcJBw+rvvc3GVw4RBmCMJI4n+mYtJJZQVCtQOBShpaxk0/X7\
57YdbX6fa4wZl1KGtVqNgYGBSWc1depUOjo6JmtyoVBg/fr1lEolMzo6ym233caWLVsIgmCyPv++\
66pWqxw6dAilVCWTyezv7Ow00hhj+g/0CwBVS29MCHe4MB6w5r8H2TvoYWIIQ4MXxPh+zM69Ze7/\
5X66txwiaddtq0+nnysXdPBvt/fywJp+9u6vEscT9lJKSeDHvLajyNt7KqTcRN9YZejV21Y/HBtj\
zIEDB8Rh17RRKTU8Pj7Ok08+ycDAwGQ7GAQBvu/T29vLmjVr2Lp1K47jbMtkMs8Vi8Xgrrvu4pFH\
HqG/v3+ysZBSEgQBPT097N27F9d1+4rF4qvf+ta3Jtqhvr4+0dzcbAA+ceGMK8ti+OZYhA0drUkW\
zktRXzdhMPoHfN7aU+XAQICW5tUZ2bYbTC2x00nq1fvGdnwyCvWM1jbBcYvqaW62UUKxa2+JZ14Y\
5+BB/1A+nf/6zOzce372nee9P+SeddZZV0ZRdDPQ0NLSwty5c6mrq8PzPAYHB9mzZw9DQ0NIKV/N\
5/M3BEGw03Xd1cPDw5+MomhGc3MzixYtoqmpCSkle/fuZePGjYyMjByqq6v7ekNDwz133HGH90ez\
pb9d9Y9id+aOT3lx+bIoEicqZXJaSzDE1Vo04Kikyjh1W2MTfvO3/3FwE8A//et1uZ6xp+ZXyvEt\
Q6V3FgoVJZQ2IARREBMGytM6umFn1dxV/DnRn5o3nXfeecL3/U9FUXRZFEUnKqVyh/1wXKvVBrTW\
ynXdrXEcf/Phhx/eBLB69ercgQMH5lcqlVsKhcJCpVTiXV8eBAFhGHpa6xvGx8fv2rBhQzQ5l/7M\
Zz6jqtWqfPLJJwOAEy+fIcvxiCONc6IXl5drpRO2dnYXqsVtRzcu0yc1r3juml9+o8ZGzMBgv5w+\
rSne+uJ68d1f3JIf9feuGijvPVLVMhcKSAV24VYnnrJr438O33c4X+WEvRbhH3LPPfdc6fu+I4Q4\
MQzD5UqphGVZu8vl8raWlhY9Z86c5+65557ajh07zODgoJw2bVq8ceNG8cADD+Qrlcqq8fHxI8Mw\
vBBISSlvlVLuWrt27Xu4/wsDKC1Eh1k3bwAAAABJRU5ErkJggg==";

var style='\
	div#shaarli-box {\
		z-index: 1000;\
		visibility: hidden;\
		position: fixed;\
		top: 30px;\
		right: 30px;\
		width: 150px;\
		padding: 5px;\
		border-color: #ccc;\
		border-radius: 2px;\
		box-shadow: 2px 2px 2px #999;\
		background: #fff;\
	}\
	\
	div#shaarli-box:hover, div#shaarli-box.show {\
		visibility: visible;\
	}\
	\
	div#shaarli-box.found {\
		background-position: 0px 0px;\
	}\
	div#shaarli-box #icon {\
		//border: 1px solid black;\
		visibility: visible;\
		width: 30px;\
		height: 28px;\
		position: fixed;\
		top: 10px;\
		right: 10px;\
		background-repeat: no-repeat;\
		background-position: -30px 0px;\
		background-image: url(data:image/png;base64,'+tile+');\
	}\
	div#shaarli-box.found #icon {\
		background-position: 0px 0px;\
	}\
	div#shaarli-box div#config.hidden {\
		visibility: hidden;\
	}\
';

(function() {
	var addGlobalStyle = function(cl, css) {
		var head, style;
		head = document.getElementsByTagName('head')[0];
		if (!head) { return; }
		style = document.createElement('style');
		style.type = 'text/css';
		style.className = cl;
		style.innerHTML = css;
		head.appendChild(style);
	};


	var encode = function(str){
		return encodeURIComponent(str).replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
	};

	var checkURI = function(baseuri) {
		//console.log(document.URL+','+window.location.href);
		var loc = encode(window.location.href);

		GM_xmlhttpRequest({
			method: 'GET',
			url: baseuri+"?ws=url&term="+loc,
			onload: function(response) {
				console.log(response.status);
				if(response.status == 200) {
					sbox.classList.add('found');
				}
			}
		});
	};

	var SH_savecfg = function(key, val, evt) {
		console.log('saving '+key+'='+val+','+evt.keyCode);
		/*
		if(evt.keyCode == 9 || evt.keyCode == 13) {
			checkURI();
		}
		*/

		GM_setValue(key, val);
	};

	var SH_checkURI = function() {
		checkURI(GM_getValue('uri'));
		sbox.classList.remove('show');
	};

	var sbox;
	var buildInterface = function() {
		sbox = document.createElement('div');
		sbox.setAttribute('id', 'shaarli-box');
		addGlobalStyle('shaarli', style);

		sbox.insertAdjacentHTML('afterbegin', '\
				<div id="config">\
					Shaarli url:<br/>\
					<input id="url" name="url" type="text" size="15" />\
				</div>\
				\
				<div id="icon"></div>\
		');

		var body = document.getElementsByTagName('body')[0];
		body.appendChild(sbox);
		var input = document.getElementById('url');
		input.addEventListener('keyup', function(evt) { SH_savecfg('uri', this.value, evt); }, false);
		input.addEventListener('blur' , SH_checkURI, false);
	};

	var shaarli = function() {
		buildInterface();

		var uri = GM_getValue("uri");
		console.debug("shaarli uri="+uri);
		if (!uri) {
			console.log("shaarli uri not configured");
			sbox.classList.add('show');

			return;
		}

		document.getElementById('url').setAttribute('value', uri);
		checkURI(uri);
	};

	shaarli();
})();
