import { ActionPlugin, AttributeContext } from "library/src/engine";

export const ClampFitIntActionPlugin: ActionPlugin = {
    pluginType: "action",
    name: "clampFitInt",
    method: (
        _: AttributeContext,
        v: number,
        oldMin: number,
        oldMax: number,
        newMin: number,
        newMax: number,
    ) => {
        return Math.round(
            Math.max(
                newMin,
                Math.min(
                    newMax,
                    ((v - oldMin) / (oldMax - oldMin)) * (newMax - newMin) +
                        newMin,
                ),
            ),
        );
    },
};
