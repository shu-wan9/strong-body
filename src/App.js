import React, { useState, useEffect } from 'react'
import {
  ADD_BUTTON_BACKGROUND_COLOR,
  DAY_REPLACE,
  HOUR_REPLACE,
  HOUR_REPLACE_SLASH
} from './shared/constant'
import getExerciseData from './fetch/getExerciseData'
import postExerciseData from './fetch/postExerciseData'
import './App.css'
import AppDay from './components/AppDay'
import Button from './components/Button'
import timeStamp from './shared/timeStamp.js'

function getAddButtonStyle() {
  return {
    backgroundColor: ADD_BUTTON_BACKGROUND_COLOR
  }
}

function App() {
  const [exerciseData, setExerciseData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const exerciseData = await getExerciseData()
      setExerciseData(exerciseData)
    }
    try {
      fetchData()
    } catch (e) {
      console.log(e)
    }
  }, [])
  function getCurrentHour() {
    const nextHourDate = new Date(new Date().getTime() + 1000 * 60 * 60)
    return (
      timeStamp(HOUR_REPLACE) +
      HOUR_REPLACE_SLASH +
      timeStamp(HOUR_REPLACE, nextHourDate)
    )
  }
  function pushCurrentDayExerciseData(currentDay, currentHour) {
    exerciseData.push({
      day: currentDay,
      hours: [
        {
          hour: currentHour,
          exercise: 1
        }
      ]
    })
  }
  async function add() {
    const currentDay = timeStamp(DAY_REPLACE)
    const currentHour = getCurrentHour()
    let i = 0
    const { length } = exerciseData
    for (; i < length; i++) {
      const { day, hours } = exerciseData[i]
      if (day === currentDay) {
        let j = 0
        const { length } = hours
        for (; j < length; j++) {
          const { hour } = hours[j]
          if (currentHour === hour) {
            hours[j].exercise++
            break
          }
          if (j === length - 1) {
            hours.push({
              hour: currentHour,
              exercise: 1
            })
          }
        }
        break
      }
      if (i === length - 1) {
        pushCurrentDayExerciseData(currentDay, currentHour)
      }
    }
    if (length === 0) {
      pushCurrentDayExerciseData(currentDay, currentHour)
    }
    await postExerciseData(exerciseData)
    setExerciseData([...exerciseData])
  }
  return (
    <div className="App">
      <div className="p-10 p-10">
        <AppDay exerciseData={exerciseData} />
        <Button
          onClick={add}
          className="c-fff w-100 h-100 fs-40 br-half absolute r-10 b-10"
          style={getAddButtonStyle()}
        >
          +
        </Button>
      </div>
      <div className="x-center b-20"></div>
    </div>
  )
}

export default App
