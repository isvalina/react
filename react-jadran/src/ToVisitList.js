import React from 'react'
import ToVisit from './ToVisit'

export default function ToVisitList({ tovisits, toggleTovisit }) {
    return (
        tovisits.map(tovisit => {
            return <ToVisit key={tovisit.id} toggleTovisit={toggleTovisit} tovisit={tovisit} />
        })
    )
}
