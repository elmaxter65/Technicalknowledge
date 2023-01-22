# README

This code contains 5 different functions that calculate the nth number in the Fibonacci sequence. Each function uses a different approach to solve the problem.

## Challenge 1: Función Fibonacci O(n)
This function uses a loop to calculate the nth number in the Fibonacci sequence in O(n) time. It starts with two initial values, a and b, and iteratively calculates the next value in the sequence by adding the previous two values.

## Challenge 2: Función Fibonacci recursiva
This function uses recursion to calculate the nth number in the Fibonacci sequence. It calls itself twice, once for the (n-1)th value and once for the (n-2)th value, and returns the sum of these two values as the nth value in the sequence.

## Challenge 3: Función Fibonacci iterativa
This function uses a loop similar to Challenge 1, but starts with initial values of 0 and 1. It iteratively calculates the next value in the sequence by adding the previous two values.

## Challenge 4: Función Fibonacci utilizando closures
This function uses closures to calculate the nth number in the Fibonacci sequence. It returns a function that keeps track of the previous two values in the sequence and returns the next value each time it is called.

## Challenge 5: Función Eneacci
This function calculates the nth value of a sequence given D, the number of terms used to calculate the next term, and A, an array of initial terms of the sequence. It uses recursion to calculate the next term by summing the previous D terms.
