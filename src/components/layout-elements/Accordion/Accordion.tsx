import React, { useState } from 'react';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from 'lib/classnameUtils';
import { defaultColors } from 'lib/colorTheme';

export interface AccordionProps {
    shadow?: boolean,
    expanded?: boolean,
    marginTop?: string,
    privateProps?: {
        shapeClassNames: string,
    },
    children: React.ReactElement[],
}

const Accordion = ({
    shadow,
    expanded = false,
    privateProps = {
        shapeClassNames: 'border rounded-lg',
    },
    marginTop,
    children
}: AccordionProps) => {

    const [isExpanded, setExpanded] = useState(expanded);

    return(
        <div className={ classNames(
            'overflow-hidden',
            parseMarginTopClassNames(marginTop),
            getColorVariantsFromColorThemeValue(defaultColors.lightBorder).borderColor,
            getColorVariantsFromColorThemeValue(defaultColors.white).bgColor,
            privateProps!.shapeClassNames,
            shadow ? 'shadow' : '',
        ) }>
            { React.Children.map(children, (child, idx) => {
                if (idx===0) return (
                    <>
                        { React.cloneElement(child, {
                            privateProps: {
                                isExpanded: isExpanded,
                                setExpanded: setExpanded
                            } })
                        }
                    </>
                );

                return (
                    <div className={ isExpanded ? '' : 'hidden' }>
                        { child }
                    </div>
                );
            }) }
        </div>  
    );
};

export default Accordion;
