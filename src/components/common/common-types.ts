import { ValueFormater } from '@utils/utils';

export type IconProportionTypes = {
    margin?: string,
    iconSize: string,
}

export type BadgeProportionTypes = {
    paddingX: string,
    paddingY: string,
    textSize: string,
}

export type ButtonProportionTypes = {
    paddingX: string,
    paddingY: string,
    textSize: string,
}

export type ButtonShapeTypes = {
    rounded: string,
    border: string,
    shadow: string,
}

export type ButtonColorTypes = {
    textColor: string, 
    hoverTextColor: string,
    bgColor: string,
    hoverBgColor: string,
    borderColor: string,
    hoverBorderColor: string,
    focusRingColor: string,
}

export interface ChartProps {
    data: any[],
    attributes: string[],
    valueFormater?: ValueFormater,
    showXAxis?: boolean,
    showYAxis?: boolean,
    showTooltip?: boolean,
    showLegend?: boolean,
    paddingTopPixels?: number,
    paddingRightPixels?: number,
    paddingBottomPixels?: number,
    paddingLeftPixels?: number,
}
