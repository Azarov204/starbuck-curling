import { ChevronRight } from "lucide-react";

export function TextLink({ children, href = "#" }) {
  return (
    <a className="text-link" href={href}>
      {children} <ChevronRight size={16} />
    </a>
  );
}
