class CustomEvent {
    constructor() {
        this.handlers = {}
    }
    addhandler(type, handler) {
        if (this.handlers[type] === undefined) {
            this.handlers[type] = []
        }
        this.handlers[type].push(handler)
    }
    removehandler(type, handler) {
        if (Array.isArray(this.handlers[type])) {
            for(let i = 0, l = this.handlers[type].length; i < l; i++) {
                if (this.handlers[type] === handler) {
                    break;
                }
            }
            this.handlers[type].splice(i, 1)
        }
    }
    emit(event) {
        if (!event.target) event.target = this;
        if (Array.isArray(this.handlers[event.type])) {
            for(let handler of this.handlers[event.type]) {
                handler(event)
            }
        }
    }
}
export { CustomEvent }