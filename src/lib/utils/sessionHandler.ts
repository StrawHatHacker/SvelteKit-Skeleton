import type { TSessionID, TDatabaseID } from 'src/interfaces';
import crypto from 'crypto';

const sessionUsers = new Map<TSessionID, TDatabaseID>();

export function createSession(userID: TDatabaseID): TSessionID {
	const randomID = crypto.randomBytes(32).toString('hex');

	sessionUsers.set(randomID, userID.toString());

	return randomID;
}

export function fetchSession(sessionId: TSessionID) {
	return sessionUsers.get(sessionId) || null;
}

export function deleteSession(sessionId: TSessionID) {
	sessionUsers.delete(sessionId);
}
