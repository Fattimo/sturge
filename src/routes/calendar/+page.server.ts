import { redirect } from '@sveltejs/kit';
import { ALL_CALENDAR_LINK } from '../../constants';

export const load = () => {
	redirect(302, ALL_CALENDAR_LINK);
};
