var hsp={};
(function(){hsp=new function(){var f="initapp gettwitteraccounts refresh dropuser sendtoapp sendprofiletoapp closepopup sendcomposedmsgtoapp sendassignmentupdates getauth getmemberinfo savedata getdata echo".split(" "),d=this,e=function(a){a||(a=function(){});if("undefined"===typeof JSON){var b=document.createElement("script");b.type="text/javascript";b.async=!0;b.src="https://d2l6uygi1pgnys.cloudfront.net/jsapi/json2.js";var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c);
var d=function(){"undefined"!==typeof JSON?a():setTimeout(d,100)};setTimeout(d,100)}else a()};this.messageSender=function(a){a.url=window.location.href;a.windowName=window.name;var b=window.parent;e(function(){var c=JSON.stringify(a);b.postMessage(c,"https://hootsuite.com")})};this.messageListener=function(a){if("https://hootsuite.com"===a.origin){var b=a.data;e(function(){var a=JSON.parse(b),c=a.event,a=a.params,e="bind"+c;0<=f.indexOf(c)&&(c=d[e],"undefined"!==typeof c&&c.apply(null,a))})}};this.init=
function(a){window.addEventListener?window.addEventListener("message",hsp.messageListener,!1):window.attachEvent("onmessage",hsp.messageListener);a&&(a.callBack&&d.bind("initapp",a.callBack),a.useTheme&&"false"!==a.useTheme&&"0"!==a.useTheme&&p(a));hsp.messageSender({action:"initApp",sendToAppDisableList:a.sendToAppDisableList,sendProfileToAppDisableList:a.sendProfileToAppDisableList});return d};this.trigger=function(a,b){c("trigger",a,b)};this.composeMessage=function(a,b){"undefined"==typeof b&&
(b={});c("compose",a,b);return d};this.attachFileToMessage=function(a){c("attachfiletomessage",a);return d};this.retweet=function(a,b){c("retweet",a,b);return d};this.showUser=function(a){a=a.replace("@","");c("userinfo",a);return d};this.quickSearch=function(a){c("quicksearch",a);return d};this.showTrends=function(){c("trends");return d};this.showStatusMessage=function(a,b){c("statusmsg",a,b,null,"status");return d};this.clearStatusMessage=function(){c("statusmsgclear",null,null,null,"status");return d};
this.showFollowDialog=function(a,b){c("showfollowdialog",a,b);return d};this.customUserInfo=function(a){e(function(){var b=JSON.stringify(a);c("customuserinfo",b)});return d};this.showImagePreview=function(a,b){c("showimagepreview",a,b);return d};this.startAppTokenAuth=function(){c("startapptokenauth")};this.editAppAuth=function(){c("editappauth")};this.reloadApp=function(a){c("reloadapp")};this.updatePlacementSubtitle=function(a){c("updateplacementsubtitle",a,null,null,"bg")};this.saveData=function(a,
b){"undefined"!=typeof b&&(d.bindsavedata=function(a){b(a)});c("savedata",a)};this.getData=function(a){"undefined"!=typeof a&&(d.bindgetdata=function(b){a(b)});c("getdata")};this.assignItem=function(a){e(function(){var b=JSON.stringify(a);b&&c("assignItem",b)});return d};this.resolveItem=function(a){e(function(){var b=JSON.stringify(a);b&&c("resolveItem",b)});return d};this.showCustomPopup=function(a,b,d,m){var n={url:a,title:b,w:d,h:m};e(function(){var a=JSON.stringify(n);c("showCustomPopup",a)})};
this.closeCustomPopupFn=function(){c("closeCustomPopup")};this.closeCustomPopup=function(a,b){parent.frames[a+"_"+b].hsp.closeCustomPopupFn()};this.getTwitterAccounts=function(a){d.bindgettwitteraccounts=function(b){a(b)};c("gettwitteraccounts",null,null,null,"bg")};this.getAuth=function(a){d.bindgetauth=function(b){a(b)};c("getAuth")};this.getMemberInfo=function(a){d.bindgetmemberinfo=function(b){a(b)};c("getmemberinfo")};this.bind=function(a,b){if(a&&b&&"undefined"!==typeof b&&0<=f.indexOf(a)){var c=
a.toLowerCase();d["bind"+c]=b}hsp.messageSender({action:"bind",event:a});return d};var c=function(a,b,c,d,e){hsp.messageSender({action:a,p1:b,p2:c})},p=function(a){var b=null,c=null,d=0,e=a.onThemeLoad?a.onThemeLoad:function(){},f=function(){e();b&&(clearTimeout(b),b=null);c&&(document.body.removeChild(c),c=null)},k=function(){d++;var a=document.getElementById(h),c;a.currentStyle?c=a.currentStyle.position:window.getComputedStyle&&(c=document.defaultView.getComputedStyle(a,null).getPropertyValue("position"));
"fixed"==c||10<=d?f():b=setTimeout(k,100)},g=document.createElement("link");g.type="text/css";g.rel="stylesheet";g.href="https://d2l6uygi1pgnys.cloudfront.net/jsapi/2-0/assets/css/ad_default.css";g.onload=function(){f()};var l=document.getElementsByTagName("head");l.length&&l[0].appendChild(g);if(a.onThemeLoad){var h="hsLoadCheck",c=document.createElement("div");c.id=h;c.style.cssText="display:none;";document.body.appendChild(c);b=setTimeout(k,100)}}}})(); 