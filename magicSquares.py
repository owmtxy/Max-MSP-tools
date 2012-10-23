# MAGIC SQUARES CALCULATOR
# solves magic square for odd-ordered grid sizes
# owmtxy 17/10/2012
# for python v.2.6.6

n = int(input("Enter (odd) order size (n): "))

square = []

def calculateSquare(row,col):
    val = n*((row+col-1+(n/2))%n) + ((row + (2*col)-2)%n)+1;
    return val

#Create Array
print "Magic",n,"*",n,"Square Array:"
for i in range(n):
    for j in range(n):
        square.append(calculateSquare(i+1,j+1))

# Print array in a nice n*n grid
for k in range(n):
    print square[k*n:(k*n)+n]

print "\n Modulo",n,"Array:"

#Create Array of modulo values
modSquare = []
for i in range(n):
    for j in range(n):
        modulo = (calculateSquare(i+1,j+1)%n)
        modSquare.append(modulo)

# Print array in a nice n*n grid
for k in range(n):
    print modSquare[k*n:(k*n)+n]
