/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from "tns-core-modules/data/observable";
import { View } from "tns-core-modules/ui/core/view";

export function onTap(args: EventData) {
    const view = args.object as View;

    view.showModal("modal/frame", {
        context: "context",
        closeCallback: () => console.log("modal closed"),
        fullscreen: false
    });
};
