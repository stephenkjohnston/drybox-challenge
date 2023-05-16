import containersAtom from "atoms/containersAtom";
import { useMemo } from "react";
import { useRecoilState } from "recoil";

export default function useContainer(containerID?: string) {
    
    const [ containers ] = useRecoilState(containersAtom);

    const data = useMemo(() => {
        return containers?.filter(cont => cont?.id === containerID)[0];
    }, [containerID]);

    return {
        data
    }
}