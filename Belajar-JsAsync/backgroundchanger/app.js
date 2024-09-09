const delayedColorChange = (color, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.body.style.backgroundColor = color;
			resolve();
		}, delay);
	});
};

//delayedColorChange('red', 1000)
//	.then(() => delayedColorChange('yellow', 1000))
//	.then(() => delayedColorChange('green', 1000))
//	.then(() => delayedColorChange('navy blue', 1000))
//	.then(() => delayedColorChange('pink', 1000))
//	.then(() => delayedColorChange('grey', 1000))
//	.then(() => delayedColorChange('brown', 1000));

    async function changeColor() {
        await delayedColorChange('red', 1000);
        await delayedColorChange('yellow', 1000);
        await delayedColorChange('green', 1000);
        await delayedColorChange('blue', 1000);
        await delayedColorChange('purple', 1000);
        await delayedColorChange('orange', 1000);
        await delayedColorChange('black', 1000);
        return 'All Done!';
        }
        
        changeColor().then((res) => console.log(res));
        
        async function printRainbow() {
        await changeColor();
        console.log('All Done! Dari printRainbow');
        }
        
        printRainbow();    