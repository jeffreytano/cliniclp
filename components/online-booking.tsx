import { LinkedCard } from "./ui/linked-card";
export function OnlineBooking() {
  return (
    <LinkedCard href="#">
      <div className="flex items-center space-x-4">
        <i className="bi bi-laptop icon bg-white"></i>
        <div>
          <div className="text-sm text-center">【初診専用】</div>
          <div className="text-base text-center">オンライン予約受付</div>
        </div>
      </div>
    </LinkedCard>
  );
}
