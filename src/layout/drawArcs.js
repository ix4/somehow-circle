import * as d3Shape from 'd3-shape'

const drawArcs = function (arcs, xScale, rScale, q, rotate) {
  return arcs.map((obj) => {
    let r = rScale(obj.radius)
    let attrs = {
      startAngle: xScale(obj.to) - q + rotate,
      endAngle: xScale(obj.from) - q + rotate,
      innerRadius: r,
      outerRadius: r + rScale(obj.width)
    }
    let path = d3Shape.arc()(attrs)
    return {
      type: 'arc',
      path: path,
      color: obj.color
    }
  })
}
export default drawArcs
