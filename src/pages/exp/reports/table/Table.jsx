
import Head from "./head/Head"
import Items from "./items/Items"



const Table = ({items, expId}) => {

  return (
    <table className={"table"}>
        <Head />
        <Items items={items} expId={expId} />
    </table>
  )
}

export default Table