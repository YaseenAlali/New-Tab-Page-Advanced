import { useContext } from "react";
import { SelectedImageContext } from "../Contexts/SelectedImageContext";
import { GetRandomImage } from "../Util/Utilities";

const ExtraOptionsStyleSelectorBanner = ({ images, position, setPosition, bannerRef, handleDragStart, handleDrag, setShowBanner }) => {
    const { SelectedImage, setSelectedImage } = useContext(SelectedImageContext);
    const handleImageSelection = (image) => {
        setSelectedImage(image);
        localStorage.setItem('selectedImageId', image.id);
    }

    const handleRandomizeImageSelection = () => {
        const image = GetRandomImage();
        setSelectedImage(image);
        localStorage.removeItem('selectedImageId');
    }
    return (
        <div
            ref={bannerRef}
            style={{
                position: 'fixed',
                top: `${position.y}px`,
                left: `${position.x}px`,
                padding: '20px',
                width: '60%',
                maxWidth: '500px',
                backgroundColor: '#2a2a2a',
                color: 'white',
                borderRadius: '10px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                zIndex: 1000,
                cursor: 'move',
            }}
            onMouseDown={handleDragStart}
            onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
            onMouseUp={() => setPosition((prev) => ({ ...prev }))}
        >
            <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Select style</h3>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                    gap: '15px',
                }}
            >
                {images.map((image) => (
                    <div
                        key={image.id}
                        style={{
                            border: image.id === SelectedImage.id ? '3px solid #00f' : '3px solid transparent',
                            padding: '5px',
                            cursor: 'pointer',
                            backgroundColor: '#444',
                            borderRadius: '8px',
                            textAlign: 'center',
                            transition: 'transform 0.2s ease-in-out',
                        }}
                        onClick={() => handleImageSelection(image)}
                        onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                        onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                    >
                        <img
                            src={image.src}
                            alt={image.alt || "Image"}
                            style={{
                                width: '100%',
                                height: '80px',
                                objectFit: 'cover',
                                borderRadius: '5px',
                            }}
                        />
                        <p style={{ margin: '10px 0 0', fontSize: '0.9em' }}>{image.alias}</p>
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row' }}>
            <button
                onClick={() => setShowBanner(false)}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#e63946',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                Close
            </button>
            <button
                onClick={handleRandomizeImageSelection}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: 'green',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                Randomize
            </button>
            </div>
        </div>
    )
}

export { ExtraOptionsStyleSelectorBanner };