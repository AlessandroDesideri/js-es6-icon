const iconsList = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'purple'
	}
];

const containerIcons = document.querySelector('.container-icons');
const selectElementType = document.querySelector('.filter-type');
const selectElementColor = document.querySelector('.filter-color');


function createBoxIcons(icon){
	return `
		<div class="box d-flex flex-column justify-content-center align-items-center ${icon.color}">
			<i class="${icon.family} ${icon.prefix}${icon.name}"></i>
			<div class="printed-name">${icon.name.toUpperCase()}</div>
		</div> 
	`
};

function printIcons(containerIcons, iconsList) {
	containerIcons.innerHTML = '';
	iconsList.forEach((icon) => {
		containerIcons.innerHTML += createBoxIcons(icon);
	});
};
printIcons(containerIcons, iconsList)

function doSelect(propertyName, selectValue) {
	const filtredIcons = iconsList.filter(function(icon){
		if (selectValue === icon[propertyName] || selectValue === 'all'){
			return true;
		}
		return false;
	})
	printIcons(containerIcons, filtredIcons);
};
doSelect('type', selectElementType.value);
doSelect('color', selectElementColor.value);
selectElementType.addEventListener('change', function(event) {
	printIcons(containerIcons, iconsList);

	doSelect('type', selectElementType.value);
});

selectElementColor.addEventListener('change', function(event) {
	printIcons(containerIcons, iconsList);

	doSelect('color', selectElementColor.value);
});