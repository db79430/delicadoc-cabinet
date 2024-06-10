import { createSelector } from 'reselect';

const selectInfoPromo = (state) => state.infoPromo;

export const selectPoints = createSelector(
    [selectInfoPromo],
    (infoPromo) => infoPromo.points
);

export const selectPromo = createSelector(
    [selectInfoPromo],
    (infoPromo) => infoPromo.week_day || []
);

export const selectUserData = createSelector(
    [selectInfoPromo],
    (infoPromo) => infoPromo.user_data || {}
);