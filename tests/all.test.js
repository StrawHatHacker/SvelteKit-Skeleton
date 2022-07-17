import { it, expect, describe } from 'vitest';
import { render } from '@testing-library/svelte';

import hashPassword from '../src/lib/utils/hashPassword';
import Timer from '../src/lib/components/Timer.svelte';
import { createSession, fetchSession, deleteSession } from '../src/lib/utils/sessionHandler';

// .concurrent runs all tests in parallel
describe.concurrent('hashPasswords.ts', () => {
	it('should hash passwords', () => {
		expect(hashPassword('123')).toBeTypeOf('string');
	})
})

describe('sessionHandler.ts', () => {
	let sessionId;

	it('should not get a session that does not exist', () => {
		expect(fetchSession('abc')).toBeNull();
	})

	it('should create a session', () => {
		sessionId = createSession({ userId: 123 });
		expect(sessionId).toBeTypeOf('string');
	})

	it('should get a session', () => {
		expect(fetchSession(sessionId)).toBeTypeOf('string');
	})

	it('should delete a session', () => {
		deleteSession(sessionId);
		expect(fetchSession(sessionId)).toBeNull();
	})
})

describe('Timer.svelte', () => {
	const { getByText, component } = render(Timer);

	it('should start at "00:00"', () => {
		expect(getByText('00:00')).toBeTruthy();
	})

	it('should export functions', () => {
		expect(component.start).toBeDefined();
		expect(component.stop).toBeDefined();
	})
})
