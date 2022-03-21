import type { TSessionID, TDatabaseID } from '../../interfaces';
import crypto from 'crypto';

const sessionUsers = new Map<TSessionID, TDatabaseID>();

export function createSession(id: TDatabaseID): TSessionID {
    const randomID = crypto.randomBytes(16).toString('hex');

    sessionUsers.set(randomID, id);

    return randomID;
}

export function fetchSession(sessionId: TSessionID) {
    return sessionUsers.get(sessionId) || null;
}

export function deleteSession(sessionId: TSessionID) {
    sessionUsers.delete(sessionId);
}
