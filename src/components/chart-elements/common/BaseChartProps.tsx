import {
    Colors,
    TwHeight,
    TwMarginTop,
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
    colors?: Colors[],
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
    marginTop?: TwMarginTop,
}

export default BaseChartProps;
