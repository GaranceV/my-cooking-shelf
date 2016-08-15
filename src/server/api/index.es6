import express from 'express';
import recipes from './recipes';

export default () => {
	let api = express.Router();

	// mount the facets resource
	api.use('/recipes', recipes);

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
	});

	return api;
}