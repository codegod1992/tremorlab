import { TwHeight, TwWidth } from 'lib/sizing';
import { TwPaddinLeft, TwPaddinRight, TwPaddingBottom, TwPaddingTop } from 'lib/spacing';
import { ValueFormater } from '../../../lib/utils';

interface BaseChartProps {
    data: any[],
    categories: string[],
    dataKey: string,
    colors?: string[],
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
}

export default BaseChartProps;
