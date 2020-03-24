import { addParam } from 'public/meh';

$w.onReady(() => {
    const meh = 'bla';
    console.log(meh);
    addParam({ meh });
})

function foo () {
    console.log('Foo logger');
}

