import * as d3Shape from 'd3-shape'

const findPoint = function (angle, r) {
  return {
    x: r * Math.sin(angle),
    y: -r * Math.cos(angle)
  }
}

const drawLabels = function (labels, xScale, rScale, q, rotate) {
  return labels.map((obj) => {
    let point = findPoint(xScale(obj.angle) - q + rotate, rScale(obj.radius))
    let angle = obj.angle
    // don't go upside-down
    if (angle > 90) {
      angle -= 180
      obj.align = obj.align === 'left' ? 'right' : 'left'
    } else if (angle < -90) {
      angle += 180
      obj.align = obj.align === 'left' ? 'right' : 'left'
    }
    // console.log(obj.rotate)
    if (angle > 0) {
      angle -= obj.rotate
    } else {
      angle += obj.rotate
    }
    return {
      type: 'label',
      x: point.x,
      y: point.y,
      angle: angle,
      align: obj.align === 'left' ? 'start' : 'end',
      size: obj.size,
      text: obj.text,
      color: obj.color
    }
  })
}
export default drawLabels
