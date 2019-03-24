// 兼容IE的事件处理方法
const eventUtils = {
    getEvent: (event) => {
        return event || window.event;
    },
    getTarget: (event) => {
        return event.target || event.srcElement;
    },
    preventDefault: (event) => {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    stopPropogation: (event) => {
        if (event.stopPropogation) {
            event.stopPropogation()
        } else {
            event.cancelBubble = true;
        }
    },
    addEventHandler: (el, type, handler) => {
        if (el.addEventListener) {
            el.addEventListener(type, handler, false)
        } else if (el.attachEvent) {
            el.attachEvent('on' + type, handler)
        } else {
            el['on' + 'event'] = handler
        }
    },
    removeEventHandler: (el, type, handler) => {
        if (el.removeEventListener) {
            el.removeEventListener(type, handler, false);
        } else if (el.detachEvent) {
            el.detachEvent('on' + type, handler)
        } else {
            el['on' + type] = null
        }
    }
}

// 自定义事件相关


export { eventUtils }