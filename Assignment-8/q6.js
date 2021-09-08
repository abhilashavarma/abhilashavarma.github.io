const iPhone11 = {
    name: 'iPhone 11',
    manufacturer: 'Apple',
    price: 699,
    specs: {
        color: 'White',
        memory: {
            value: 128,
            unit: 'MB'
        },
        cameras: {
            front: '12 MP Wide',
            rear: '12 MP Ultra Wide'
        },
        availableColors: ['Black', 'Green', 'Yellow', 'Purple', 'Red', 'White']
    }
}

const iPhone11Copy = { ...iPhone11 };
console.log('Copy');
console.log(iPhone11Copy);
const iPhone11DeepCopy =  {
    ...iPhone11,
    specs: {
        ...iPhone11.specs,
        memory: {
            ...iPhone11.specs.memory
        },
        cameras: {
            ...iPhone11.specs.cameras
        },
        availableColors: [
            ...iPhone11.specs.availableColors
        ]
    }
}


console.log('DeepCopy');
console.log(iPhone11DeepCopy);

if (JSON.stringify(iPhone11Copy) === JSON.stringify(iPhone11DeepCopy)){
    console.log('1');
}

iPhone11Copy.name = 'Samsung';
console.log('iPhone11 Original');
console.log(iPhone11.name);
console.log('iPhone11 Copy');
console.log(iPhone11Copy.name);
console.log('iPhone11 DeepCopy');
console.log(iPhone11DeepCopy.name);

iPhone11Copy.specs.availableColors.push('Samsung');
console.log('iPhone11 Original');
console.log(iPhone11.specs.availableColors);
console.log('iPhone11 Copy');
console.log(iPhone11Copy.specs.availableColors);
console.log('iPhone11 DeepCopy');
console.log(iPhone11DeepCopy.specs.availableColors);


iPhone11DeepCopy.name = 'Samsung';
console.log('iPhone11 Original');
console.log(iPhone11.name);
console.log('iPhone11 Copy');
console.log(iPhone11Copy.name);
console.log('iPhone11 DeepCopy');
console.log(iPhone11DeepCopy.name);

iPhone11DeepCopy.specs.color = 'Pink';
console.log('iPhone11 Original');
console.log(iPhone11.specs.color);
console.log('iPhone11 Copy');
console.log(iPhone11Copy.specs.color);
console.log('iPhone11 DeepCopy');
console.log(iPhone11DeepCopy.specs.color);


iPhone11.specs.memory = {
            value: 4,
            unit: 'GB'
        };
console.log('iPhone11 Original');
console.log(iPhone11.specs.memory);
console.log('iPhone11 Copy');
console.log(iPhone11Copy.specs.memory);
console.log('iPhone11 DeepCopy');
console.log(iPhone11DeepCopy.specs.memory);


iPhone11DeepCopy.specs.memory = {
            value: 8,
            unit: 'GB'
        };
console.log('iPhone11 Original');
console.log(iPhone11.specs.memory);
console.log('iPhone11 Copy');
console.log(iPhone11Copy.specs.memory);
console.log('iPhone11 DeepCopy');
console.log(iPhone11DeepCopy.specs.memory);