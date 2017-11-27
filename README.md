# Bruce Says, Chuck Says (draft)

![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge)
[ ![Codeship Status for daxeh/brucesays-chucksays](https://app.codeship.com/projects/de7720b0-b356-0135-9773-569517be71ea/status?branch=master)](https://app.codeship.com/projects/258222)

Bruce says, Chuck says is a joke screaming **waaaaatarrrh!!** interactive
chatbot.

## Description

This project demonstrates various applications of technologies with an
interactive joke telling chatbot using Chuck Norris Jokes
[API](https://api.chucknorris.io/#!).

Besides telling Chuck Norris jokes, it can serve as a base project for anyone
who wishes to explore in the subject of **machine learning** or to further
understand specifics of user interaction as a natural language by the process of
building, training and converting real conversation dialogs to structured data
using the algorithms/models that you've develop.

This Laravel/ReactJS app is built on a learning and work exploration made-up
tech lingo [**`JAM-N-devilbox`**][1]stack, **N** being the graph database Neo4J
which is hosted by GrapheneDB, database as a service.

<table class="techtable">
    <tr>
        <th>Technology<br/>Components &<br/>Services </th>
        <th> === </th>
        <th> JAM-N-devilbox </th>
    </tr>
    <tr>
        <td>
          <ul>
            <li> Ubuntu 16.04 </li>
            <li> Nginx 1.8.1 </li>
            <li> ReactJS 16.1.1</li>
            <li> Laravel 5.5 </li>
            <li> PHP 7.1 </li>
            <li> ES6 / Babel </li>
            <li> Redis 3.2.9 / Predis</li>
            <li> Neo4J / neo4j-php-client / GrapheneDB</li>
            <li> Pusher</li>
            <li> Docker </li>
          </ul>
        </td>
        <td><b> }=  <b/></td>
        <td bgcolor="#000000"><img src="brucelee.gif"/></td>
    </tr>
</table>

## API

Jokes

## Requirements

* [Docker](https://docker.io) >= v17.09.0

**OR**

* [PHP](https://http://php.net/manual/en/install.php) >= v7.1.0
* [Yarn](https://yarnpkg.com) >= v0.2x **or** [NPM](https://www.npmjs.com/)
* [Redis](https://redis.io/download)
* [Neo4J](https://neo4j.com/download/)

## Quick Start

```
docker-compose up -d
```

## Testing

## Troubleshoot

#### ErrorException (E_ERROR) The Mix manifest does not exist.

Ensure that `./webpack.mix.js` mix is set to `react`.

```
mix.react('resource..., 'public/js')
    .sass('resource..., 'public/jcss');
```

Execute Laravel React preset which configures and scaffolds a boilerplate React
view

```
yarn add babel-preset-react -D

yarn install && yarn run dev
```

## Credits

* Author of articles mentioned in some code snippets
* Graphics used/obtained from [giphy.com](https://giphy.com/),
  [flaticon.com](https://flaticon.com) and the web
* Creators of [PHPDocker](https://phpdocker.io/generator)

---

[1]: https://en.wikipedia.org/wiki/Solution_stack
