import React from 'react'

export default function ToVisit({ tovisit, toggleTovisit }) {
    function handleToVisitClick() {
        toggleTovisit(tovisit.id)
    }
    return (
        <div class="wrapper">
                <input type="checkbox" checked={tovisit.complete} onChange={handleToVisitClick} />
            
           
                {tovisit.name}
            
        </div>
    )
}
