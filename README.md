<img src="admin/energy-bridge.svg" width="64">

# iobroker.energy-bridge

![Number of Installations](http://iobroker.live/badges/energy-bridge-installed.svg)
![Number of Installations](http://iobroker.live/badges/energy-bridge-stable.svg)
[![NPM version](http://img.shields.io/npm/v/iobroker.energy-bridge.svg)](https://www.npmjs.com/package/iobroker.energy-bridge)

![Test and Release](https://github.com/NexoWatt/ioBroker.energy-bridge/workflows/Test%20and%20Release/badge.svg)
[![Translation status](https://weblate.iobroker.net/widgets/adapters/-/energy-bridge/svg-badge.svg)](https://weblate.iobroker.net/engage/adapters/?utm_source=widget)
[![Downloads](https://img.shields.io/npm/dm/iobroker.energy-bridge.svg)](https://www.npmjs.com/package/iobroker.energy-bridge)

# EnergyBridge Adapter

Dieser Adapter integriert Energiegeräte in **ioBroker** über mehrere Protokolle und Templates (**Kategorie → Hersteller → Template**).

Unterstützte Protokolle (abhängig vom Template): **Modbus TCP/RTU/ASCII**, **MQTT**, **HTTP/JSON**, **UDP**, **M‑Bus**, **Speedwire**, **1‑Wire**.

**Wichtig:** Dies ist eine **Community-Edition**. Industrie-/Utility-Templates sind bewusst **nicht** enthalten (z. B. **TESVOLT**, **SMA Core1 / STP125**, **Alpitronic** DC‑Schnelllader, industrielle I/O‑Module).

## Implementierte Geräte (Kurzüberblick)
> Die vollständige Liste findest du in der Admin‑UI: **Gerät hinzufügen → Kategorie / Hersteller / Template**.

- **PV Inverter:** FoxESS, Goodwe, KACO, Kostal, SMA (STPxx‑50, STPxx‑US‑41, Sunny Tripower X), SolaX, Solar‑Log, SunSpec, Victron
- **Meter:** Janitza, Socomec, Siemens, Eastron, ABB, Carlo Gavazzi, Victron, SunSpec, M‑Bus, …
- **EV Charger / Wallbox:** go‑e, KEBA, ABL, openWB, Webasto, Heidelberg, Mennekes, SolaX, Spelsberg
- **Battery / ESS:** FENECON, FoxESS, Kostal, SolaX, Tesla, BYD, Pylontech, SMA, Victron, REFU, Sinexcel, Samsung, ADS‑TEC, …
- **Heat / Power‑to‑Heat:** TECALOR, LAMBDA, myPV, Askoma
- **IO / Sensorik:** Shelly, 1‑Wire (DS18B20)

## Voraussetzungen
- **Node.js >= 18**
- **ioBroker js-controller >= 6.0.11**
- **ioBroker admin >= 7.6.17**
- Netzwerkzugriff auf die jeweiligen Geräte (IP/Port, ggf. Modbus Unit‑ID)

## Funktionen
- Geräteintegration über **Templates** (Kategorie/Hersteller/Template)
- Kommunikation über mehrere **Protokolle** (abhängig vom Gerät)
- Automatische Anlage der notwendigen **Objekte/States** in ioBroker
- Optional: **Schreibzugriffe**, sofern ein Template dies unterstützt (z. B. Setpoints)

## Installation
1. Adapter installieren (z. B. via ioBroker Repository/Adapterliste).
2. Instanz starten.

## Konfiguration
1. In der Admin‑UI eine Instanz öffnen.
2. **Gerät hinzufügen** → Kategorie/Hersteller/Template wählen.
3. Verbindungsdaten je nach Template setzen (z. B. Host/Port/Unit‑ID bei Modbus, Broker/Topic bei MQTT, URL bei HTTP/JSON).
4. Poll‑Intervall/Timeouts nach Bedarf anpassen.

# EnergyBridge Adapter

This adapter integrates energy devices into **ioBroker** using multiple protocols and templates (**Category → Manufacturer → Template**).

Supported protocols (depending on the selected template): **Modbus TCP/RTU/ASCII**, **MQTT**, **HTTP/JSON**, **UDP**, **M‑Bus**, **Speedwire**, **1‑Wire**.

**Important:** This is a **community edition**. Industrial/utility templates are intentionally **not** included (e.g. **TESVOLT**, **SMA Core1 / STP125**, **Alpitronic** DC fast chargers, industrial I/O modules).

## Implemented devices (overview)
> The complete list is available in the Admin UI: **Add device → Category / Manufacturer / Template**.

- **PV Inverters:** FoxESS, Goodwe, KACO, Kostal, SMA (STPxx‑50, STPxx‑US‑41, Sunny Tripower X), SolaX, Solar‑Log, SunSpec, Victron
- **Meters:** Janitza, Socomec, Siemens, Eastron, ABB, Carlo Gavazzi, Victron, SunSpec, M‑Bus, …
- **EV Chargers / Wallboxes:** go‑e, KEBA, ABL, openWB, Webasto, Heidelberg, Mennekes, SolaX, Spelsberg
- **Battery / ESS:** FENECON, FoxESS, Kostal, SolaX, Tesla, BYD, Pylontech, SMA, Victron, REFU, Sinexcel, Samsung, ADS‑TEC, …
- **Heat / Power‑to‑heat:** TECALOR, LAMBDA, myPV, Askoma
- **IO / Sensors:** Shelly, 1‑Wire (DS18B20)

## Requirements
- **Node.js >= 18**
- **ioBroker js-controller >= 6.0.11**
- **ioBroker admin >= 7.6.17**
- Network access to the devices (IP/port, and Modbus Unit ID if applicable)

## Features
- Device integration via **templates** (category/manufacturer/template)
- Multi‑protocol communication (depending on the device)
- Automatically creates the required **objects/states** in ioBroker
- Optional: **write access** if a template supports it (e.g. setpoints)

## Installation
1. Install the adapter (e.g. via the ioBroker repository/adapter list).
2. Start the instance.

## Configuration
1. Open the instance configuration in Admin UI.
2. **Add device** → choose category/manufacturer/template.
3. Set the connection settings depending on the template (e.g. host/port/unit ID for Modbus, broker/topic for MQTT, URL for HTTP/JSON).
4. Adjust polling interval/timeouts as required.

It uses the libraries [modbus-serial](https://www.npmjs.com/package/modbus-serial), [mqtt](https://www.npmjs.com/package/mqtt) and [axios](https://www.npmjs.com/package/axios) to communicate with devices.

<!--
	### **WORK IN PROGRESS**
-->
## Changelog
### **WORK IN PROGRESS**
* (Nexowatt) - (nothing yet)

### 0.1.2 (2026-03-16)
* (Nexowatt) Align repository metadata with NPM latest (0.1.2) and add missing `common.news` entry
* (Nexowatt) Update README to ioBroker standard format (badges, DE/EN description, changelog + full MIT license)

### 0.1.1 (2026-03-16)
* (Nexowatt) Repository-checker fixes and release-script setup

### 0.1.0 (2026-02-23)
* (Nexowatt) Initial community release (industrial/utility templates intentionally excluded)

## License
The MIT License (MIT)

Copyright (c) 2026 Nexowatt <info@nexowatt.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
