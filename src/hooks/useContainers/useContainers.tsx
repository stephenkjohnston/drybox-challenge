import { selector, useRecoilState, useRecoilValue } from "recoil";
import containersAtom from "atoms/containersAtom";
import filtersAtom from "atoms/filtersAtom";

export default function useContainers() {
    const containersSelector = selector({
        key: "getFilteredContainers",
        get: ({ get }) => {
            const currentFilters = get(filtersAtom);
            const currentContainerData = get(containersAtom);
            let filteredContainerData;

            if ((!currentFilters?.color && !currentFilters?.condition) || currentFilters?.condition === 'both') {
                filteredContainerData = currentContainerData
            }

            if ((currentFilters?.color && currentFilters?.condition)) {
                filteredContainerData = currentContainerData.filter(
                    container => (container?.colors?.includes(currentFilters?.color) && container?.condition === currentFilters?.condition )
                )
            }

            if ((currentFilters?.color && !currentFilters?.condition)) {
                filteredContainerData = currentContainerData.filter(
                    container => (container?.colors?.includes(currentFilters?.color))
                )
            }

            if ((!currentFilters?.color && currentFilters?.condition)) {
                filteredContainerData = currentContainerData.filter(container => container?.condition === currentFilters?.condition)
            }

            return filteredContainerData;
        },
        set: ({set}, newValue) => {}
    });

    const [data] = useRecoilState(containersSelector);


    return {
        data
    }
}