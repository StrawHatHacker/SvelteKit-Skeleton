import type { Either } from '@sveltejs/kit/types/internal';

export type TDatabaseID = string | number;

export type TSessionID = string;

export interface Iresponse<T> {
	status: 200 | 400 | 500 | number;
	body: Either<T, { error: string }>;
}
