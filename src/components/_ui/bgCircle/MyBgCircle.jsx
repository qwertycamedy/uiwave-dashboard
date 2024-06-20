import cl from './MyBgCircle.module.scss'

const MyBgCircle = ({classNames, bgColor}) => {
  return (
    <span className={cl.circle + ` ${classNames}`} style={{background: bgColor}} />
  )
}

export default MyBgCircle