import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const weekdays = ["月", "火", "水", "木", "金", "土", "日・祝"];

const defaultAvailability: Array<Availability> = [
  {
    timeslot: "9:00-12:00",
    open: [true, true, true, true, true, true, false],
  },
  {
    timeslot: "15:00-19:00",
    open: [true, true, true, true, true, false, false],
  },
];

export type Availability = {
  timeslot: string;
  open: Array<boolean>;
};

interface ScheduleProps {
  availability?: Array<Availability>;
}

export function ScheduleCard({
  availability = defaultAvailability,
}: ScheduleProps) {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-12">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg">診察時間</TableHead>
            {weekdays.map((day) => (
              <TableHead key={day} className="text-center text-lg">
                {day}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {availability.map(({ timeslot, open }, timeIndex) => (
            <TableRow key={timeslot}>
              <TableCell className="text-lg">{timeslot}</TableCell>
              {open.map((available, dayIndex) => (
                <TableCell
                  key={`${timeslot}-${dayIndex}`}
                  className="text-center"
                >
                  {available ? (
                    <div className="text-5xl schedule-icon mx-auto">●</div>
                  ) : (
                    <div className="text-2xl schedule-icon mx-auto">／</div>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
