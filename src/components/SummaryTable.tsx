import { HabitDay } from './HabitDay';
import { generateDatesFromYearBeginning } from '../utils/generate-dates-from-year-beginning';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const summaryDates = generateDatesFromYearBeginning();
const minimumSummaryDateSize = 18 * 7;
const amountOfDaysToFill = minimumSummaryDateSize - summaryDates.length;

export function SummaryTable() {
  return (
    // days of the week
    <div className='w-full flex'>
      <div className='grid grid-rows-7 grid-flow-row gap-3'>
        {weekDays.map((weekDay, i) => (
          <div
            key={`${weekDay}-${i}`}
            className='text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center'
          >
            {weekDay}
          </div>
        ))}
      </div>

      {/* summary based on the number of days from start of the year til today */}
      <div className='grid grid-rows-7 grid-flow-col gap-3'>
        {summaryDates.map(date => (
          <HabitDay key={date.toString()} />
        ))}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, i) => (
            <div
              key={i}
              className='w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed'
            />
          ))}
      </div>
    </div>
  );
}
