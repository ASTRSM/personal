import { google } from 'googleapis';

export default async function handler(req, res) {
  const youtube = google.youtube({
    version: 'v3',
    auth: 'AIzaSyCQYBVZi82kP8XUpgJajvncBVKBTR4tzO0',
  });

  const response = await youtube.playlistItems.list({
    part: 'snippet',
    playlistId: 'PL7lkTmqIlvrG1_2RRpLbsqBZ4jQufKudB',
    maxResults: 4,
  });

  res.status(200).json(response.data.items);
}