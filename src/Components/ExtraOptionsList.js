import { useMemo, useState, useRef } from "react";
import { ExtraOptionsStyleSelectorBanner } from "./ExtraOptionsStyleSelectorBanner";

const ExtraOptionsList = () => {
    const OptionsList = useMemo(() => ['Style'], []);
    const [showBanner, setShowBanner] = useState(false);
    const [images, setImages] = useState([]);

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const bannerRef = useRef(null);

    const onPressOption = (option) => {
        if (option === 'Style') {
            const imagesData = require("../Resources/Images.json").images;
            setImages(imagesData);
            setShowBanner(true);
        }
    };

    const handleDragStart = (e) => {
        const rect = bannerRef.current.getBoundingClientRect();
        setPosition({
            offsetX: e.clientX - rect.left,
            offsetY: e.clientY - rect.top,
        });
    };

    const handleDrag = (e) => {
        if (!e.clientX || !e.clientY) return;

        setPosition((prev) => ({
            ...prev,
            x: e.clientX - prev.offsetX,
            y: e.clientY - prev.offsetY,
        }));
    };

    return (
        <div>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {OptionsList.map((item, index) => (
                    <li
                        key={index}
                        style={{ cursor: 'pointer', marginBottom: '10px', color: 'white' }}
                        onClick={() => onPressOption(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>

            {showBanner && (
                <ExtraOptionsStyleSelectorBanner
                    images={images}
                    position={position}
                    setPosition={setPosition}
                    bannerRef={bannerRef}
                    handleDragStart={handleDragStart}
                    handleDrag={handleDrag}
                    setShowBanner={setShowBanner}
                ></ExtraOptionsStyleSelectorBanner>
            )}
        </div>
    );
};

export { ExtraOptionsList };
