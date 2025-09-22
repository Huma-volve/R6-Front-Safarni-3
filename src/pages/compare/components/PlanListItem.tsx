import { Check } from "lucide-react";

type PlanListItemProps = { label: string; value: string };

function PlanListItem({ label, value }: PlanListItemProps) {
    return (
        <li>
            <Check size={18} strokeWidth={1.2} className="inline-block mr-2" />
            <span className="text-sm">
                {label}: {value}
            </span>
        </li>
    );
}

export default PlanListItem;
