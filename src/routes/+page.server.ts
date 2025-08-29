// src/routes/events/+page.server.js
import { GOOGLE_API_KEY } from '$env/static/private';
import { FEATURED_CALENDAR_ID, STURGE_CHANNEL_ID } from '../constants';

export type GcalEvent = {
	summary: string;
	start: string;
	end: string;
	description: string;
	location: string;
	attachments: {
		fileId: string;
	}[];
};

export async function load() {
	try {
		//gcal
		const gcalResponse = await fetch(
			`https://www.googleapis.com/calendar/v3/calendars/${FEATURED_CALENDAR_ID}/events?` +
				new URLSearchParams({
					key: GOOGLE_API_KEY,
					timeMin: new Date().toISOString(),
					maxResults: `${3}`,
					singleEvents: 'true',
					orderBy: 'startTime'
				})
		);

		if (!gcalResponse.ok) {
			throw new Error('Failed to fetch events');
		}

		const gcalData = await gcalResponse.json();

		const events: GcalEvent[] = (gcalData.items || []).map(
			(
				// trust google lol
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				event: any
			) => ({
				summary: event.summary,
				start: event.start?.dateTime || event.start?.date,
				end: event.end?.dateTime || event.end?.date,
				description: event.description,
				location: event.location,
				attachments: event.attachments || []
			})
		);

		// youtube
		const youtubeResponse = await fetch(
			`https://www.googleapis.com/youtube/v3/search?` +
				`key=${GOOGLE_API_KEY}&channelId=${STURGE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=1`
		);
		if (!youtubeResponse.ok) {
			return {
				events,
				firstVideo: null
			};
		}
		const youtubeData = await youtubeResponse.json();
		const firstVideo = youtubeData.items[0];

		return {
			events,
			firstVideo: {
				id: firstVideo.id.videoId as string,
				description: firstVideo.snippet.description as string
			}
		};
	} catch (error) {
		console.error('Error fetching calendar events:', error);
		return {
			events: [] as GcalEvent[],
			firstVideo: null
		};
	}
}
