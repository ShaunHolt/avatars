import type { IOptions, IPrng } from '../../../interfaces';
import { filterByOption } from '../../../utils';

import smiling from './smiling';
import smilingShadow from './smilingShadow';
import eyes from './eyes';
import eyesShadow from './eyesShadow';
import round from './round';

export const parts = {
  smiling,
  smilingShadow,
  eyes,
  eyesShadow,
  round,
};

export default <O>(prng: IPrng, options: IOptions<O>, eyeColor: string) =>
  prng.pick(filterByOption(options, 'eyes', parts))(eyeColor);
