import { render } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

export const renderWithBaseComponents = (component: React.ReactNode, { route }: { route: string }) =>
  render(
    <RecoilRoot>
      <MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>
    </RecoilRoot>
  )
