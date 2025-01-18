interface CardProps {
  children: React.ReactNode;
}

export function PlainCard({ children }: CardProps) {
  return <div className="p-4 bg-white min-w-60">{children}</div>;
}
