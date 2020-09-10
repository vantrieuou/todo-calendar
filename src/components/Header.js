import React from 'react'
import { SingleDatePicker } from 'react-google-flight-datepicker'
import 'react-google-flight-datepicker/dist/main.css'
const Header = ({ handleSelectDate }) => (
  <>
    <SingleDatePicker
      startDate={new Date()}
      onChange={(startDate) => handleSelectDate(startDate)}
      dateFormat="YYYY-MM-DD"
      monthFormat="MMM YYYY"
      startWeekDay="monday"
      highlightToday="true"
    />

  </>
)

export default Header
