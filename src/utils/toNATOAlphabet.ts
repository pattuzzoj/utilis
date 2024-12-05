export default function toNATOAlphabet(str: string): string {
	const natoAlphabet: Record<string, string> = {
		A: 'ALPHA',
		B: 'BRAVO',
		C: 'CHARLIE',
		D: 'DELTA',
		E: 'ECHO',
		F: 'FOXTROT',
		G: 'GOLF',
		H: 'HOTEL',
		I: 'INDIA',
		J: 'JULIETT',
		K: 'KILO',
		L: 'LIMA',
		M: 'MIKE',
		N: 'NOVEMBER',
		O: 'OSCAR',
		P: 'PAPA',
		Q: 'QUEBEC',
		R: 'ROMEO',
		S: 'SIERRA',
		T: 'TANGO',
		U: 'UNIFORM',
		V: 'VICTOR',
		W: 'WHISKEY',
		X: 'X-RAY',
		Y: 'YANKEE',
		Z: 'ZULU',
	};

	return str
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toUpperCase()
		.split('')
		.map((letter) => natoAlphabet[letter] ?? letter)
		.join(' ');
}
