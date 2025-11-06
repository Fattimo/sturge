import { redirect } from '@sveltejs/kit';
import { ZOOM_LINK } from '../../constants';

export const load = () => {
	redirect(302, ZOOM_LINK);
};
