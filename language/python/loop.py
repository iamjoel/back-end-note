# range(start, stop[, step])
for i in range(5):
    print i;
print '==============';

for i in range(0,5,2):
    print i;
print 20 * '*';

for i in [0, 1, 2]:
    print i;

# one line loop~ cool~
arr = [-num for num in range(20) if num % 3 == 1];
print arr;

print 10 * '*', 'for end', 10 * '*';

i =  0;
while i < 5:
    print i;
    i+=1;

print 20 * '*';

i =  0;
while True:
    if i >= 5:
        break;
    else:
        i+=1;
        if i % 2 == 1:
            continue;
        print i;
