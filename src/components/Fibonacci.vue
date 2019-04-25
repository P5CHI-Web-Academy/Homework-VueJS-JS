<template>
  <div class="wrap">
    <input v-model="fibonacciElementsLenght" class="count" placeholder="edit me">
    <div id="fibonacci" class="fibonacci"></div>
  </div>
</template>

<script>
import fibonacci from '../helpers/fibonacci.js'

export default {
  data() {
    return {
      fibonacciElementsLenght: 9,
      colors: ['#233D4D', '#FE7F2D', '#FCCA46', '#A1C181', '#579C87'],
      colorPosition: 0,
      direction: ['horizontal', 'vertical'],
    }
  },
  methods: {
    drawFibonacci: function(n) {
      // create first fibonacci element
      let element = this.createNewElement('1')

      // get fibonaccie sequence
      const fibonacciArray = fibonacci(n)
      // remove first element from sequence
      fibonacciArray.shift()
      fibonacciArray.shift()

      // create rest of fibonacci elements
      let step = 4
      fibonacciArray.forEach((number, index) => {
        const divCurrent = this.createNewElement(number)

        const divContainer = document.createElement('div')
        divContainer.className = `fibonacci--${this.direction[index & 1]}`

        divContainer.appendChild(step < 3 ? divCurrent : element)
        divContainer.appendChild(step < 3 ? element : divCurrent)

        element = divContainer

        step = step === 4 ? 1 : step + 1
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
      element.style.width = number * 10
      element.style.height = number * 10
      element.style.fontSize = number * 7

      // add number in element
      const t = document.createTextNode(number)
      element.appendChild(t)

      return element
    },
    getColor() {
      const tempColorPosition = this.colorPosition
      this.colorPosition =
        this.colorPosition === this.colors.length - 1
          ? 0
          : this.colorPosition + 1

      return this.colors[tempColorPosition]
    },
  },
  mounted() {
    document
      .getElementById('fibonacci')
      .appendChild(this.drawFibonacci(this.fibonacciElementsLenght))
  },
  updated() {
    if (!(this.fibonacciElementsLenght >= 1)) return

    const fibonacciContainer = document.getElementById('fibonacci')

    // remove inside fibonacci container
    fibonacciContainer.innerHTML = ''

    // reset colors
    this.colorPosition = 0

    // add fibonacci elements
    fibonacciContainer.appendChild(
      this.drawFibonacci(this.fibonacciElementsLenght),
    )
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

.count {
  width: 250px;
  padding: 7px 10px;
  margin: 20px;
  color: #fff;
  background-color: #243d4c;
  border: 0;
  border-radius: 5px;
  outline: none;
  box-shadow: 0 8px 7px -8px #fe7f2d;
}

.fibonacci {
  color: #fff;

  &--horizontal {
    display: flex;
  }

  &--vertical {
    display: flex;
    flex-direction: column;
  }

  &__element {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
