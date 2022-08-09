import { useEffect, useRef, useState } from 'react'
import { DateRange } from 'react-date-range'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLocationDot, faMagnifyingGlassLocation} from "@fortawesome/free-solid-svg-icons";
import format from 'date-fns/format'
import { addDays } from 'date-fns'
import { CalendarStyled } from './CalendarStyled';

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'


const DateRangeComp = () => {

  // date state
  const date = new Date()
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: 'selection'
    }
   ])


  const [open, setOpen] = useState(false)

 
  const refOne = useRef(null)

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true)
    document.addEventListener("click", hideOnClickOutside, true)
  }, [])

  const hideOnEscape = (e) => {
    if( e.key === "Escape" ) {
      setOpen(false)
    }
  }

  const hideOnClickOutside = (e) => {
    if( refOne.current && !refOne.current.contains(e.target) ) {
      setOpen(false)
    }
  }
  return (
    <CalendarStyled>
    <div className="calendarWrap" >
      <div className='iconInput'>
      <input
          placeholder={("Check in - Check out"
          )}
          className="inputBox"
          readOnly
          onClick={ () => setOpen(open => !open) }
        />
      </div>


      <div ref={refOne}>
        {open && 
          <DateRange
            onChange={item => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"
            minDate={date}
          />
        }
      </div>

    </div>
    </CalendarStyled>
  )
}

export default DateRangeComp