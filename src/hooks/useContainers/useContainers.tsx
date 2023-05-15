import { useRecoilState } from "recoil";
import containersAtom from 'atoms/containersAtom';
import ContainerData from "data/containers.json";
import { useEffect } from "react";

export default function useContainers() {
    const [data, setData] = useRecoilState(containersAtom);

    useEffect(() => {
        setData(ContainerData);
    }, []);

    return {
        data
    }
}