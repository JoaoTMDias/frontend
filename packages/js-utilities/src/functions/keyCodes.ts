/**
* This file is open-source. This means that it can be reproduced in whole
* or in part, stored in a retrieval system transmitted in any form, or by
* any means electronic with my prior permission as an author and owner
* Please refer to the terms of the license agreement in the root of the project
*
 * (c) 2023 joaodias.me
*/
export const KEYCODES = {
    BACKSPACE_DELETE: 8,
    TAB: 9,
    CLEAR: 12,
    ENTER: 13,
    SHIFT: 16,
    CONTROL: 17,
    ALT: 18,
    PAUSE_BREAK: 19,
    CAPS_LOCK: 20,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    ZERO: 0,
    ONE: 49,
    TWO: 50,
    THREE: 51,
    FOUR: 52,
    FIVE: 53,
    SIX: 54,
    SEVEN: 55,
    EIGHT: 56,
    NINE: 57,
} as const;

export const KEY = {
    BACKSPACE_DELETE: "Backspace",
    TAB: "Tab",
    ENTER: "Enter",
    SHIFT: "Shift",
    CONTROL: "Control",
    ALT: "Alt",
    CAPS_LOCK: "CapsLock",
    DELETE: "Delete",
    ESC: "Escape",
    SPACE: " ",
    PAGE_UP: "PageUp",
    PAGE_DOWN: "PageDown",
    END: "End",
    HOME: "Home",
    ARROW_LEFT: "ArrowLeft",
    ARROW_UP: "ArrowUp",
    ARROW_RIGHT: "ArrowRight",
    ARROW_DOWN: "ArrowDown",
    ZERO: 0,
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
} as const;

export default KEYCODES;
