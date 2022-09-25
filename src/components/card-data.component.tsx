import * as React from 'react'
import { useSelector } from 'react-redux'

interface Props {
  id: string
}

export default function CardData (props: Props) {
  const data = useSelector((state: any) => state.spellDetails)
  return (
    data && (
            <div>
                <div className="w-85 justify-content-between grid-container">
                    <div>
                        <div>Level</div>
                        <p>
                            {data.level
                              ? data.level
                              : data.level === 0
                                ? data.level
                                : '-'}
                        </p>
                    </div>
                    <div>
                        <div>Casting Time</div>
                        <p>{data.casting_time ? data.casting_time : '-'}</p>
                    </div>
                    <div>
                        <div>Range/Area</div>
                        <p>{data.range ? data.range : '-'}</p>
                    </div>
                    <div>
                        <div>Components</div>
                        <p>{data.components ? data.components : '-'}</p>
                    </div>
                    <div>
                        <div>Duration</div>
                        <p>{data.duration ? data.duration : '-'}</p>
                    </div>
                    <div>
                        <div>School</div>
                        <p>{data.school ? data.school.name : '-'}</p>
                    </div>
                    <div>
                        <div>Attack Save</div>
                        <p>{data.attack_type ? data.attack_type : '-'}</p>
                    </div>
                    <div>
                        <div>Damage/Save</div>
                        <p>
                            {data.damage ? data.damage.damage_type.name : '-'}
                        </p>
                    </div>
                </div>
                <div className="description">
                    <div>ABOUT</div>
                    <p>{data.desc ? data.desc : '-'}</p>
                </div>
            </div>
    )
  )
}
