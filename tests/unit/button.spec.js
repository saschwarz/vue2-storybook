import '@testing-library/jest-dom/extend-expect'

import { Large, Primary, Secondary, Small } from '@/stories/Button.stories'
import { fireEvent, render, screen } from '@testing-library/vue'

import Button from '@/components/Button.vue'

it('renders the button in the primary state', async () => {
  const { emitted } = render(Button, { props: Primary.args })

  const btn = screen.getByRole('button')
  expect(btn).toHaveTextContent('Button')
  expect(btn).toHaveClass(
    'storybook-button--primary',
    'storybook-button--medium'
  )
  await fireEvent.click(btn)
  expect(emitted()).toHaveProperty('onClick')
})

it('renders the button in the secondary state', async () => {
  render(Button, { props: Secondary.args })

  const btn = screen.getByRole('button')
  expect(btn).toHaveTextContent('Button')
  expect(btn).toHaveClass('storybook-button--medium')
  expect(btn).not.toHaveClass('storybook-button--primary')
})

it('renders the button in the Large state', async () => {
  render(Button, { props: Large.args })

  const btn = screen.getByRole('button')
  expect(btn).toHaveTextContent('Button')
  expect(btn).toHaveClass('storybook-button--large')
  expect(btn).not.toHaveClass('storybook-button--primary')
})

it('renders the button in the Large state', async () => {
  render(Button, { props: Small.args })

  const btn = screen.getByRole('button')
  expect(btn).toHaveTextContent('Button')
  expect(btn).toHaveClass('storybook-button--small')
  expect(btn).not.toHaveClass('storybook-button--primary')
})
