def bouncingBall(h, bounce, window):
    bounces = 0
    while h >= window:
        bounces += 1
        h -= h - (h*bounce) 
        if h >= window:
            bounces += 1
    return bounces

print(bouncingBall(3, 0.66, 1.5)) #Deve ser 3
print(bouncingBall(30, 0.66, 1.5)) #Deve ser 15s