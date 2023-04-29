import { atom } from "jotai";

export interface ThreadInputI {
  threadId: number;
  isOpen: boolean;
}

export const ThreadInputAtom = atom<ThreadInputI[]>([]);
