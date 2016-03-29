'use strict';

export
const ACTIVATE_CONSUMER = 'ACTIVATE_CONSUMER';

export
const DEACTIVATE_CONSUMER = 'DEACTIVATE_CONSUMER';

export
const ACTIVATE_NAVIGATOR = 'ACTIVATE_NAVIGATOR';

export
const DEACTIVATE_NAVIGATOR = 'DEACTIVATE_NAVIGATOR';

export
const ACTIVATE_SELECTOR = 'ACTIVATE_SELECTOR';

export
const DEACTIVATE_SELECTOR = 'DEACTIVATE_SELECTOR';

export
const ACTIVATE_PALETTE = 'ACTIVATE_PALETTE';

export
const DEACTIVATE_PALETTE = 'DEACTIVATE_PALETTE';

export
const ACTIVATE_FILTER = 'ACTIVATE_FILTER';

export
const DEACTIVATE_FILTER = 'DEACTIVATE_FILTER';

export
const ACTIVATE_OCTAVE = 'ACTIVATE_OCTAVE';

export
const DEACTIVATE_OCTAVE = 'DEACTIVATE_OCTAVE';

export
const RESET_CONTROLLER = 'RESET_CONTROLLER';


export
const activateConsumer = () => {
    return {
        type: ACTIVATE_CONSUMER
    };
};

export
const deactivateConsumer = () => {
    return {
        type: DEACTIVATE_CONSUMER
    };
};

export
const activateNavigator = (id) => {
    return {
        type: ACTIVATE_NAVIGATOR,
        id
    };
};

export
const deactivateNavigator = (id) => {
    return {
        type: DEACTIVATE_NAVIGATOR,
        id
    };
};

export
const activateSelector = (id) => {
    return {
        type: ACTIVATE_SELECTOR,
        id
    };
};

export
const deactivateSelector = (id) => {
    return {
        type: DEACTIVATE_SELECTOR,
        id
    };
};

export
const activatePalette = (id) => {
    return {
        type: ACTIVATE_PALETTE,
        id
    };
};

export
const deactivatePalette = (id) => {
    return {
        type: DEACTIVATE_PALETTE,
        id
    };
};

export
const activateFilter = (id) => {
    return {
        type: ACTIVATE_FILTER,
        id
    };
};

export
const deactivateFilter = (id) => {
    return {
        type: DEACTIVATE_FILTER,
        id
    };
};

export
const activateOctave = (id) => {
    return {
        type: ACTIVATE_OCTAVE,
        id
    };
};

export
const deactivateOctave = (id) => {
    return {
        type: DEACTIVATE_OCTAVE,
        id
    };
};

export
const resetController = () => {
    return {
        type: RESET_CONTROLLER
    };
};