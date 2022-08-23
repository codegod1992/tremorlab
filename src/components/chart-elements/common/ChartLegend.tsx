import React from 'react';

import Legend from 'components/text-elements/Legend';
import { themeColorRange } from 'lib';

const ChartLegend = ({ payload }: any, colors: string[] = themeColorRange) => {
    return (
        <div className="flex items-center justify-end">
            <Legend
                categories={payload.map((entry: any) => entry.value)}
                colors={ colors }
            />
        </div>
    );
};

export default ChartLegend;
