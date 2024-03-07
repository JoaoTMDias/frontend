/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2023 joaodias.me
 */

/**
 * Returns the browser time zone
 *
 * @example
 *
 * ```typescript
 * import { getBrowserTimezone } from "@jtmdias/js-utilities";
 *
 * const MY_TIMEZONE = getBrowserTimezone();
 *
 * console.log(MY_TIMEZONE); // 'Europe/Lisbon'
```
 */
function getBrowserTimeZone(): string | undefined {
	return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export { getBrowserTimeZone, getBrowserTimeZone as getBrowserTimezone };
