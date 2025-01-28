/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2024 joaodias.me, Rights Reserved.
 */
import React, { useMemo, useRef, useState } from "react";
import { useMount, useSafeLayoutEffect } from ".";
import { isFunction, isNil, makeId } from "..";

type AutoIdInput = string | null | undefined;

// Shared state
const state = {
	hasHydrated: false,
	id: 0,
};

// Feature detection
const HAS_USE_ID_HOOK = isFunction(React.useId);
const CAN_USE_CRYPTO =
	typeof globalThis !== "undefined" &&
	!isNil(globalThis.crypto) &&
	isFunction(globalThis.crypto?.randomUUID);

/**
 * Generates a unique identifier using either crypto.randomUUID or an incremental counter
 *
 * @returns {string} A unique identifier
 */
function generateIncrementalId(): string {
	if (CAN_USE_CRYPTO) {
		try {
			return globalThis.crypto.randomUUID().slice(0, 8);
		} catch {
			return String(++state.id);
		}
	}

	return String(++state.id);
}

/**
 * Generate automatic IDs to facilitate WAI-ARIA
 *
 * The hook uses a three-tier system for generating IDs:
 * 1. React.useId() (preferred, React 18+)
 * 2. crypto.randomUUID() (when available)
 * 3. Incremental counter (fallback)
 *
 * The returned ID will initially be `null` and will update after component mount.
 * For SSR consistency, provide your own ID via customId.
 *
 * @example
 * ```tsx
 * import { useAutoId } from '@jtmdias/js-utilities/hooks';
 *
 * // Basic usage (React 18+: ":r0:", Pre-18: "1" or UUID fragment)
 * const id1 = useAutoId();
 *
 * // Custom ID
 * const id2 = useAutoId("8e88aa2e-e6a8");
 *
 * // Auto-generated ID with prefix
 * const id3 = useAutoId(undefined, "prefix"); // "prefix--{id}"
 *
 * // Custom ID with prefix
 * const id4 = useAutoId("6949d175", "js-checkbox"); // "js-checkbox--6949d175"
 * ```
 *
 * @param customId - Optional predefined ID value
 * @param prefix - Optional prefix to prepend to the ID
 * @returns {string | undefined} The generated or custom ID, with optional prefix
 */
function useAutoId(customId?: AutoIdInput, prefix?: string): string | undefined {
	const { current: idPrefix } = useRef(prefix);
	const isHydrated = useMemo(() => state.hasHydrated, []);

	// Use React's useId when available and no custom ID is provided
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const REACT_GENERATED_ID = HAS_USE_ID_HOOK && !customId ? React.useId?.() : null;
	const INITIAL_ID = customId ?? (isHydrated ? generateIncrementalId() : null);

	const [generatedId, setGeneratedId] = useState<string | null>(INITIAL_ID);
	const BASE_ID = REACT_GENERATED_ID || generatedId;

	// Generate ID after initial render to avoid flicker
	useSafeLayoutEffect(() => {
		if (generatedId === null) {
			setGeneratedId(generateIncrementalId());
		}
	}, [generatedId]);

	// Mark hydration complete after all effects
	useMount(() => {
		if (!state.hasHydrated) {
			state.hasHydrated = true;
		}
	});

	// Combine prefix with ID if needed
	const finalId = useMemo(() => {
		if (!BASE_ID) {
			return undefined;
		}

		return idPrefix ? makeId(idPrefix, BASE_ID) : BASE_ID;
	}, [BASE_ID, idPrefix]);

	return finalId;
}

export { useAutoId };
