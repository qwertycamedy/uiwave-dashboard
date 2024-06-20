import MyPage from 'components/_ui/page/MyPage'
import NotFound from 'components/notFound/NotFound'

const NotFoundPage = () => {
  return (
    <MyPage metaTitle='404' metaDescr='Page not found' withHeader={false}>
        <NotFound title={'404'} subtitle={'Page is not found.'} goBackNeed={true} />
    </MyPage>
  )
}

export default NotFoundPage