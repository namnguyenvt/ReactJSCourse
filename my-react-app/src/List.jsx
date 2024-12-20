
function List() {

    const fruits = [{ id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 }];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
    // fruits.sort((a, b) => a.calories - b.calories); // NUMERIC
    // fruits.sort((a, b) => b.calories - a.calories); // REVERSE NUMERIC

    const lowcalFruit = fruits.filter(fruit => fruit.calories < 50);

    const highcalFruit = fruits.filter(fruit => fruit.calories > 150);
    
    const listItems = lowcalFruit.map(localFruit => <li key={lowcalFruit.id}>
                                                   {lowcalFruit.name}: &nbsp;
                                                   <b>{lowcalFruit.calories}</b></li>);

    return (<ol>{listItems}</ol>);
}

export default List