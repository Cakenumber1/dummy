import { useEffect } from 'react'

import { getRandomItem } from '@app/api'
import Container from '@app/components/baseContainer/BaseContainer.styled'
import { randInt } from '@app/utils/randInt'

import ItemContainer from './ItemContainer.styled'

const Item = () => {
  useEffect(() => {
    getRandomItem({ id: randInt() })
  }, [])

  return (
    <Container>
      <ItemContainer>
        <div>123</div>
      </ItemContainer>
    </Container>
  )
}

export default Item
