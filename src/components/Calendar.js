import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { useHistory } from 'react-router-dom'

import { SingleDatePicker } from 'react-google-flight-datepicker'
import 'react-google-flight-datepicker/dist/main.css'
import { selectDate } from '../actions'

export default () => {
  let history = useHistory()
  return (
    <SingleDatePicker
      startDate={new Date()}
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
