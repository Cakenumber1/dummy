import Home from '@app/components/home'
import News from '@app/components/news'

const LINKS = {
  404: {
    element: <div>404</div>,
    name: '404',
    path: '*',
  },
  home: {
    element: <Home />,
    name: 'home',
    path: '/',
  },
  news: {
    element: <News />,
    name: 'news',
    path: '/news',
  },
}

export default LINKS
