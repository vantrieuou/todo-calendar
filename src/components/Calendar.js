import React from 'react'
import moment from 'moment'
import { useHistory, useParams } from 'react-router-dom'

import { SingleDatePicker } from 'react-google-flight-datepicker'
import 'react-google-flight-datepicker/dist/main.css'

export default () => {
  let history = useHistory()
  const { selectedDate } = useParams()
  const startDate = selectedDate ? moment(selectedDate) : new Date()
  return (
    <SingleDatePicker
      startDate={startDate}
      dateFormat="YYYY-MM-DD"
      monthFormat="MMM YYYY"
      startWeekDay="monday"
      highlightToday="true"
      onChange={(date) =>
        history.push(!date ? '/' : `/${moment(date).format('YYYY-MM-DD')}`)
      }
    />
  )
}
