import Link from '@app/components/link/Link.styled'
import LinkContainer from '@app/components/link/LinkContainer.styled'
import links from '@app/links'

import NavContainer from './NavContainer.styled'

const Nav = () => (
  <NavContainer>
    <LinkContainer>
      <Link to={links.home.path}>{links.home.name}</Link>
    </LinkContainer>
    <LinkContainer>
      <Link to={links.news.path}>{links.news.name}</Link>
    </LinkContainer>
  </NavContainer>
)

export default Nav
