function BinarySearch(t,Arr)       // t - искомый элемент,
{   
    Arr = Arr.sort(function(a,b){  //сортируем массив по возрастанию
        return a - b;
    });
                
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

alert(`search index = ${BinarySearch(8, [23, 332, 3, 40, 5, 60, 7, 8])}`);