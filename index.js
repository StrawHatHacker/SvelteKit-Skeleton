/*
	Set up so it can run behind NGINX

	Commented statements are optional, just in case you want to use them.
*/
import { handler } from './build/handler.js';
import robots from 'express-robots-txt';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.set('trust proxy', true);
app.disable('x-powered-by'); // Hide "powered by express"

// Allow indexing by all search engines
app.use(
	robots({
		UserAgent: '*',
		Disallow: ''
	})
);

// app.use('/static', express.static('Path to static folder'));
// app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

const port = process.env.port || 3000;
app.listen(port, () => console.log('App listening on port ' + port));
