/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2023 joaodias.me
 */

import { tuple } from "../../../../src/typings";

export const NETWORK_STATE_KEYS = {
	online: "online",
	previous: "previous",
	since: "since",
	downlink: "downlink",
	downlinkMax: "downlinkMax",
	effectiveType: "effectiveType",
	rtt: "rtt",
	saveData: "saveData",
	type: "type",
} as const;

export const NETWORK_STATE_TUPLE = tuple(
	NETWORK_STATE_KEYS.online,
	NETWORK_STATE_KEYS.previous,
	NETWORK_STATE_KEYS.since,
	NETWORK_STATE_KEYS.downlink,
	NETWORK_STATE_KEYS.downlinkMax,
	NETWORK_STATE_KEYS.effectiveType,
	NETWORK_STATE_KEYS.rtt,
	NETWORK_STATE_KEYS.saveData,
	NETWORK_STATE_KEYS.type
);
