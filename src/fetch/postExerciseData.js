import { FETCH_SERVICE_URL } from '../shared/constant'
const FETCH_URL = '/exercise/setState'

export default async function postExerciseData(exerciseData) {
  return fetch(FETCH_SERVICE_URL + FETCH_URL, {
    method: 'POST',
    body: JSON.stringify({ exerciseData }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json())
}
