function doPromiseJob(job, person) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (person.stamina > 50) {
                person.stamina -= 30;
                resolve({
                    result: `${job} success`
                });
            } else {
                reject(new Error(`${job} failed`));
            }
        }, 1000);
    });
};

const mina = {stamina: 100};

doPromiseJob('work', mina)
    .then(v => {
        console.log(v.result);
        return doPromiseJob('have lunch', mina);
    })
    .then(v => {
        console.log(v.result);
        return doPromiseJob('study', mina);
    })
    .then(v => {
        console.log(v.result);
        return doPromiseJob('have dinner', mina);
    })
    .catch(e => {
        console.error(e);
    });

console.log("========================");

const sana = {stamina: 100};

const execute = async function () {
    try {
        let v = await doPromiseJob('work', sana);
        console.log(v.result);
        v = await doPromiseJob('study', sana);
        console.log(v.result);
        await doPromiseJob('lunch', sana);
    } catch (e) {
        console.error(e);
    }

}
setTimeout(() => execute(), 3000);
