import caesarCipher from './caesarCipher';

describe('Caesar Cipher', () => {
	it('shifts a single letter the appropriate number of times', () => {
		expect(caesarCipher('a', 1)).toBe('b');
		expect(caesarCipher('a', 5)).toBe('f');
	});

	it('shifts a string of letters the appropriate number of times', () => {
		expect(caesarCipher('abcd', 1)).toBe('bcde');
		expect(caesarCipher('abcd', 3)).toBe('defg');
	});

	it('shifts multiple words the appropriate number of times', () => {
		expect(caesarCipher('abc def', 1)).toBe('bcd efg');
	});

	it('only shifts letters, not spaces, punctuation, numbers, or special characters', () => {
		expect(caesarCipher('abc def !@#?123', 1)).toBe('bcd efg !@#?123');
	});

	it('can handle uppercase and lowercase letters', () => {
		expect(caesarCipher('aA', 1)).toBe('bB');
		expect(caesarCipher('aB', 5)).toBe('fG');
	});

	it('can handle wrapping around the end of the alphabet', () => {
		expect(caesarCipher('z', 1)).toBe('a');
		expect(caesarCipher('xyz XYZ', 1)).toBe('yza YZA');
	});

	it('can handle large numbers for the shift amount', () => {
		expect(caesarCipher('z', 26)).toBe('z');
		expect(caesarCipher('xyz XYZ', 26)).toBe('xyz XYZ');
		expect(caesarCipher('z', 28)).toBe('b');
	});

	it('can handle negative numbers for the shift amount', () => {
		expect(caesarCipher('a', -2)).toBe('y');
		expect(caesarCipher('a', -52)).toBe('a');
		expect(caesarCipher('abc !@# 123 XYZ', -53)).toBe('zab !@# 123 WXY');
	});
});
