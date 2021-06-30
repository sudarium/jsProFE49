function BinarySearch(t,Arr)       // t - искомый элемент,
{                                // Arr - упорядоченный массив, в котором ищем.
    let firstElArr = 0; 
    let lastElArr = Arr.length; 
    let average = 0; 
                                 
    while (firstElArr < lastElArr)                
    {  average = Math.floor((firstElArr+lastElArr)/2);
       if (t <= Arr[average]) lastElArr = average;
       else firstElArr = average+1;
    }
   
    if (Arr[ firstElArr ] === t) return firstElArr;     // На выходе индекс искомого элемента.
    else return -1;                 // Если искомого элемента нет в массиве, то -1.
}

alert(`search index = ${BinarySearch(8, [1, 2, 3, 4, 5, 6, 7, 8])}`);