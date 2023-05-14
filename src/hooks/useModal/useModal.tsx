import { useRecoilState } from "recoil";
import modalAtom from 'atoms/modalAtom';

export default function useModal() {
    const [{ visible }, setVisible] = useRecoilState(modalAtom);

    const show = () => {
        setVisible({ visible: true });
    }

    const close = () => {
        setVisible({ visible: false });
    }

    return {
        visible,
        show,
        close
    }
}