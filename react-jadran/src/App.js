import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from "react-dom";
import ToVisitList from './ToVisitList'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'tovisitApp.tovisit'

function App() {
  const [tovisits, setTovisits] = useState([])
  const tovisitNameRef = useRef()

  useEffect(() => {
    const storedTovisits = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTovisits) setTovisits(storedTovisits)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tovisits))
  }, [tovisits])

  function toggleTovisit(id) {
    const newTovisits = [...tovisits]
    const tovisit = newTovisits.find(tovisit => tovisit.id === id)
    tovisit.complete = !tovisit.complete
    setTovisits(newTovisits)
  }

  function handleAddToVisit(e) {
    const name = tovisitNameRef.current.value
    if (name === '') return
    setTovisits(prevToVisits => {
      return [...prevToVisits, { id: uuidv4(), name: name, complete: false }]
    })
    tovisitNameRef.current.value = null
  }

  function handleClearVisited() {
    const newTovisits = tovisits.filter(tovisit => !tovisit.complete)
    setTovisits(newTovisits)
  }

  return (
    <>
      <div class="wrapper">
        <input class="unos" ref={tovisitNameRef} type="text" />
        <div class="wrapper1">
          <button class="gumb" onClick={handleAddToVisit}>Dodaj novo</button>
        </div>
        <div class="wrapper2">
          <button class="gumb" onClick={handleClearVisited}>Očisti posjećeno</button>
        </div>
      </div>
      <div class="wrapper">
        <div class="checkbox">
          <ToVisitList tovisits={tovisits} toggleTovisit={toggleTovisit} />
        </div>
        <div class="text wrapper1" >
          {tovisits.filter(tovisit => !tovisit.complete).length} preostalo za posjetiti
        </div>
      </div>
    </>
  )
}

export default App;
