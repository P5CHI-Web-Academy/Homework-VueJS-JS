<template>
  <div class="wrap">
    <div id="fibonacci" class="fibonacci"></div>
  </div>
</template>

<script>
import fibonacci from '../helpers/fibonacci.js'

export default {
  props: {
    numberOfElements: {
      type: Number,
      default: 9,
    },
  },
  data() {
    return {
      fibonacciElementsLenght: 9,
      colors: ['#233D4D', '#FE7F2D', '#FCCA46', '#A1C181', '#579C87'],
      colorPos: 0,
      direction: [
        'vertical',
        'horizontal',
        'vertical-reverse',
        'horizontal-reverse',
      ],
    }
  },
  methods: {
    drawFibonacci: function(n) {
      // create first fibonacci element
      let element = this.createNewElement(1)

      // get fibonaccie sequence
      const fibonacciArray = fibonacci(n)
      // remove first element from sequence
      fibonacciArray.shift()

      // create rest of fibonacci elements
      fibonacciArray.forEach((number, i) => {
        // skip the first element because it was created above.
        if (i === 0) return

        const divCurrent = this.createNewElement(number)

        const elementTemp = document.createElement('div')
        elementTemp.className = `fibonacci--${this.direction[i % 4]}`

        elementTemp.appendChild(element)
        elementTemp.appendChild(divCurrent)

        element = elementTemp
      })

      return element
    },
    createNewElement(number) {
      // create element
      const element = document.createElement('div')

      // set element class
      element.className = 'fibonacci__element'

      // add background color
      element.style.backgroundColor = this.getColor()

      // set element size
      element.style.width = `${number * 10}px`
      element.style.height = `${number * 10}px`
      element.style.fontSize = `${number * 7}px`

      // add number in element
      const t = document.createTextNode(number)
      element.appendChild(t)

      return element
    },
    getColor() {
      const tempColorPos = this.colorPos
      this.colorPos += this.colorPos === this.colors.length - 1 ? -4 : 1

      return this.colors[tempColorPos]
    },
  },
  mounted() {
    document
      .getElementById('fibonacci')
      .appendChild(this.drawFibonacci(this.numberOfElements))
  },
  watch: {
    numberOfElements: function(newVal) {
      if (!(this.numberOfElements >= 1)) return

      const fibonacciContainer = document.getElementById('fibonacci')

      // remove inside fibonacci container
      fibonacciContainer.innerHTML = ''

      // reset colors
      this.colorPosition = 0

      // add fibonacci elements
      fibonacciContainer.appendChild(this.drawFibonacci(this.numberOfElements))
    },
  },
}

document.body.appendChild
</script>

<style lang="scss">
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.fibonacci {
  color: #fff;

  &--horizontal {
    display: flex;
  }

  &--horizontal-reverse {
    display: flex;
    flex-direction: row-reverse;
  }

  &--vertical {
    display: flex;
    flex-direction: column;
  }

  &--vertical-reverse {
    display: flex;
    flex-direction: column-reverse;
  }

  &__element {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
