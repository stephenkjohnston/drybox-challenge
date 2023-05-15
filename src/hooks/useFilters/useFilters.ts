import { useRecoilState } from "recoil";
import filtersAtom from 'atoms/filtersAtom';

export default function useFilters() {
    const [filters, setFilters] = useRecoilState(filtersAtom);

    const updateFilters = (key: string, filter: string) => {
        setFilters({
            ...filters,
            [key]: filter
        })
    }

    const resetFilters = () => {
        setFilters({
            color: '',
            condition: '',
        })
    }

    return {
        filters,
        updateFilters,
        resetFilters
    }
}