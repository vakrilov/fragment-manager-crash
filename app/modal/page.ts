import { EventData } from "tns-core-modules/data/observable";
import { View } from "tns-core-modules/ui/core/view";

export function onTap(args: EventData) {
    (args.object as View).closeModal();
}