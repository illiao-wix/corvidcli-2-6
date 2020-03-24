import { addParam } from 'public/meh';

$w.onReady(() => {
    const meh = 'blaster bombaster';
    console.log(meh);
    addParam({ meh });
})

function foo () {
    console.log('Foo logger');
}

