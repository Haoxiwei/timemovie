/**
 * Created by Administrator on 2016/11/21.
 //*/

/**
 *封装 获取对象内部文本
 * @param element
 * @returns {*}
 */
function getInnerText(element) {
    if (typeof element.innerText === "string") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}


/**
 * 封装 设置对象内容文本
 * @param element
 * @param content
 */
function setInnerText(element, content) {
    if (typeof element.innerText === "string") {
        element.innerText = content;
    } else {
        element.textContent = content;
    }
};


/**
 * 封装 改变类名属性
 * @param element
 * @param oldStr
 * @param newStr
 */
function replaceClassName(element, oldStr, newStr) {
    var arr = element.className.split(" ");
    for (var a = 0; a < arr.length; a++) {
        if (arr[a] === oldStr) {
            arr[a] = newStr;
        }
    }
    element.className = arr.join(" ");
}


/**
 * 封装 获取下一个兄弟元素 的兼容方法
 * @param element
 * @returns {*}
 */
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var next = element.nextSibling;
        while (next && 1 !== next.nodeType) {
            next = next.nextSibling;
        }
        return next;
    }
};


/**
 * 封装 获取上一个兄弟元素 的兼容方法
 * @param element
 * @returns {*}
 */
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        var prev = element.previousSibling;
        while (prev && 1 !== prev.nodeType) {
            prev = prev.previousSibling;
        }
        return prev;
    }
};


/**
 * 封装 获取当前元素的第一个子元素
 * @param element
 * @returns {*}
 */
function getFirstElement(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var fir = element.firstChild;
        while (fir && 1 !== fir.nodeType) {
            fir = fir.nextSibling;
        }
        return fir;
    }
};


/**
 * 封装 获取当前元素的最后一个子元素
 * @param element
 * @returns {*}
 */
function getLastElement(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var lst = element.lastChild;
        while (lst && 1 !== lst.nodeType) {
            lst = lst.previousSibling;
        }
        return lst;
    }
};


/**
 * 通过类名获取页面元素的兼容性写法
 * @param element：获取元素的对象
 * @param className：类名
 * @returns {返回获得的页面元素}
 */
function getElementsByClassName(element, className) {
    if (element.getElementsByClassName) {
        return element.getElementsByClassName(className);
    } else {
        var filterArr = [];//符合类名条件的容器
        var elements = element.getElementsByTagName("*");//获得当前元素的所有子元素
        for (var i = 0; i < elements.length; i++) {//循环变量每一个元素
            var arr = elements[i].className.split(" ");//获得元素的className 根据" "分割类名，得到一个数组
            for (var j = 0; j < arr.length; j++) {
                if (className === arr[j]) {//将拥有这个类名的元素添加到数组中
                    filterArr.push(elements[i]);
                    break;
                }
            }
        }
        return filterArr;
    }
};


/**
 * 深层复制数组
 * @param arr
 * @returns {Array}
 */
function deepclone(arr) {
    var newArr = [];
    for (var a = 0; a < arr.length; a++) {
        newArr.push(arr[a]);
    }
    return newArr;
};


/**
 * 将字符串数组的顺序进行反转
 * @param arr
 * @returns {*}
 */
function reverse(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}


/**
 * 给window追加 onload事件 不会顶掉之前的函数
 * @param fn
 */
function addLoadEvent(fn) {
    var oldOnLoad = window.onload;
    if (typeof oldOnLoad === "function") {
        window.onload = function () {
            oldOnLoad();
            fn();
        };
    } else {
        //window.onload = function () {fn();};
        window.onload = fn;
    }
}


/**
 * 获取被卷曲的头部高度/左侧宽度
 * @returns {{}}
 */
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}


/**
 *让 任意对象 移动到 指定位置(匀速运动)
 * @param obj
 * @param target
 */
function animateeven(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = 10;
        step = leader < target ? step : -step;
        if (Math.abs(target - leader) >= Math.abs(step)) {
            leader = leader + step;
            obj.style.left = leader + "px";
        } else {
            obj.style.left = target + "px";
            clearInterval(obj.timer);
        }
    }, 15);
}


/**
 * 让 任意对象 移动到 指定位置(缓慢运动)
 * @param obj
 * @param target
 */
function animateFToS(obj, target, speed) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = (target - leader) / speed;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        obj.style.left = leader + "px";
        if (leader === target) {
            clearInterval(obj.timer);
        }
    }, 15);
}


/**
 * 获取 任意对象 的 任意属性
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
};


/**
 * 把 任意对象 的 任意数值属性 改变为 任意的目标值
 * @param obj
 * @param attr
 * @param target
 */
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15);
}

/**
 *页面可视范围
 * @returns {{}}
 */
function client() {
    var clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
    var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    var o = {};
    o.width = clientWidth;
    o.height = clientHeight;
    return o;
}


/**
 * 获取数组中的最小值以及下标
 * @param arr
 * @returns {{}}
 */
function getMin(arr) {
    var min = {};
    min.index = 0;
    min.value = arr[min.index];
    for (var a = 0; a < arr.length; a++) {
        if (min.value > arr[a]) {
            min.value = arr[a];
            min.index = a;
        }
    }
    return min;
};


/**
 * 目标事件
 * @type {{getEvent: Function, getPageX: Function, getPageY: Function, stopPropagation: Function, getTarget: Function}}
 */
var eventUtil = {
    getEvent: function (event) {
        return event || window.event;
    },//获取事件目标
    getPageX: function (event) {
        return event.pageX || event.clientX + document.documentElement.scrollLeft;
    },//获取X轴坐标
    getPageY: function (event) {//获取Y轴坐标
        return event.pageY || event.clientY + document.documentElement.scrollTop;
    },//获取Y轴坐标
    stopPropagation: function (event) {//阻止冒泡事件传播
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },//阻止冒泡事件传播
    getTarget: function (event) {//获取事件目标
        return event.target || event.srcElement;
    }//获取事件目标
};


/**
 * 去除 任意字符串的 两端的空白符
 * @param str
 * @returns {XML|void|string}
 */
function trim(str){
    return str.replace(/^\s+|\s+$/g, "");
}
