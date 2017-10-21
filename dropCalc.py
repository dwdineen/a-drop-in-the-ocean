from math import *

def get_x(t, q):
    q = float(q)
    t = float(t)

    q = .66667
    num = q * sin(t)
    
    temp = 1 - q + q * cos(t)
    denom = temp**2 + q**2 * (sin(t))**2

    x = q * sin(t) - (num / denom) 
    return x

    # return q * cos(t) * (1 - sin(t))


def get_y(t, q):

    q = .66667
    num = 1 - q + (q * cos(t))
    temp = 1 - q + q * cos(t)
    denom = temp**2 + q**2 * (sin(t))**2

    y = q * cos(t) + (num / denom)
    return y
    # return q * ( sin(t) - 1 )

def getPoints(n):

    s = (2 * pi) / (n)
    start = n/4
    for j in range(start, n + 1 + start):
        
        i = j % (n + 1)
        
        x = get_x(i * s, 1)
        y = get_y(i * s, 2.5)
        print('this.addVertex(x + size * {}, y + -size * {});'.format(x, y))

getPoints(44)