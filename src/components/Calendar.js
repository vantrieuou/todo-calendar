import React from 'react'
import dayjs from 'dayjs'
import { useHistory, useParams } from 'react-router-dom'

import { SingleDatePicker } from 'react-google-flight-datepicker'
import 'react-google-flight-datepicker/dist/main.css'

export default () => {
  let history = useHistory()
  const { selectedDate } = useParams()
  const startDate = selectedDate ? dayjs(selectedDate) : new Date()

  const handleOnChange = (date) => {
    const url = date ? `/${dayjs(date).format('YYYY-MM-DD')}` : '/'
    history.push(url)
  }

  return (
    <SingleDatePicker
      startDate={startDate}
      dateFormat="YYYY-MM-DD"
      monthFormat="MMM YYYY"
      startWeekDay="monday"
      highlightToday="true"
      onChange={handleOnChange}
    />
  )
}
