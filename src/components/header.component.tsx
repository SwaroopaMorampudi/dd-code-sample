import * as React from 'react'
import { useDispatch } from 'react-redux'
import * as crudActions from '../actions/crudActions'
import logo from '../assets/images/logo.png'
import Tab from './tab.component'

const Header = () => {
    const dispatch = useDispatch()
    const [fetchAllActive, setfetchAllActive] = React.useState(true)
    const [fetchFavouriteActive, setfetchFavouriteActive] = React.useState(
        false
    )
    React.useEffect(() => {
        dispatch(crudActions.fetchAll() as any)
    }, [dispatch])
    const getFavourites = localStorage.getItem('favourites')
    if (getFavourites === null || getFavourites === undefined) {
        localStorage.setItem('favourites', JSON.stringify([]))
    }
    const handleOnClick = () => {
        dispatch(crudActions.fetchAll() as any)
        setfetchAllActive(true)
        setfetchFavouriteActive(false)
    }
    const handleOnFavouriteClick = () => {
        dispatch(crudActions.fetchFavourites() as any)
        setfetchAllActive(false)
        setfetchFavouriteActive(true)
    }
    return (
        <div className="backgroundImage">
            <div className="container">
                <div className="header d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <img src={logo} alt="logo" className="logo" />
                    </div>
                </div>
                <div className="spellTab">
                    <div className="d-flex justify-content-between align-items-center ">
                        <p className="spellText">SPELLS</p>
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <div onClick={() => handleOnClick()}>
                        <Tab value={'All'} isActive={fetchAllActive} />
                    </div>
                    <div onClick={() => handleOnFavouriteClick()}>
                        <Tab
                            value={'Favourite'}
                            isActive={fetchFavouriteActive}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
