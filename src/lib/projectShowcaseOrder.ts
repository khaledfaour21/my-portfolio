/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/** Prototypes tab: graduation → Block 5 → remaining portfolio demos */
export const LOCAL_PROJECT_ORDER = [
  "school-management",
  "complaints-platform",
  "e-menu",
  "mbco-pack",
] as const;

export const LIVE_PROJECT_ORDER = [
  "prime-transporter",
  "vapeworld-sy",
  "mbco-test-orders",
  "osa",
  "vapeworld-eshop",
] as const;

export function sortByIdOrder<T extends { id: string }>(
  items: T[],
  order: readonly string[],
): T[] {
  return [...items].sort((a, b) => {
    const ia = order.indexOf(a.id);
    const ib = order.indexOf(b.id);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });
}