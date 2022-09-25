import * as React from 'react'
import SpellCard from './card.component'

export default function Body () {
  return (
        <div className="tab-content section-two">
            <div
                style={{
                  paddingTop: '20px',
                  height: '600px',
                  overflowY: 'scroll'
                }}
                className="container"
            >
                <div id="accordion">
                    <SpellCard />
                </div>
            </div>
        </div>
  )
}
