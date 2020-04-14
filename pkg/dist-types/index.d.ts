export declare type Axis = 'x' | 'y';
export declare type ScrollDirection = 'left' | 'right' | 'up' | 'down';
export declare type ScrollSnapAlignment = 'start' | 'end' | 'center';
export declare type ScrollSnapAlignValue = 'none' | ScrollSnapAlignment;
export declare type SnapPositionList = Record<ScrollSnapAlignment, number[]>;
export declare function scrollSnapToNext(element: HTMLElement, direction: ScrollDirection, scrollToOptions?: ScrollToOptions): void;
export declare function getScrollPadding(element: HTMLElement): Record<Axis, {
    before: number;
    after: number;
}>;
export declare function getSnapPositions(parent: HTMLElement, excludeOffAxis?: boolean): Record<Axis, SnapPositionList>;
export declare function getScrollSnapPositions(element: HTMLElement): Record<Axis, number[]>;
