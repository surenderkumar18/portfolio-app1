# Trick to remember

- `only remember first half`
- `in second half, just replace` _left_ `with` _right_
- `and do` _right--_
- `fix for` [4, 2, 0, 3, 2, 5]() _below code work fine for this_

function RainTrap(height){
let left = 0,
right = height.length - 1,
lMaxHeight = 0,
rMaxHeight = 0,
total = 0;

    while (left < right){
        if(height[left] < height[right]){
            if(height[left] > lMaxHeight){
                lMaxHeight = height[left];
            } else {
                total = total + (lMaxHeight - height[left]);
            }
            left++;
        }
    }

    return total;

}

RainTrap([4, 2, 0, 3, 2, 5])
