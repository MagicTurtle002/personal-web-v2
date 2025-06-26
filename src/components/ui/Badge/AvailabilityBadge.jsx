import { SparklesIcon } from "@heroicons/react/24/solid";
import { Badge } from "./Badge";

export const AvailabilityBadge = () => (
  <Badge
    label="AVAILABLE FOR WORK"
    iconStart={<SparklesIcon className="h-4 w-4 text-emerald-600" />}
  />
);