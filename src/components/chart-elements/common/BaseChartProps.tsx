import {
    Color,
    MarginTop,
    TwHeight,
    TwPaddinLeft,
    TwPaddinRight,
    TwPaddingBottom,
    TwPaddingTop,
    TwWidth,
    ValueFormater,
} from '../../../lib';

interface BaseChartProps {
    data: any[],
    categories: string[],
    dataKey: string,
    colors?: Color[],
    valueFormater?: ValueFormater,
    startEndOnly?: boolean,
    showXAxis?: boolean,
    showYAxis?: boolean,
    yAxisWidth?: TwWidth,
    showTooltip?: boolean,
    showLegend?: boolean,
    showGridLines?: boolean,
    height?: TwHeight,
    paddingLeft?: TwPaddinLeft,
    paddingTop?: TwPaddingTop,
    paddingRight?: TwPaddinRight,
    paddingBottom?: TwPaddingBottom,
    marginTop?: MarginTop,
}

export default BaseChartProps;
