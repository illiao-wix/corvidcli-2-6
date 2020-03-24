import { addParam } from 'public/meh';

$w.onReady(() => {
    const meh = 'meh';
    console.log(meh);
    addParam({ meh });
})