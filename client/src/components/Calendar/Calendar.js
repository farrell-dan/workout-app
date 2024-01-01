import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import addHours from "date-fns/addHours";
import { useMyWorkouts } from "../Workouts/MyWorkoutsContext";

const locales = {
	"en-US": enUS,
};

const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales,
});

const CalendarSection = () => {
	// const { myWorkouts } = useMyWorkouts();

	// const myEventsList = myWorkouts;

	// const transformEvents = (myEventsList) => {
	// 	return myEventsList.map((event) => {
	// 		const start = new Date(event.DateUtc);
	// 		const end = addHours(new Date(event.DateUtc), 2);
	// 		return {
	// 			title: `${event.HomeTeam} vs ${event.AwayTeam}`,
	// 			start,
	// 			end,
	// 			resource: {
	// 				Location: event.Location,
	// 			},
	// 		};
	// 	});
	// };

	const formattedEvents =  [
        {
          title: "Sample Event",
          start: new Date(2023, 11, 31, 12, 0, 0), // December 31, 2023, 12:00 PM
          end: new Date(2023, 11, 31, 14, 0, 0),   // December 31, 2023, 2:00 PM
          resource: {
            Location: "Sample Location",
          },
        },
      ];
    
    // transformEvents(myEventsList);

	return (
		<div style={{ height: "75vh" }}>
			<Calendar
				localizer={localizer}
				events={formattedEvents}
				// startAccessor="start"
				// endAccessor="end"
			/>
		</div>
	);
};

export default CalendarSection;
