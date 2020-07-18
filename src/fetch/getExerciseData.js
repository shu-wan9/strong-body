import { FETCH_SERVICE_URL, EXERCISE_DATA_NAME } from '../shared/constant'
const FETCH_URL = '/exercise/getState'
export default async function getExerciseData() {
  return fetch(FETCH_SERVICE_URL + FETCH_URL, {
    method: 'GET'
  })
    .then((res) => res.json())
    .then((res) => {
      return res.data.exerciseData
    })
}
