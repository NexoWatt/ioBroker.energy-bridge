# EnergyBridge (ioBroker adapter)

EnergyBridge is a **community multi-protocol adapter** for ioBroker.
It integrates energy devices using built-in templates (**Category → Manufacturer → Template**) and automatically creates the required states in ioBroker.

**Version:** `0.1.1`

## What it can do

- Integrate devices via **templates** (category/manufacturer based)
- Communicate via **Modbus TCP/RTU/ASCII**, **MQTT**, **HTTP/JSON**, **UDP**, **M-Bus**, **Speedwire**, **1‑Wire**
- Auto-create ioBroker objects/states for the selected template

## Supported devices (overview)

> The complete list is available in the Admin UI: **Add device → Category/Manufacturer/Template**.

- **PV Inverters:** FoxESS, Goodwe, KACO, Kostal, SMA (STPxx‑50, STPxx‑US‑41, Sunny Tripower X), SolaX, Solar‑Log, SunSpec, Victron
- **Meters:** Janitza, Socomec, Siemens, Eastron, ABB, Carlo Gavazzi, Victron, SunSpec, M‑Bus, …
- **EV Chargers / Wallboxes:** go‑e, KEBA, ABL, openWB, Webasto, Heidelberg, Mennekes, SolaX, Spelsberg
- **Battery / ESS:** FENECON, FoxESS, Kostal, SolaX, Tesla, BYD, Pylontech, SMA, Victron, REFU, Sinexcel, Samsung, ADS‑TEC, …
- **Heat / Power-to-heat:** TECALOR, LAMBDA, myPV, Askoma
- **IO / Sensors:** Shelly, 1‑Wire (DS18B20)

## Community edition scope (not included)

Industrial/utility templates are intentionally excluded, for example:

- TESVOLT Energy Manager / Vermarktung interfaces
- SMA Core1 and SMA STP125
- Alpitronic Hypercharger / DC fast chargers (incl. ChargePoint‑alpitronic)
- Industrial I/O modules (Kmtronic, W&T Web‑IO, Siemens LOGO, Filipowski)

## Requirements

- **Node.js >= 18**
- **ioBroker js-controller >= 6.0.11**
- **ioBroker admin >= 7.6.17**

## Changelog

See **CHANGELOG.md**.

## License

Copyright (c) 2026 Nexowatt

MIT License — see **LICENSE**.
