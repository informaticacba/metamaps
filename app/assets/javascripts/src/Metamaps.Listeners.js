/* global Metamaps, $ */

/*
 * Metamaps.Listeners.js.erb
 *
 * Dependencies:
 *  - Metamaps.Active
 *  - Metamaps.Control
 *  - Metamaps.JIT
 *  - Metamaps.Visualize
 */
Metamaps.Listeners = {
  init: function () {
    $(document).on('keydown', function (e) {
      if (!(Metamaps.Active.Map || Metamaps.Active.Topic)) return

      switch (e.which) {
        case 13: // if enter key is pressed
          Metamaps.JIT.enterKeyHandler()
          e.preventDefault()
          break
        case 27: // if esc key is pressed
          Metamaps.JIT.escKeyHandler()
          break
        case 65: // if a or A is pressed
          if (e.ctrlKey) {
            Metamaps.Control.deselectAllNodes()
            Metamaps.Control.deselectAllEdges()

            e.preventDefault()
            Metamaps.Visualize.mGraph.graph.eachNode(function (n) {
              Metamaps.Control.selectNode(n, e)
            })

            Metamaps.Visualize.mGraph.plot()
          }

          break
        case 69: // if e or E is pressed
          if (e.ctrlKey) {
            e.preventDefault()
            if (Metamaps.Active.Map) {
              Metamaps.JIT.zoomExtents(null, Metamaps.Visualize.mGraph.canvas)
            }
          }
          break
        case 77: // if m or M is pressed
          if (e.ctrlKey) {
            e.preventDefault()
            Metamaps.Control.removeSelectedNodes()
            Metamaps.Control.removeSelectedEdges()
          }
          break
        case 68: // if d or D is pressed
          if (e.ctrlKey) {
            e.preventDefault()
            Metamaps.Control.deleteSelected()
          }
          break
        case 72: // if h or H is pressed
          if (e.ctrlKey) {
            e.preventDefault()
            Metamaps.Control.hideSelectedNodes()
            Metamaps.Control.hideSelectedEdges()
          }
          break
        default:
          break; // alert(e.which)
      }
    })

    $(window).resize(function () {
      if (Metamaps.Visualize && Metamaps.Visualize.mGraph) Metamaps.Visualize.mGraph.canvas.resize($(window).width(), $(window).height())
      if ((Metamaps.Active.Map || Metamaps.Active.Topic) && Metamaps.Famous && Metamaps.Famous.maps.surf) Metamaps.Famous.maps.reposition()
      if (Metamaps.Active.Map && Metamaps.Realtime.inConversation) Metamaps.Realtime.positionVideos()
    })
  }
}; // end Metamaps.Listeners