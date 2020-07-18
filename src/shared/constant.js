const DEV_FETCH_SERVER_URL = 'http://localhost:8080/api'
const PROD_FETCH_SERVER_URL = 'http://180.76.114.135:8080/api'
export const IS_DEV = process.env.NODE_ENV === 'development' ? true : false
export const FETCH_SERVICE_URL = IS_DEV
  ? DEV_FETCH_SERVER_URL
  : PROD_FETCH_SERVER_URL
export const EXERCISE_DATA_NAME = 'exerciseData'
export const ADD_BUTTON_BACKGROUND_COLOR = '#0099CC'
export const DAY_REPLACE = 'YYYY-MM-DD'
export const HOUR_REPLACE = 'HH:00'
export const HOUR_REPLACE_SLASH = '--'
