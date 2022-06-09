let arr: any[] = [];
for (let i = -50000; i < 50000; i++) {
    arr.push(i);
}

arr = arr
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)


function bubbleSort(arr: any[]): any[] {
    for (let lastUnsorted = arr.length - 1; lastUnsorted > 0; lastUnsorted--) {
        for (let i = 0; i < lastUnsorted; i++) {
            if (arr[i] > arr[i+1]) {
                const temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }

    return arr;
}

function selectionSort(arr: any[]): any[] {
    for (let lastUnsorted = arr.length - 1; lastUnsorted > 0; lastUnsorted--) {
        let largestIndex = 0;
        for (let i = 1; i <= lastUnsorted; i++) {
            if (arr[i] > arr[largestIndex]) {
                largestIndex = i;
            }
        }

        const temp = arr[largestIndex];
        arr[largestIndex] = arr[lastUnsorted];
        arr[lastUnsorted] = temp;
    }

    return arr;
}

function sort(algorithm: (arr: any[]) => any[], name: string): any[] {
    if (name) {
        console.log('running ' + name + ' sort algorithm');
    }

    const array = JSON.parse(JSON.stringify(arr));

    const start = Date.now();

    const result = algorithm(array);

    console.log(name + ' sort algorithm runs in ' + (Date.now() - start) + 'ms');

    return result;
}

const bubbleSortResult = sort(bubbleSort, 'bubble');
const selectionSortResult = sort(selectionSort, 'selection');

console.log('all have same result: ' + (bubbleSortResult.join(',') === selectionSortResult.join(',')));
