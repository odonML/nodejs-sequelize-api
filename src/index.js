import 'dotenv/config';
import app from './app';

const port = process.env.PORT;

async function main() {
	await app.listen(port, () => console.log(`run server in port ${port}`));
}

main();
