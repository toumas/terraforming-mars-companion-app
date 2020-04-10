import {makeSlice, Section, initialSectionState} from './section';
import {SectionNames} from './SectionNames';

export const megaCreditsSlice = makeSlice(
  SectionNames.MEGA_CREDITS,
  initialSectionState,
  {
    decrementProduction: (state: Section) => {
      if (state.production > -5) {
        state.production = state.production - 1;
      }
    },
  },
);

export const reducer = {[SectionNames.MEGA_CREDITS]: megaCreditsSlice.reducer};
export const actions = megaCreditsSlice.actions;
