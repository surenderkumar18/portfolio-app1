
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="App">
      <button type="button" onClick={openModal}>
        Open Modal
      </button>
      <Modal isOpen={isOpen} onClose={closeModal} title="I am Modal Title">
        Where should you define the actual business logic? Where should you
        perform validation and authorization checks? The answer: inside a
        dedicated business logic layer. Your business logic layer should act as
        the single source of truth for enforcing business domain rules.
      </Modal>
    </div>
  );
}

// Main Modal component
/*
interface ModalProps {
  children: ReactNode;
  title?: string;
  isOpen: boolean;
  onClose: () => void;
}
*/
const Modal = ({ children, isOpen, onClose, title }) => {
  // all events like scroll, keyup, down, mouseover should be registered in
  // useEffect

  // implement escape key
  useEffect(() => {
    const escapeHandler = (e) => {
      if (e.key === "Escape") { // E is capital
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", escapeHandler);
    } else {
      document.removeEventListener("keydown", escapeHandler);
    }

    return () => {
      document.removeEventListener("keydown", escapeHandler);
    };
  }, [isOpen, onClose]);

  // if Modal is already opened do not render below content
  if (!isOpen) return null;

  // root element to render Modal
  const modalRoot = document.getElementById("modal-root");
  // createPortal
  return ReactDOM.createPortal(
    <div className='modal-overlay'>
      <div
        className='modal-content'
        onClick={(e) => e.stopPropagation()}
        role='dialog'
        aria-modal='true'
        aria-labelledby='modal-title'
      >
        <h2 id='modal-title'>{title}</h2>
        {children}
        <hr />
        <button type='button' onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

/**
 * 
.modal-overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
  top: 0px;
  left: 0px;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 4px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 20px;
}
.modal-content button {
  margin-top: 10px;
}
*/