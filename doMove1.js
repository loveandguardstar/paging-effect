/**
 * Created by lover star on 2018/7/1.
 */
var Move = function (obj, json, endFn) {

    clearInterval(obj.timer);

    obj.timer = setInterval(function () {
        var bBtn = true;

        for(attr in json) {
            var iCur = 0;
            if(attr == 'opacity') {
                if(Math.round(parseFloat(getStyle(obj,attr))*100)==0){
                    iCur = Math.round(parseFloat(getStyle(obj,attr))*100);
                }
                else{
                    iCur = Math.round(parseFloat(getStyle(obj,attr))*100) || 100;
                }

            }
            else {
                iCur = parseInt(getStyle(obj,attr)) || 0;
            }

            var iSpeed = (json[attr] - iCur)/8;

            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

            if(iCur != json[attr]) {
                btn = false;
            }

            if(attr == 'opacity'){
                obj.style.filter = 'alpha(opacity=' +(iCur + iSpeed)+ ')';
                obj.style.opacity = (iCur + iSpeed)/100;

            }
            else{
                obj.style[attr] = iCur + iSpeed + 'px';
            }

            if(bBtn) {
                clearInterval(obj.timer);
                if(endFn) {
                    endFn.call(obj)
                }
            }

        }
    }, 30)

};

var Move1 = function (obj, json, endFn) {
     clearInterval(obj.timer);

    obj.timer = setInterval(function () {

        var bBtn = true;

        for(attr in json) {
            var iCur = 0;
            if(attr == 'opacity') {
                if(Math.round(parseFloat(getStyle(obj, attr)) * 100) == 0) {
                    iCur = Math.round(parseFloat(getStyle(obj, attr)) * 100) || 0
                }
                else {
                    iCur = Math.round(parseFloat(getStyle(obj, attr)) * 100) || 100;
                }
            }

            var iSpeed = (iCur - json[attr]) / 8;

            if(iCur != 'opacity') {
                bBtn = false;
            }

            if(attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:'+ iSpeed + iCur + ')';
                obj.style.opacity = (iSpeed + iCur) / 100;
            }
            else {
                obj.style[attr] = iCur + iSpeed + 'px';
            }
        }
    },30)
};

var getStyle = function(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr]
};