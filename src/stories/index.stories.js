import { storiesOf } from '@storybook/vue'
import { withKnobs, number } from '@storybook/addon-knobs'

import Fibonacci from '../components/Fibonacci.vue'

const stories = storiesOf('Storybook Knobs', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs({ escapeHTML: false }))

stories.add('fibonacci', () => ({
  components: { Fibonacci },
  props: {
    num: {
      type: Number,
      default: number('Number of elements', 3),
    },
  },
  template: '<fibonacci  :numberOfElements="num"></fibonacci>',
}))
