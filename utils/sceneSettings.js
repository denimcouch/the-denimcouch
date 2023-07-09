// TODO: convert to typescript file eventually
export const sceneSettings = {
  screen: {
    elem: null,
    callback: null,
    ctx: null,
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    init: function (id, callback, initRes) {
      this.elem = document.getElementById(id)
      this.callback = callback || null
      if (this.elem.tagName == 'CANVAS') {
        this.ctx = this.elem.getContext('2d')
      }
      globalThis.window.addEventListener(
        'resize',
        function () {
          this.resize()
        }.bind(this),
        false
      )
      this.elem.onselectstart = function () {
        return false
      }
      this.elem.ondrag = function () {
        return false
      }
      initRes && this.resize()
      return this
    },
    resize: function () {
      let o = this.elem
      this.width = o.offsetWidth
      this.height = o.offsetHeight
      for (this.left = 0, this.top = 0; o != null; o = o.offsetParent) {
        this.left += o.offsetLeft
        this.top += o.offsetTop
      }
      if (this.ctx) {
        this.elem.width = this.width
        this.elem.height = this.height
      }
      this.callback && this.callback()
    }
  }
}
