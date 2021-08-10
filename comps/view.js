import { useEffect, useState } from "react";
import { screenMgr } from "../utils/screenMgr";
function View({mobileView,pcView}) {
    let { screenType } = screenMgr() || {};
    let [viewState, changeViewState] = useState(null);
    if (typeof window==="undefined") {
        return viewState;
    }
    let indexView = null;
    useEffect(() => {
        (async () => {
            changeViewState(indexView)
        })()
    }, [screenType]);
    switch (screenType) {
        case "small":
            indexView = mobileView
            break;

        case "large":
            indexView = pcView
            break;
        default:
            indexView = <>Loading...</>
            break;
    }
    return <>
        {indexView}
    </>
}

export default View