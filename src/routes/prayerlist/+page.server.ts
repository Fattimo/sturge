import { redirect } from '@sveltejs/kit';
import { PRAYER_LIST_LINK } from '../../constants';

export const load = () => {
	redirect(302, PRAYER_LIST_LINK);
};
