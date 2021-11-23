let trigger = true;
let binaryMargin = 9;
let binaryCount = 0;
let plus = true;
let binary = [];

while (trigger) {
	if (binaryCount % 2 == 1) {
		binary.push(binaryCount);
	}

	if (binaryCount == binaryMargin) {
		console.log(...binary);
		if (binaryMargin <= 1) {
			plus = false;
		}
		if (plus) {
			binaryMargin = binaryMargin - 2;
		} else {
			if (binaryMargin >= 9) {
				trigger = false;
			} else {
				binaryMargin = binaryMargin + 2;
			}
		}
		binaryCount = 0;
		binary = [];
	}

	binaryCount = binaryCount + 1;
}
