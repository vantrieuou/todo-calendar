import React from 'react'
import { SingleDatePicker } from 'react-google-flight-datepicker'
import 'react-google-flight-datepicker/dist/main.css'
const Header = ({ handleSelectDate }) => (
  <div>
    <SingleDatePicker
      startDate={new Date()}
      onChange={(startDate) => handleSelectDate(startDate)}
      minDate={new Date(1900, 0, 1)}
      maxDate={new Date(2100, 0, 1)}
      dateFormat="YYYY-MM-DD"
      monthFormat="MMM YYYY"
      startDatePlaceholder="Date"
      disabled={false}
      startWeekDay="monday"
    />
  </div>
)

export default Header
