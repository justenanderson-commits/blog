// CURRENT BLOCKER:
  // Make the post work. Be able to pull up data in the browser

const express = require('express');
const app = express();


app.set('port', process.env.PORT || 3000);
app.locals.title = 'Ducks';
app.locals.ducks = [
  { id: 1, species: 'Mallard' },
  { id: 2, species: 'Green-winged Teal'},
  { id: 3, species: 'Northern Pintail'},
  { id: 4, species: 'Gadwall'},
  { id: 5, species: 'American Wigeon'}
]

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

app.get('/', (request, response) => {
  response.send('Oh hey, Ducks!')
});

app.get('/ducks', (request, response) => {
  response.send('All the ducks')
})

app.get('/api/v1/ducks/:species', (request, response) => {
  const species = request.params.species
  const duck = app.locals.ducks.find(duck => duck.species === species)
  if (!duck) {
    return response.sendStatus(404)
  }
  response.send(`Oh hey, ${species}!`);
  response.status(200).json(duck)
})

app.use(express.json())

app.post('/api/v1/ducks', (request, response) => {
  const id = Date.now()
  const duck = request.body
  
  for (let requiredParameter of ['species']) {
    if (!duck[requiredParameter]) {
      response  
      .status(422)
      .send({ error: `Expected format: { species: <String> }. You are missing a "${requiredParameter}" property.` })
    }
  }
  
  const { species } = duck
  app.locals.ducks.push({ id, species })
  response.status(201).json({ id, species })
  
})

app.use(express.static('public'));


