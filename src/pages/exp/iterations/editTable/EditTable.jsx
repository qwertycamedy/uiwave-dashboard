
import Head from "./head/Head"
import Items from "./items/Items"
import { clsx } from "clsx"


const EditTable = ({items, total}) => {

    const ifelse = items === null || items?.length < 1 || items === undefined;

  return (
    <table className={clsx("table",  {'table__404': ifelse} )}>
        <Head total={total} />
        <Items items={items} ifelse={ifelse} total={total} />
    </table>
  )
}

export default EditTable