'use strict';

const Baseball = require('./baseball.js');
const model = require('../models');

const getGames = () => {
    const games = {};
    const data = model.readFile();

    for (let key in data) {
        if (!data.hasOwnProperty(key)) continue;
        games[key] = Baseball.toObject(data[key]);
    }

    return games;
};

exports.getGames = () => {
    return Object.values(getGames());
};

const getGame = exports.getGame = (id) => {
    if (!id) throw 'please input id';

    const games = getGames();
    const game = games[id];
    if (!game) throw 'there is no such game';

    return game;
}

exports.makeGame = (digit) => {
    const baseball = new Baseball(undefined, undefined, undefined,
        undefined, digit);
    const id = baseball.getId();

    const data = model.readFile() || {};
    data[`${id}`] = baseball.attachedAnswer();
    model.writeFile(JSON.stringify(data));

    return baseball.getId();
};

exports.guessAnswer = (id, guess) => {
    if (!id) throw 'input your id';
    if (!guess || !guess.length) throw 'input your guess number';

    const fileData = model.readFile() || {};
    if (!fileData[id]) throw 'No Such Game';

    const game = getGame(id);
    if (+game.getDigit() !== guess.length)
        throw 'Game Digit is not equal to guess number length';

    const result = game.matchAnswer(guess);
    const history = {guess: guess.join(''), result: result.toString()};
    game.addHistory(history);
    game.setDone(+game.getDigit() === result.strike);

    fileData[id] = game.attachedAnswer();
    model.writeFile(fileData);

    return Object.assign({done: game.getDone()}, history);
};

exports.readyGame = () => {
    try {
        model.readFile();
    } catch (err) {
        model.writeFile({});
    }
};

exports.removeGame = (id) => {
    if (!id) throw 'input your id';

    const fileData = model.readFile() || {};
    if (!fileData[id]) throw 'there is no such game';

    delete fileData[id];
    model.writeFile(fileData);

    return getGames();
};

