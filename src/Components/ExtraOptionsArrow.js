import { useContext } from "react";
import { ExtraOptionsContext } from "../Contexts/ExtraOptionsContext";

const ExtraOptionsArrow = () => {
    const { ExtraOptionsEnabled, toggleExtraOptions } = useContext(ExtraOptionsContext);
    return (
        <div
            style={{
                borderLeft: '20px solid transparent',
                borderRight: '20px solid transparent',
                borderTop: ExtraOptionsEnabled ? 'none' : '35px solid red',
                borderBottom: ExtraOptionsEnabled ? '35px solid red' : 'none',
                cursor: 'pointer',
            }}
            onClick={toggleExtraOptions}
        />
    )
}

export { ExtraOptionsArrow }