## 2021 LGSI Hackathon - Silver Award 🥈
# Smart Fire Detection System

* daily 59 deaths are caused in India ***by Fire*** / annually 1929 deaths are caused in Korea ***by Fire***  
* And more than sixty percent of the accidents have occured ***'in'*** the building.
* When the fire occurs in the building, the firefighters do not know how many people are on the scene  
  and cannot anticipate the location of each people, which leads to the late rescue operation.

#### ✔ So, we came up with our purpose.  
1. Make ***rescue operation*** fast and ***accurate*** when fire occurs inside the building.  
2. Give ***alert*** to firefighters with the ***insight*** of the scene

![goal](https://user-images.githubusercontent.com/33208246/132966598-58a76652-446c-476f-a21a-d4c7a06db165.JPG)  

## System Architecture  

![how](https://user-images.githubusercontent.com/33208246/132966613-2a827a7a-d210-47c2-9400-45bb82f44cd0.JPG)

![structure1](https://user-images.githubusercontent.com/33208246/132967047-5ef3ec8c-d1e7-464d-9c2e-2eb2ee557eb2.JPG)

![structure2](https://user-images.githubusercontent.com/33208246/132967053-8353219d-d63f-4ffe-b76e-b32551bf8b3a.JPG)

![structure3](https://user-images.githubusercontent.com/33208246/132967057-6749b8ed-53dd-4462-95dc-3a6004c70304.JPG)

The detailed ***Server*** structure is on the [KNU-Indigo/Server](https://github.com/KNU-indiGo/Server).

## Demo
![fire_detected](https://user-images.githubusercontent.com/33208246/132967141-0db05cd2-f3ba-4419-a4ea-9f06422b0168.JPG)  
![marker](https://user-images.githubusercontent.com/33208246/132967225-fe242b98-c6fe-4b8e-a81f-8f13b846e39c.JPG)  
- When the fire is detected, it alert message and the green marker on the map turns red.
- And when clicked marker, the page moves to the specific information page.

![info](https://user-images.githubusercontent.com/33208246/132967245-288a16cd-74b7-4825-9202-54489840a4f6.JPG)  
![detec](https://user-images.githubusercontent.com/33208246/132967247-a05957a0-5b99-4132-9c65-e9748c1ac404.JPG)  
- The page contains a list of cameras on the scene, and we can see the real-time streaming video of the fire scene.
- There are two buttons for firefighters, "See Statistics" and "Change State to Ongoing".

![change button](https://user-images.githubusercontent.com/33208246/132967286-eb57fe74-8f4b-47a8-81ba-9625efa27132.JPG)  
- Click "Change State to ..." button, we can see that button changed.
- And we can check that the marker changed on the main page.



## Contributors

* [pinkishincoloragain](https://github.com/pinkishincoloragain)
* [Go-Jaecheol](https://github.com/Go-Jaecheol)
* [choi-jaewon](https://github.com/choi-jaewon)
* [nullyng](https://github.com/nullyng)
* [ParkGyurim99](https://github.com/ParkGyurim99)

## Package & Install
If there is a change in the code, follow the steps below.  
If there is no change, just run step 4(install to webOS).  

- run `npm install` at the top directory.

- package enact project at the top directory of project.  
```
enact pack
```  
Then this will create dist folder in current directory.

- build ipk file  
```
ares-package ./dist
```
ipk file will be created in current path.

- install to webOS
```
ares-install --device TargetDevice <ipk file>
```
TargetDevice means emulator, raspberrypie 4, etc..

