import { useContext } from "react";
import { ExtraOptionsArrow } from "./ExtraOptionsArrow";
import { ExtraOptionsContext } from "../Contexts/ExtraOptionsContext";
import { ExtraOptionsList } from "./ExtraOptionsList";

const ExtraOptions = () => {
    const { ExtraOptionsEnabled } = useContext(ExtraOptionsContext);
    return (
        <div style={{
            position: 'absolute',
            top: '50px',
            left: '25px',
            width: '0',
            height: '0',
            flexDirection: 'column',
        }}>
            <ExtraOptionsArrow></ExtraOptionsArrow>
            {
                ExtraOptionsEnabled &&
                <ExtraOptionsList></ExtraOptionsList>
            }
        </div>

    )
};

export { ExtraOptions };