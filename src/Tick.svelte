<script>
  import { ticks } from './stores.js'
  import colors from './lib/colors'
  export let angle = 0
  export let at = 0
  angle = angle || at
  export let radius = 0
  export let rotate = 90
  export let size = 1.5
  export let align = angle < 0 ? 'left' : 'right'
  export let text = ''

  export let color = 'grey'
  color = colors[color] || color

  ticks.update(arr => {
    arr.push({
      text: text,
      color: color,
      align: align,
      angle: Number(angle),
      radius: Number(radius),
      size: Number(size),
      rotate: Number(rotate)
    })
    return arr
  })
</script>

<div />
