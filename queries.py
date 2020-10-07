def process_queries():
    for one_lambda in lambdas:
        reduce(one_lambda,queries)
from functools import reduce
lambdas = [
    lambda y: y+1,
    lambda z: z*2
]

acum = [1,2,3]

print(list(map(lambda one_lambda: map(one_lambda,acum), lambdas)))