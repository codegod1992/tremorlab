import { ValueFormater } from '@utils/utils';

export type IconProportionTypes = {
    margin?: string,
    iconSize: string,
}

export interface ChartProps {
    data: any[],
    categories: string[],
    dataKey?: string, 
    colors?: string[],
    valueFormaterY?: ValueFormater,
    startEndOnly?: boolean,
    showXAxis?: boolean,
    showYAxis?: boolean,
    yAxisWidth?: number,
    showTooltip?: boolean,
    showLegend?: boolean,
    showGridLines?: boolean,
    height?: number,
    paddingTopPixels?: number,
    paddingRightPixels?: number,
    paddingBottomPixels?: number,
    paddingLeftPixels?: number,
}
