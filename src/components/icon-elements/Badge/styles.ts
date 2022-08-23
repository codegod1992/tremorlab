import { Sizing, sizing } from 'lib/sizing';
import { fontSize } from 'lib/text';
import { spacing } from 'lib/spacing';

export type BadgeProportionTypes = {
    paddingLeft: string,
    paddingRight: string,
    paddingTop: string,
    paddingBottom: string,
    fontSize: string,
}

export const badgeProportions: {[char: string]: BadgeProportionTypes} = {
    xs: {
        paddingLeft: spacing.sm.paddingLeft,
        paddingRight: spacing.sm.paddingRight,
        paddingTop: spacing.threeXs.paddingTop,
        paddingBottom: spacing.threeXs.paddingBottom,
        fontSize: fontSize.xs,
    },
    sm: {
        paddingLeft: spacing.md.paddingLeft,
        paddingRight: spacing.md.paddingRight,
        paddingTop: spacing.threeXs.paddingTop,
        paddingBottom: spacing.threeXs.paddingBottom,
        fontSize: fontSize.sm,
    },
    md: {
        paddingLeft: spacing.lg.paddingLeft,
        paddingRight: spacing.lg.paddingRight,
        paddingTop: spacing.threeXs.paddingTop,
        paddingBottom: spacing.threeXs.paddingBottom,
        fontSize: fontSize.md,
    },
    lg: {
        paddingLeft: spacing.xl.paddingLeft,
        paddingRight: spacing.xl.paddingRight,
        paddingTop: spacing.threeXs.paddingTop,
        paddingBottom: spacing.threeXs.paddingBottom,
        fontSize: fontSize.lg,
    },
};

export const iconSizes: {[size: string]: Sizing} = {
    xs: {
        height: sizing.md.height,
        width: sizing.md.width,
    },
    sm: {
        height: sizing.md.height,
        width: sizing.md.width
    },
    md: {
        height: sizing.md.height,
        width: sizing.md.width
    },
    lg: {
        height: sizing.lg.height,
        width: sizing.lg.width,
    },
};
