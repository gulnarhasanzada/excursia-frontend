import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { closeRentModal, openRentModal} from '../store/modalsSlice';

interface RentModalHook {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRentModal = (): RentModalHook => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState)=>state.modals.isOpen)

  const onOpen = () => {
    dispatch(openRentModal())
  };

  const onClose = () => {
    dispatch(closeRentModal())
  };

  return {
    isOpen,
    onOpen,
    onClose,
  };
};

export default useRentModal;