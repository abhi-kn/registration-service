import * as React from 'react';
import {Stack, StackItem} from '@patternfly/react-core';
import ProvisionTOS from './ProvisionTOS';
import MaterialList from './MaterialList';
import MarketingData from './MarketingData';

const Home: React.FC<{}> = () => {
    return (
        <Stack>
            <StackItem>
                <ProvisionTOS />
            </StackItem>
            <StackItem>
                <MaterialList materials={MarketingData.materials} />
            </StackItem>
        </Stack>
    );
};

export default Home;