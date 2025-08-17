// src/routes/events/+page.server.js
import { GOOGLE_API_KEY } from '$env/static/private';

const PUBLIC_CALENDAR_ID =
	'884f0388322a4de78749e56c73dbcc24fdc81a4c8755c999532750f50bd5c5d0@group.calendar.google.com';

export const prerender = true;

type GcalEvent = {
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
		const response = await fetch(
			`https://www.googleapis.com/calendar/v3/calendars/${PUBLIC_CALENDAR_ID}/events?` +
				new URLSearchParams({
					key: GOOGLE_API_KEY,
					timeMin: new Date().toISOString(),
					maxResults: `${3}`,
					singleEvents: 'true',
					orderBy: 'startTime'
				})
		);

		if (!response.ok) {
			throw new Error('Failed to fetch events');
		}

		const data = await response.json();

		const events: GcalEvent[] = (data.items || []).map(
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

		return {
			events
		};
	} catch (error) {
		console.error('Error fetching calendar events:', error);
		return {
			events: [] as GcalEvent[]
		};
	}
}
