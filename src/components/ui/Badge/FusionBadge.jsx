import { SparklesIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import { Badge } from "./Badge";

export const FusionBadge = () => (
  <Badge
    label={
      <span className="flex items-center gap-1">
        Human creativity <span>+</span> AI amplification
      </span>
    }
    iconStart={<CodeBracketIcon className="h-4 w-4 text-indigo-500" />}
    iconEnd={<SparklesIcon className="h-4 w-4 text-emerald-500" />}
  />
);