import { redirect } from '@sveltejs/kit';
import { GIVE_LINK } from '../../constants';

export const load = () => {
	redirect(302, GIVE_LINK);
};
