import { useEffect } from 'react'

import { search } from '@app/api'
import Container from '@app/components/baseContainer/BaseContainer.styled'

import NewsContainer from './NewsContainer.styled'

const Item = () => {
  useEffect(() => {
    search({ })
  }, [])

  return (
    <Container>
      <NewsContainer>
        213
      </NewsContainer>
    </Container>
  )
}

export default Item
