import React from 'react';

import Legend from 'components/text-elements/Legend';
import { themeColorRange } from '@utils/colorTheme';

const ChartLegend = ({ payload }: any, colors: string[] = themeColorRange) => {
    return (
        <div className="flex items-center justify-end">
            <Legend categories={payload.map((entry: any, idx: number) => (
                { name: entry.value, color: colors[idx] }
            ))} />
        </div>
    );
};

export default ChartLegend;
