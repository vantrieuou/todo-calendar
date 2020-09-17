import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { SingleDatePicker } from 'react-google-flight-datepicker'
import 'react-google-flight-datepicker/dist/main.css'
import { selectDate } from '../actions'

const Calendar = ({ handleSelectDate }) => {
  return (
    <SingleDatePicker
      startDate={new Date()}
      dateFormat="YYYY-MM-DD"
      monthFormat="MMM YYYY"
      startWeekDay="monday"
      highlightToday="true"
      onChange={(date) => handleSelectDate(date)}
    />
  )
}

export default connect(null, (dispatch) => ({
  handleSelectDate: (date) =>
    !date
      ? dispatch(selectDate('all'))
      : dispatch(selectDate(moment(date).format('YYYY-MM-DD'))),
}))(Calendar)
