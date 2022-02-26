/* ie stores.js */

import { writable } from "svelte/store";
import type { FoodRecord } from "./db/dabTypes";

export const focusedFood = writable({} as FoodRecord);