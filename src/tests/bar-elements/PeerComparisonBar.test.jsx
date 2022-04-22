/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import PeerComparisonBar from 'components/bar-elements/PeerComparisonBar';

describe('PeerComparisonBar', () => {
    test('renders the PeerComparisonBar component', () => {
        render(
            <PeerComparisonBar
                markerPercentage={50}
                peerGroupMinPercentage={25}
                peerGroupMaxPercentage={75}
            />
        );
    });
});
