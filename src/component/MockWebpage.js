import React, { useState } from 'react';
import './Mock.css';

const MockWebpage = () => {
    const [selectedElements, setSelectedElements] = useState({});
    const [isSelectionMode, setIsSelectionMode] = useState(false);
    const [hoveredElement, setHoveredElement] = useState(null);

    const handleElementClick = (elementType, label) => {
        if (isSelectionMode) {
            const elementKey = `${elementType}-${label}`;

            setSelectedElements((prevSelected) => {
                if (prevSelected[elementKey]) {

                    return {
                        ...prevSelected,
                        [elementKey]: prevSelected[elementKey] + 1,
                    };
                } else {
                    return {
                        ...prevSelected,
                        [elementKey]: 1,
                    };
                }
            });
        } else {
            simulateEvent(elementType, label);
        }
    };

    const simulateEvent = (elementType, label) => {
        console.log(`Event sent to GTM: ${elementType} - ${label}`);
    };

    const handleToggleSelectionMode = () => {
        setIsSelectionMode((prevMode) => !prevMode);
        if (!isSelectionMode) {
            Object.keys(selectedElements).forEach((elementKey) => {
                const [elementType, label] = elementKey.split('-');
                simulateEvent(elementType, label);
            });
        }
    };

    const handleUnselectElement = (elementKey) => {
        setSelectedElements((prevSelected) => {
            const updatedSelected = { ...prevSelected };
            updatedSelected[elementKey] = Math.max(0, updatedSelected[elementKey] - 1);
            if (updatedSelected[elementKey] === 0) {
                delete updatedSelected[elementKey];
            }
            return updatedSelected;
        });
    };

    const handleElementHover = (elementType, label) => {
        setHoveredElement({ type: elementType, label });
    };


    return (
        <div className="container">
            <h1 className="main-heading">Visual Interaction Selector</h1>
            <button onClick={handleToggleSelectionMode}>
                {isSelectionMode ? 'Exit Selection Mode' : 'Enter Selection Mode'}

            </button>
            <div className="mock-webpage">

                <button
                    onClick={() => handleElementClick('button', 'Subscribe')}
                    onMouseOver={() => handleElementHover('button', 'Subscribe')}

                    className={isSelectionMode ? 'interactive-element' : ''}

                >
                    Subscribe
                </button>
                <button
                    onClick={() => handleElementClick('button', 'Download')}
                    className={isSelectionMode ? 'interactive-element' : ''}
                >
                    Download
                </button>
                <button
                    onClick={() => handleElementClick('button', 'Contact Us')}
                    className={isSelectionMode ? 'interactive-element' : ''}
                >
                    Contact Us
                </button>

                <a
                    href="#"
                    onClick={() => handleElementClick('link', 'Read More')}
                    className={isSelectionMode ? 'interactive-element' : ''}
                >
                    Read More
                </a>
                <a
                    href="#"
                    onClick={() => handleElementClick('link', 'Visit Our Store')}
                    className={isSelectionMode ? 'interactive-element' : ''}
                >
                    Visit Our Store
                </a>

                <select
                    onChange={(e) => handleElementClick('dropdown', e.target.value)}
                    className={isSelectionMode ? 'interactive-element' : ''}
                >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>


                <div
                    onClick={() => handleElementClick('video', 'Embedded Video')}
                    className={isSelectionMode ? 'interactive-element' : ''}
                >
                    <video width="320" height="240" controls>
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            {Object.keys(selectedElements).length > 0 && (
                <div className="selected-elements">
                    <h2>Selected Elements</h2>
                    <ul>
                        {Object.entries(selectedElements).map(([elementKey, interactionCount]) => {
                            const [elementType, label] = elementKey.split('-');
                            return (
                                <li key={elementKey} className="selected-element">
                                    {elementType} - {label}{' '}
                                    <button onClick={() => handleUnselectElement(elementKey)}>Unselect</button>
                                    <span className="interaction-count">Interactions: {interactionCount}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MockWebpage;
