import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div({
  margin: '40px 56px',
  maxWidth: 500,
})

export default () => (
  <Wrapper>
    <h1>Page not found</h1>
    <p>
      If this page should be here, or if there’s a broken link on this site,
      please let us know of the issue:
    </p>
    <p>
      <code>
        <a href="mailto:feedback@graphql.guide">feedback@graphql.guide</a>
      </code>
    </p>
  </Wrapper>
)
