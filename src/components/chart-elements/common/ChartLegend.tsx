import React from 'react';

import { Color } from '../../../lib';
import Legend from 'components/text-elements/Legend';
import { themeColorRange } from 'lib';

const ChartLegend = ({ payload }: any, colors: Color[] = themeColorRange) => {
    return (
        <div className="tr-flex tr-items-center tr-justify-end">
            <Legend
                categories={payload.map((entry: any) => entry.value)}
                colors={ colors }
            />
        </div>
    );
};

export default ChartLegend;
