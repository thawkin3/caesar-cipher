// // INITIAL EMPTY FUNCTION
// const caesarCipher = (message, shiftAmount) => {
// 	return message;
// }

// // CAN HANDLE LOWERCASE LETTERS AT THE BEGINNING OF THE ALPHABET ONLY
// // FAILS ON LETTERS AT THE END OF THE ALPHABET, UPPERCASE LETTERS, AND CHARACTERS OTHER THAN LETTERS
// const caesarCipher = (message, shiftAmount) => {
// 	const encryptedMessage = message.split('').map((letter, index) => {
// 		const code = message.charCodeAt(index);
// 		const shiftedCode = code + shiftAmount;
// 		return String.fromCharCode(shiftedCode);
// 	});
// 	return encryptedMessage.join('');
// }

// // CAN HANDLE LOWERCASE LETTERS AT THE BEGINNING OF THE ALPHABET ONLY AND CHARACTERS OTHER THAN LETTERS
// // FAILS ON LETTERS AT THE END OF THE ALPHABET AND UPPERCASE LETTERS
// const caesarCipher = (message, shiftAmount) => {
// 	const encryptedMessage = message.split('').map((character, index) => {
// 		const code = message.charCodeAt(index);
// 		if (code >= 97 && code <= 122) {
// 			const shiftedCode = code + shiftAmount;
// 			return String.fromCharCode(shiftedCode);
// 		}
// 		return character;
// 	});
// 	return encryptedMessage.join('');
// }

// // CAN HANDLE LOWERCASE AND UPPERCASE LETTERS AT THE BEGINNING OF THE ALPHABET ONLY AND CHARACTERS OTHER THAN LETTERS
// // FAILS ON LETTERS AT THE END OF THE ALPHABET
// const caesarCipher = (message, shiftAmount) => {
// 	const encryptedMessage = message.split('').map((character, index) => {
// 		const code = message.charCodeAt(index);
// 		if ((code >= 97 && code <= 122) || (code >= 65 && code <= 90)) {
// 			const shiftedCode = code + shiftAmount;
// 			return String.fromCharCode(shiftedCode);
// 		}
// 		return character;
// 	});
// 	return encryptedMessage.join('');
// }

// // CAN HANDLE LOWERCASE AND UPPERCASE LETTERS ANYWHERE IN THE ALPHABET, AND OTHER NON-ALPHA CHARACTERS, AND LARGE SHIFT AMOUNTS
// // FAILS ON NEGATIVE NUMBERS
// const caesarCipher = (message, shiftAmount) => {
// 	const encryptedMessage = message.split('').map((character, index) => {
// 		const code = message.charCodeAt(index);
// 		// lowercase
// 		if (code >= 97 && code <= 122) {
// 			const shiftedCode = ((code + shiftAmount - 97) % 26) + 97;
// 			return String.fromCharCode(shiftedCode);
// 		// uppercase
// 		} else if (code >= 65 && code <= 90) {
// 			const shiftedCode = ((code + shiftAmount - 65) % 26) + 65;
// 			return String.fromCharCode(shiftedCode);
// 		}
// 		return character;
// 	});
// 	return encryptedMessage.join('');
// }

// END RESULT: CAN HANDLE LOWERCASE AND UPPERCASE LETTERS ANYWHERE IN THE ALPHABET, AND OTHER NON-ALPHA CHARACTERS, AND LARGE AND NEGATIVE SHIFT AMOUNTS
const caesarCipher = (message, shiftAmount) => {
	const encryptedMessage = message.split('').map((character, index) => {
		const code = message.charCodeAt(index);
		// helps adjust for negative shift amounts, turns this into a positive number
		const moduloShiftAmount = (shiftAmount % 26) + 26;
		// lowercase
		if (code >= 97 && code <= 122) {
			const shiftedCode = ((code + moduloShiftAmount - 97) % 26) + 97;
			return String.fromCharCode(shiftedCode);
		// uppercase
		} else if (code >= 65 && code <= 90) {
			const shiftedCode = ((code + moduloShiftAmount - 65) % 26) + 65;
			return String.fromCharCode(shiftedCode);
		}
		return character;
	});
	return encryptedMessage.join('');
}

export default caesarCipher;
