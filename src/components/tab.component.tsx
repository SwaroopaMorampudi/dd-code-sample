import * as React from 'react'
import all from '../assets/images/fav-tab.png'

interface Props {
    value: string
    isActive: boolean
}

const Tab = (props: Props) => {
    return (
        <a
            className={
                props.isActive
                    ? 'nav-item nav-link active'
                    : 'nav-item nav-link'
            }
            data-toggle="tab"
            href="#allTab"
            style={{ padding: 0 }}
        >
            <img src={all} style={{ margin: 'auto' }} alt="" />
            <p>{props.value}</p>
        </a>
    )
}

export default Tab
