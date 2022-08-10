import type { ObjectId } from 'mongoose';

export type Only<T, U> = { [P in keyof T]: T[P] } & { [P in Exclude<keyof U, keyof T>]?: never };
export type Either<T, U> = Only<T, U> | Only<U, T>;

export type TDatabaseID = ObjectId | string;

export type TSessionID = string;

export type LoginRes = Record<never, never>

export interface Iresponse<T> {
	status: number;
	body: Either<T, { error: string }>;
	ok: boolean;
}

export interface IUser {
	_id: TDatabaseID;
	email: string;
	password: string;
	username: string;
}

export interface ISessionUser {
	id: TDatabaseID;
}
