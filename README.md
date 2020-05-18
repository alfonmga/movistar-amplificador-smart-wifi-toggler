movistar-amplificador-smart-wifi-toggler
========================================
La motivación que me ha llevado a crear esto, ha sido el querer disminuir los campos electromagneticos a los que me expongo día a día.

Gracias a este pequeño script tengo la opción de encender/apagar la red inalambrica de forma pragmatica (muy útil por ejemplo, si quieres programarlo
para que deje de emitir todos los días a la hora que te vas a dormir).

Dr. Robert Rowen hablando sobre la radiación electromagnetica y como nos afecta en el cuerpo:
<p align="center">
  <a href="https://youtube.com/watch?v=n_yMw7Ax0eM" target="_blank">
    <img src="http://img.youtube.com/vi/n_yMw7Ax0eM/0.jpg"/>
  </a>
</p>

Instalación
-----------
Clonar repositorio e instalar dependencias:
```sh
  git clone https://github.com/alfonmga/movistar-amplificador-smart-wifi-toggler
  cd movistar-amplificador-smart-wifi-toggler/
  yarn install
```
 
Crear un archivo `.env` que contengan los siguientes valores secretos:
```dosini
  DEVICE_IP=<insertar-ip-dispositivo>
  DEVICE_LOGIN_PASSWORD=<password-interfaz-web>
```

Uso
---
```sh
 yarn on # desactivar
 yarn off # encender
```