var count_to = prompt("How high should we count even numbers?")

var sure = confirm('are you sure you want to count to ' + count_to + '?')
if (sure) {
    for (var i = 1; i < count_to; i++){
        if (i % 2 === 0)
            console.log("the number", i, "is even")
    }
}

