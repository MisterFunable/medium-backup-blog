---
title: "Making a Local Web Server with the DFRobot FireBeetle 2 ESP32-E PlatformIO"
description: "Making a Local Web Server with the DFRobot FireBeetle 2 ESP32 E and PlatformIO Without any sensors or screens, a small web server as first project seemed fine. If the Arduino IDE f"
permalink: "making-a-local-web-server-with-the-dfrobot-firebeetle-2-esp32-e-platformio"
order: 12
publishedAt: "2025-12-02T15:45:03.000Z"
readingTime: 4
heroImage: "/medium-assets/12/img-01.png"
sourceUrl: "https://funable.medium.com/making-a-local-web-server-with-the-dfrobot-firebeetle-2-esp32-e-platformio-0bbe6abfa8ab"
---
<!-- Source: https://funable.medium.com/making-a-local-web-server-with-the-dfrobot-firebeetle-2-esp32-e-platformio-0bbe6abfa8ab -->
<!-- Published: 2025-12-02T11:45:03 -->
# Making a Local Web Server with the DFRobot FireBeetle 2 ESP32-E and PlatformIO

Without any sensors or screens, a small web server as first project seemed fine.

<!-- Image Source: https://miro.medium.com/1*PPEvu8Q6roO-uht_8CU0nA.png | Local: /medium-assets/12/img-01.png -->
![Thanks 🍌  Pro](/medium-assets/12/img-01.png)

If the Arduino IDE feels clunky, [PlatformIO](https://platformio.org/) inside VS Code is much smoother and supports the exact same code. Most official [PlatformIO example repos](https://github.com/platformio/platformio-examples/tree/develop) follow the same flow you'll see here.

## Installation

- DFRobot FireBeetle 2 ESP32-E board (install the [driver](https://wiki.dfrobot.com/FireBeetle_Board_ESP32_E_SKU_DFR0654#target_10:~:text=The%20driver%20is%20not%20installed%20automatically%20after%20plugging%20into%20the%20device%3F) if macOS doesn't see it)

- USB data cable

- [VS Code](https://code.visualstudio.com/) with the [PlatformIO IDE](https://marketplace.visualstudio.com/items?itemName=platformio.platformio-ide) extension

<!-- Image Source: https://miro.medium.com/1*AvkUn_fZFs33ihtvF6B6ug.png | Local: /medium-assets/12/img-02.png -->
![](/medium-assets/12/img-02.png)

- Your 2.4 GHz WiFi SSID and password (ESP32 boards don't speak 5 GHz)

- About 30 minutes, assuming nothing weird happens

If PlatformIO isn't installed, start with the [official guide](https://wiki.dfrobot.com/ESP32_Platform_IO). The only snag I hit was `pio home` refusing to open because the VS Code extension bundled the wrong pip environment. Running `pip install platformio` outside VS Code fixed it immediately.

Always create a fresh PlatformIO project. The build system needs all of its hidden folders and config files before it will upload to the board. I'll document the scaffolding details separately.

## Step 1: Test the Board with a Blink

Yes, Blink is the most boring sketch on earth, but nothing is worse than debugging WiFi code on a board that never flashed correctly.

### Create the Project

<!-- Image Source: https://miro.medium.com/1*nwdpsC0ch-qZarA5bS-f4g.png | Local: /medium-assets/12/img-03.png -->
![In the folder](/medium-assets/12/img-03.png)

1. Open PlatformIO and click **New Project**

2. Name it anything (I chose `DFROBOT`)

3. Search for **DFRobot FireBeetle 2 ESP32-E** and select it (auto-detect sometimes works)

4. Wait for PlatformIO to download the toolchain. First run takes a while.

### Configure platformio.ini

<!-- Image Source: https://miro.medium.com/1*yxUEA0UEjoCFCZpNb9SGLA.png | Local: /medium-assets/12/img-04.png -->
![](/medium-assets/12/img-04.png)

Open `platformio.ini`and make it simple:

```ini
[env:dfrobot_firebeetle2_esp32e]
platform = espressif32
board = dfrobot_firebeetle2_esp32e
framework = arduino
monitor_speed = 115200
```

That's it!

### The Blink Code

Open `src/main.cpp` and replace everything with this:

```scss
#include <Arduino.h>

#define LED_PIN 2

void setup() {
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_PIN, HIGH);
  delay(1000);
  digitalWrite(LED_PIN, LOW);
  delay(1000);
}
```

### Upload and Test

<!-- Image Source: https://miro.medium.com/1*IrG8X1eZE80WUWbr7hcD9w.png | Local: /medium-assets/12/img-05.png -->
![Logo > Upload > Check Terminal](/medium-assets/12/img-05.png)

Click **Upload** in the **PlatformIO** sidebar and wait for the compile to finish. If the onboard LED blinks, **PlatformIO** can talk to the hardware and you're ready for WiFi work.

Your board (if the same), should look like this:

<!-- Image Source: https://miro.medium.com/1*kSxKL4wKMC97Jwvw_XgXjQ.png | Local: /medium-assets/12/img-06.png -->
![But blinking fast, lol](/medium-assets/12/img-06.png)

Once you see that green light blinking, you're good. The board works, PlatformIO can talk to it, and you're ready to move on.

## Step 2: Build the Web Server

With the board confirmed, add WiFi and a simple HTML interface.

### Update the Code

Replace everything in `src/main.cpp`with this:

```cpp
#include <Arduino.h>
#include <WiFi.h>
#include <WebServer.h>

// Replace with your WiFi credentials
const char* ssid = "YOUR_WIFI_NAME";
const char* password = "YOUR_WIFI_PASSWORD";

// Built-in LED pin
#define LED_PIN 2

// Create web server on port 80
WebServer server(80);

// HTML for the webpage
const char* html = R"rawliteral(
<!DOCTYPE html>
<html>
<head>
    <title>ESP32 Control</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background: #f0f0f0;
        }
        h1 {
            color: #333;
        }
        button {
            background: #4CAF50;
            color: white;
            padding: 15px 32px;
            font-size: 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin: 10px;
        }
        button.off {
            background: #f44336;
        }
        button:hover {
            opacity: 0.8;
        }
        .status {
            padding: 20px;
            background: white;
            border-radius: 4px;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <h1>ESP32 Web Server</h1>
    <div class="status">
        <p>Control the onboard LED from your browser.</p>
    </div>
    <button onclick="fetch('/on')">Turn LED ON</button>
    <button class="off" onclick="fetch('/off')">Turn LED OFF</button>
</body>
</html>
)rawliteral";

// Handle main page
void handleRoot() {
    Serial.println("Request received: /");
    server.send(200, "text/html", html);
}

// Handle LED ON
void handleOn() {
    Serial.println("Request received: /on");
    digitalWrite(LED_PIN, HIGH);
    server.send(200, "text/plain", "LED is ON");
}

// Handle LED OFF
void handleOff() {
    Serial.println("Request received: /off");
    digitalWrite(LED_PIN, LOW);
    server.send(200, "text/plain", "LED is OFF");
}

void setup() {
    Serial.begin(115200);
    pinMode(LED_PIN, OUTPUT);
    digitalWrite(LED_PIN, LOW);
    
    // Connect to WiFi
    Serial.print("Connecting to WiFi");
    WiFi.begin(ssid, password);
    
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    
    Serial.println("\nConnected!");
    Serial.print("IP Address: ");
    Serial.println(WiFi.localIP());
    
    // Setup web server routes
    server.on("/", handleRoot);
    server.on("/on", handleOn);
    server.on("/off", handleOff);
    
    // Start server
    server.begin();
    Serial.println("Web server started");
}

void loop() {
    server.handleClient();
}
```

> Make sure to replace **YOUR_WIFI_NAME** and **YOUR_WIFI_PASSWORD** with your actual WiFi credentials. Make sure you're using 2.4GHz WiFi , ESP32 boards don't work with 5GHz.

### Upload the Web Page

<!-- Image Source: https://miro.medium.com/1*8vxEy9RCkk3x3F9QzqLQHQ.png | Local: /medium-assets/12/img-07.png -->
![](/medium-assets/12/img-07.png)

Upload using the **Upload and Monitor** option so the Serial monitor prints the assigned IP address as soon as WiFi connects.

<!-- Image Source: https://miro.medium.com/1*G4Ge3_7BuNkGvQ5Vw5E9Rw.png | Local: /medium-assets/12/img-08.png -->
![](/medium-assets/12/img-08.png)

And now you should be able to see the website:

<!-- Image Source: https://miro.medium.com/1*68PLH36IugKLDdLDEPdgbA.png | Local: /medium-assets/12/img-09.png -->
![](/medium-assets/12/img-09.png)

Open that IP in a browser on the same WiFi network and you should see the two-button page. If the browser blocks local-network access, enable it for this site or just test in Safari.

Prefer curl?

```cpp
curl http://YOUR_LOCAL_IP/
curl http://YOUR_LOCAL_IP/on
curl http://YOUR_LOCAL_IP/off
```

<!-- Image Source: https://miro.medium.com/1*6UQyorlRw2bZEw9hEVzAPA.png | Local: /medium-assets/12/img-10.png -->
![Monitor output](/medium-assets/12/img-10.png)

And yes! The light is On. Congrats champ!

<!-- Image Source: https://miro.medium.com/1*kSxKL4wKMC97Jwvw_XgXjQ.png | Local: /medium-assets/12/img-06.png -->
![](/medium-assets/12/img-06.png)

---

## Things Worth Mentioning

- First boot spewed "^␐Q" and weird question mark characters because I forgot to set `monitor_speed =115200` in `platformio.ini`.

- If the LED never responds, double-check that you added real WiFi credentials and you're on 2.4 GHz.

- "Browser can't reach it" almost always means your phone or laptop is on a different network.

I wrestled with the USB driver at first, but once that was sorted it felt great seeing PlatformIO push everything from VS Code without extra steps.

Hopefully this walkthrough saves you some google searches.

That's all for now! Cheers.
