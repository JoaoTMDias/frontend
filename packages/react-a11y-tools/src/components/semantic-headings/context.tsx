/*
 * Please refer to the terms of the license agreement.
 *
 * (c) 2021 joaodias.me, Rights Reserved.
 */

/**
 * context.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import { createContext } from "react";
import { FIRST_HEADING_LEVEL } from "./constants";

/**
 * Headings Context, with the initial value of 1.
 */
export const HeadingsContext = createContext(FIRST_HEADING_LEVEL);
