import "./ItemModal.css";
import closeButton from "../../assets/closeItemModal.png";

function ItemModal({ activeModal, onClose, card, onOpenDelete }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close-preview"
        >
          <img src={closeButton} alt="closeButton" />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
        <button
          type="text"
          className="modal__item-delete-btn"
          onClick={() => onOpenDelete(card._id)}
        >
          Delete item
        </button>
      </div>
    </div>
  );
}

export default ItemModal;
