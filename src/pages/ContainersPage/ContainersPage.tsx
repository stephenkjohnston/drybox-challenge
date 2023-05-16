import useContainers from 'hooks/useContainers/useContainers';
import { v4 } from 'uuid';
import useFilters from 'hooks/useFilters';
import { useNavigate, useParams } from 'react-router-dom';
import cx from 'classnames';
import Accordion from 'react-bootstrap/Accordion';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import { useCallback, useState } from 'react';

import styles from './ContainersPage.module.scss';
import useModal from 'hooks/useModal/useModal';
import { formatDimensions } from 'utils';

export default function ContainersPage() {

    const { containerType } = useParams();
    const { data } = useContainers();
    const { filters, updateFilters, resetFilters} = useFilters();
    const [showFiltersMenu, setShowFiltersMenu] = useState(false);
    const { show } = useModal();
    const navigate = useNavigate();

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
                    <div key={container?.id} className={styles?.container}>
                        <figure>
                            <a onClick={() => navigate(`/containers/${container?.id}`)}>
                                <div className={styles?.condition}>{container?.condition}</div>
                                <img src={container?.image} alt={container?.title} />
                            </a>
                        </figure>
                        <h6>
                            <a onClick={() => navigate(`/containers/${container?.id}`)}>
                                {container?.title}
                            </a>
                        </h6>
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
                        <div className={styles?.quickQuotes}>
                            <button className={styles?.quickQuote} onClick={() => show()}>Get a Quote</button>
                            <a className={styles?.quickPhoneNumber} href="tel:18888888888">Call Now</a>
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