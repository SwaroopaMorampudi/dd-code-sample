import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
import Card from 'react-bootstrap/Card'
import rectangle from '../assets/images/spell-lights.svg'
import fav from '../assets/images/fav-color.png'
import * as crudActions from '../actions/crudActions'
import CardData from './card-data.component'

interface ButtonProps {
    eventKey: string
    children: React.ReactNode
    data: any
}
function CardHeader({ children, ...props }: ButtonProps) {
    const dispatch = useDispatch()
    const decoratedOnClick = useAccordionButton(props.eventKey, () => {
        dispatch(crudActions.fetchSpellDetails(props.data) as any)
    })
    const handleOnFavouriteClick = () => {
        props.data.isFavourite = !props.data.isFavourite
        props.data.isFavourite
            ? dispatch(crudActions.addToFavourite(props.data) as any)
            : dispatch(crudActions.removeFavourite(props.data) as any)
    }

    return (
        <div className="card-link d-flex accordion-button" onClick={decoratedOnClick}>
            <ul className="d-flex justify-content-between w-full cardElement align-items-center">
                <li className="width25 mobile-w100">
                    <img src={rectangle} alt="" />
                    <div className="d-flex flex-column name-columns">
                        <div>{children}</div>
                    </div>
                </li>
                <li id="heart" className="w-5">
                    <div onClick={handleOnFavouriteClick}>
                        {
                            props.data.isFavourite
                                ? (
                                    <img src={fav} className="heart" alt="" data-testid="data-testid-fav-spell-card" />
                                )
                                : (
                                    <span className="heart fa fa-heart-o" />
                                )

                        }

                    </div>
                </li>
            </ul>
        </div>
    )
}

export default function SpellCard() {
    const [spellsList, setSpellsList] = React.useState([])
    const spellsData = useSelector((state: any) => state.spellsList)
    const favouritesSpellsData = useSelector((state: any) => state.favouriteList)

    React.useEffect(() => {
        spellsData && setSpellsList(spellsData)
    }, [spellsData])

    React.useEffect(() => {
        favouritesSpellsData && setSpellsList(favouritesSpellsData)
    }, [favouritesSpellsData])

    return (
        <>
            {spellsList && (
                <Accordion title='Accordion'>
                    {spellsList.map((spell: any, index: any) => (
                        <Card key={index} data-testid="data-testid-spell-card">
                            <Card.Header>
                                <CardHeader eventKey={spell.index} data={spell}>
                                    {spell.name}
                                </CardHeader>
                            </Card.Header>
                            <Accordion.Collapse eventKey={spell.index}>
                                <Card.Body>
                                    <CardData id={'#collapseOne' + spell.index} />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    ))}
                </Accordion>
            )}
        </>
    )
}
