import crypto from 'crypto';

export default function hashPassword(password: string) {
	return crypto.pbkdf2Sync(password, 'salty', 100000, 64, 'sha512').toString('hex');
}
