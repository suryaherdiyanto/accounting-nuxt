import crypto from 'crypto';
import { writeFileSync, readFileSync } from 'fs';

function run() {

	const randomBytes = crypto.randomBytes(32);
	const randomBase64 = randomBytes.toString('base64');
	const envContent = readFileSync('.env', 'utf-8');

	console.log(`Generate key: ${randomBase64}`);

	// write the key to .env file as APP_KEY
	//Remove existing APP_KEY line if it exists
	const updatedEnvContent = envContent.replace(/^NUXT_SESSION_PASSWORD=.*$/m, 'NUXT_SESSION_PASSWORD=' + randomBase64);
	writeFileSync('.env', `${updatedEnvContent}`);

	process.exit(0);
}

run();
