export default function fromNATOAlphabet(str: string): string {
	const natoAlphabetReverse: Record<string, string> = {
		ALPHA: 'A',
		BRAVO: 'B',
		CHARLIE: 'C',
		DELTA: 'D',
		ECHO: 'E',
		FOXTROT: 'F',
		GOLF: 'G',
		HOTEL: 'H',
		INDIA: 'I',
		JULIETT: 'J',
		KILO: 'K',
		LIMA: 'L',
		MIKE: 'M',
		NOVEMBER: 'N',
		OSCAR: 'O',
		PAPA: 'P',
		QUEBEC: 'Q',
		ROMEO: 'R',
		SIERRA: 'S',
		TANGO: 'T',
		UNIFORM: 'U',
		VICTOR: 'V',
		WHISKEY: 'W',
		'X-RAY': 'X',
		YANKEE: 'Y',
		ZULU: 'Z',
	};

	return str
		.toUpperCase()
		.split(' ')
		.map((word) => natoAlphabetReverse[word] ?? word)
		.join('');
}
