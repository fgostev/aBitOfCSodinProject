function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }
    const half = Math.ceil(arr.length / 2);    
    const firstHalf = arr.slice(0, half)
    const secondHalf = arr.slice(half)

    return merge(mergeSort(firstHalf),mergeSort(secondHalf));
}


function merge(left, right) {
    let arr = [];
  
    while (left.length > 0 && right.length > 0) {
      
      if (parseInt(left[0]) < parseInt(right[0])) {
        arr.push(left.shift())
      } else {
        arr.push(right.shift())
      }
    }
    
    return [...arr, ...left, ...right];
  }
const arr1 = [5,2];
const arr2 = [2,4,3,8];
const arr3 = [2,1,0,5,7,3,9];

console.log(mergeSort(arr1));
console.log(mergeSort(arr2));
console.log(mergeSort(arr3));