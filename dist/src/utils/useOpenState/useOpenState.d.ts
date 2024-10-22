import { InitialState } from '../misc';
/**
 * Handles open/close or similar boolean states
 * Mainly aims to improve readability
 *
 * @example
 * const modal = useOpenState()
 * <button onClick={modal.open} />
 * <Modal isOpen={modal.isOpen}  />
 *
 * */
export declare const useOpenState: (initialValue?: InitialState<boolean>) => {
    isOpen: boolean;
    setIsOpen: import('react').Dispatch<import('react').SetStateAction<boolean>>;
    close: () => void;
    open: () => void;
    toggle: () => void;
};
/**
 * Stateful open state is suitable for cases where combination of boolean flag and additional state is required
 * State is kept after closing to prevent flickering of exit animations
 * */
export declare const useStatefulOpenState: <T>(initialStateValue?: T, initialValue?: InitialState<boolean>) => {
    isOpen: boolean;
    close: () => void;
    open: (state: T) => void;
    state: T | undefined;
};
