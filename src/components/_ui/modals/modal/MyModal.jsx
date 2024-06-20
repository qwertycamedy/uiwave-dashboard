import { clsx } from 'clsx';

const MyModal = ({
  children,
  overlayCl,
  modalCl,
  innerCl,
  contentCl,
  closeCl,
  modalIsOpen,
  onClose,
  closeModal = false,
}) => {

  return (
    <div
      className={clsx(`overlay modal__overlay fixed-block ${overlayCl}`, {
        active: modalIsOpen,
      })}
      onClick={onClose}
    >
      <div
        className={`modal ${modalCl}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={`modal__inner ${innerCl}`}>
          {closeModal && (
            <button className={`modal__close ${closeCl}`} onClick={onClose}>
              <svg
                className="modal__close-ico ico-28 stroke"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M21 7L7 21"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7L21 21"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
          <div className={`${contentCl} modal__content`}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
