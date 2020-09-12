import '@testing-library/jest-dom/extend-expect'

import { Large, Primary, Secondary, Small } from '@/stories/Button.stories'
import { render, screen } from '@testing-library/vue'

import Button from '@/components/Button.vue'

it('renders the button in the primary state', () => {
  render(Button, { props: Primary.args })

  const btn = screen.getByRole('button')
  expect(btn).toHaveTextContent('Button')
  expect(btn).toHaveClass(
    'storybook-button--primary',
    'storybook-button--medium'
  )
})

it('renders the button in the secondary state', () => {
  render(Button, { props: Secondary.args })

  const btn = screen.getByRole('button')
  expect(btn).toHaveTextContent('Button')
  expect(btn).toHaveClass('storybook-button--medium')
  expect(btn).not.toHaveClass('storybook-button--primary')
})

it('renders the button in the Large state', () => {
  render(Button, { props: Large.args })

  const btn = screen.getByRole('button')
  expect(btn).toHaveTextContent('Button')
  expect(btn).toHaveClass('storybook-button--large')
  expect(btn).not.toHaveClass('storybook-button--primary')
})

it('renders the button in the Large state', () => {
  render(Button, { props: Small.args })

  const btn = screen.getByRole('button')
  expect(btn).toHaveTextContent('Button')
  expect(btn).toHaveClass('storybook-button--small')
  expect(btn).not.toHaveClass('storybook-button--primary')
})
