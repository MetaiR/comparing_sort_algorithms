let array: any[] = [];
for (let i = -100000; i < 100000; i++) {
    array.push(i);
}

array = array
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

        if (largestIndex !== lastUnsorted) {
            const temp = arr[largestIndex];
            arr[largestIndex] = arr[lastUnsorted];
            arr[lastUnsorted] = temp;
        }
    }

    return arr;
}

function insertionSort(arr: any[]): any[] {
    for (let lastUnsorted = 1; lastUnsorted < arr.length; lastUnsorted++) {
        let temp = arr[lastUnsorted];
        let i;
        for (i = lastUnsorted - 1; i >= 0 && arr[i] > temp; i--) {
            arr[i + 1] = arr[i];
        }

        arr[i] = temp;
    }

    return arr;
}

async function sort(algorithm: (arr: any[]) => any[], name: string): Promise<any[]> {
    const cloneArray = JSON.parse(JSON.stringify(array));
    const start = Date.now();
    const result = algorithm(cloneArray);
    console.log(name + ' sort algorithm runs in ' + (Date.now() - start) + 'ms');
    return result;
}

Promise.all([sort(bubbleSort, 'bubble'), sort(selectionSort, 'selection'), sort(insertionSort, 'insertion')]).then(results => {
    const values = results.map(result => result.join(','));
    let allMatched = true;
    for (let i = 0; i < values.length - 2; i++) {
        allMatched = values[i] === values[i+1];
        if (!allMatched) {
            break;
        }
    }

    console.log('all have same result: ' + allMatched);
});