import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

const languages = ['es', 'en'] as const;

export const entries: EntryGenerator = () => {
	return languages.map((lang) => ({ lang }));
};

export const load: PageLoad = ({ params }) => {
	if (params.lang !== 'es' && params.lang !== 'en') {
		throw error(404, 'Not found');
	}

	return { lang: params.lang };
};
