import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const schedule = {
  times: ["9:00-12:00", "15:00-19:00"],
  days: ["月", "火", "水", "木", "金", "土", "日・祝"],
  availability: [
    [true, true, true, true, true, true, false],
    [true, true, true, true, true, false, false],
  ],
};

export function Schedule() {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-12">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg">診察時間</TableHead>
            {schedule.days.map((day) => (
              <TableHead key={day} className="text-center text-lg">
                {day}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {schedule.times.map((time, timeIndex) => (
            <TableRow key={time}>
              <TableCell className="text-lg">{time}</TableCell>
              {schedule.availability[timeIndex].map((available, dayIndex) => (
                <TableCell key={`${time}-${dayIndex}`} className="text-center">
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
