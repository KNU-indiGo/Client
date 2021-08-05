# indiGo
LG-WebOS internship project


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

