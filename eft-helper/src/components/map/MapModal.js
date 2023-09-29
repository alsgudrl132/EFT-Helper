import './MapModal.css';

const MapModal = ({ mapSrc, altText, closeModal }) => {
    return (
        <div className="modal" onClick={closeModal}>
            <div className="modal-content">
                <img src={mapSrc} alt={altText} className="modal-map" />
            </div>
        </div>
    );
};
export default MapModal;
