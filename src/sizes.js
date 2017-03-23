import { getNumberOfWeeks } from './utils';

const sizes = {
  dayRadius: 10,
  daySpacing: 10,
  dayStrokeWidth: 3,
};

export default sizes;

export const getPadding = () => sizes.dayStrokeWidth / 2;

export const getDayCX = (isoWeekDay) => {
  const firstOffset = (sizes.daySpacing + sizes.dayRadius) / 2;
  const restOffset = ((sizes.daySpacing + sizes.dayRadius + sizes.dayRadius) * isoWeekDay);

  return getPadding() + firstOffset + restOffset;
};

export const getDayCY = getDayCX;

export const getMonthWidth = () => (
  sizes.dayStrokeWidth
  + (sizes.dayRadius * 14)
  + (sizes.daySpacing * 6)
);

export const getMonthHeight = month => (
  sizes.dayStrokeWidth
  + (sizes.dayRadius * 2 * getNumberOfWeeks(month))
  + (sizes.daySpacing * (getNumberOfWeeks(month) - 1))
);
