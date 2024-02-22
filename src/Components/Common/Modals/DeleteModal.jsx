import { useState } from "react";
import { Modal,Button } from "keep-react";
import { CloudArrowUp } from "phosphor-react";

 const DeleteModal = ({forModal,active,onClose}) => {

  const [showModalX, setShowModalX] = useState(active);

  const onClickTwo = () => {
    onClose()
  };

  return (
    <>
      <Modal
        icon={<CloudArrowUp size={28} color="#1B4DFF" />}
        size="lg"
        show={showModalX}
        onClose={onClickTwo}
      >
        <Modal.Header>Do you want to delete this {forModal}?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-body-5 md:text-body-4 leading-relaxed text-metal-500">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClickTwo}>
            Cancel
          </Button>
          <Button type="primary" color='error' onClick={onClickTwo}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;