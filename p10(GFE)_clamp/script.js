```
Implement a function clamp(number, lower, upper) to restrict a number within the inclusive lower and upper bounds.

Arguments

value (number): The number to clamp.
lower (number): The lower bound.
upper (number): The upper bound.
Returns

(number): Returns the clamped number.
```

export default function clamp(value, lower, upper) {
    if (lower <= value &&  value<= upper){
      return value
    }
    else if (value < lower){
      return lower
    }
    return upper;
}