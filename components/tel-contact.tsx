import { PlainCard } from "./ui/plain-card";
export function TelContact() {
  return (
    <PlainCard>
      <div className="flex items-center space-x-4">
        <i className="bi bi-phone icon"></i>
        <div>
          <p className="text-sm text-center">お電話でのお問い合わせ</p>
          <p className="text-lg font-bold text-center">000-0000-0000</p>
        </div>
      </div>
    </PlainCard>
  );
}
