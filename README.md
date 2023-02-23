# Akamai-Solver-1.75
This is an example how a website protected by Akamai version 1.75 can be accessed and scraped by generating the necessary sensordata and retrieve cookies.\
This is a POC, and I release it only now, because version 1.75 is outdated and most site have switched to >2.\
\
\
source.js is the akamai source code extracted from a website\
deobfuscated.js is the deobfuscated source code\
final.js srapes nh-hotels.com by generating sensordata and a cookie\
compareTool lets you the different values of the sensordata\
\
This will be helpful to anyone looking to analyze future akamai versions. :)\
Version 2 is very simliar to 1.75, the obfuscation is different and the sensordata now gets encrypted, but the data remains almost the same.\
This will help you: https://github.com/SteakEnthusiast/Akamai-2.0-Sensor-Data-Decryption-Tool
