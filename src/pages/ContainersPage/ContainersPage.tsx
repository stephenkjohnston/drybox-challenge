import useContainers from 'hooks/useContainers/useContainers';
import { v4 } from 'uuid';
import useFilters from 'hooks/useFilters';
import { useParams } from 'react-router-dom';
import cx from 'classnames';
import Accordion from 'react-bootstrap/Accordion';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import { useCallback, useState } from 'react';

import styles from './ContainersPage.module.scss';

export default function ContainersPage() {

    const { containerType } = useParams();
    const { data } = useContainers();
    const { filters, updateFilters, resetFilters} = useFilters();
    const [showFiltersMenu, setShowFiltersMenu] = useState(false);

    console.log({ filters });

    const colorFilters = [
        'beige',
        'white',
        'green',
        'blue',
        'red',
        'silver',
        'gray',
        'tan'
    ];

    const conditionFilters = [
        {
            label: 'Both',
            key: 'both'
        },
        {
            label: 'New',
            key: 'new'
        },
        {
            label: 'Used',
            key: 'used'
        }
    ]

    function formatDimensions(dimension: number) {
        const stringifiedDimensions = `${dimension}`.split('.');
        let newDimensions;
        if (~~stringifiedDimensions[1] === 0) {
            newDimensions = `${stringifiedDimensions}'`
        } else {
            newDimensions = `${stringifiedDimensions[0]}' ${stringifiedDimensions[1]}"`
        }

        return newDimensions;
    }

    const updateCurrentFilter = useCallback((key: string, filter: string) => {
        updateFilters(key, filter);
    }, [updateFilters]);

    const toggleFiltersMenu = useCallback(() => {
        setShowFiltersMenu(!showFiltersMenu);
    }, [showFiltersMenu, setShowFiltersMenu]);

    const renderContainers = () => {
        if (data) {
            return data?.map(container => {
                return (
                    <div key={v4()} className={styles?.container}>
                        <figure>
                            <div className={styles?.condition}>{container?.condition}</div>
                            <img src={container?.image} alt={container?.title} />
                        </figure>
                        <h6>{container?.title}</h6>
                        <div className={styles?.colors}>
                            <b>Colors:</b>
                            <div className={styles?.colorSwatches}>
                                {container?.colors?.map(color => (
                                    <div key={v4()} className={cx(styles?.swatch, styles?.[color])}></div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <b>Dimensions:</b>
                            <div className={styles?.containerDimensions}>
                            {container?.dimensions.map(dim => (
                                <div key={v4()} className={styles?.dimension}>{formatDimensions(dim?.width)} x {formatDimensions(dim.height)} x {formatDimensions(dim.length)}</div>
                            ))}
                            </div>
                        </div>
                    </div>
                )
            })
        }

        return null;
    };

    return (
        <>
            <div className={styles?.actionsBar}>
                <span className={styles?.filteredProductCount}>Showing {data?.length} Containers</span>
                <button onClick={() => toggleFiltersMenu()}>Filters</button>
            </div>
            <section className={styles?.products}>
                <aside className={cx(styles?.filters, {
                    [styles?.filtersMenuVisible]: showFiltersMenu
                })}>
                    <button className={styles?.filtersButton} onClick={() => resetFilters()}>Clear Filters</button>
                    <button className={styles?.filtersButton} onClick={() => toggleFiltersMenu()}>See Results</button>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <AccordionHeader>
                                Color
                            </AccordionHeader>
                            <Accordion.Body>
                                <div className={styles?.filtersColors}>
                                    {colorFilters.map(color => (
                                        <button
                                            key={`color-${color}`}
                                            className={cx(
                                                styles?.swatchButton,
                                                {
                                                    [styles?.active]: filters?.color === color
                                                }
                                            )}
                                            onClick={() => updateCurrentFilter('color', color)}
                                        >
                                                <div className={cx(styles?.swatch, styles?.[color])}></div>
                                        </button>
                                    ))}
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <AccordionHeader>
                                Condition
                            </AccordionHeader>
                            <Accordion.Body>
                                <div className={styles?.filtersCondition}>
                                    {conditionFilters.map(condition => (
                                        <button
                                            key={condition?.key}
                                            className={cx(
                                                styles?.filtersConditionChip,
                                                {
                                                    [styles?.active]: filters?.condition === condition?.key
                                                }
                                            )}
                                            onClick={() => updateCurrentFilter('condition', condition?.key)}
                                        >
                                            {condition?.label}
                                        </button>
                                    ))}
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </aside>
                <div className={styles?.containers}>
                    {renderContainers()}
                </div>
            </section>
        </>
    )
}