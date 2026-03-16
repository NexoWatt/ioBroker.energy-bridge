# EnergyBridge (ioBroker adapter)

EnergyBridge is a **community multi-protocol device adapter** for ioBroker.  
It integrates energy devices using built-in templates (**Category → Manufacturer → Template**) and automatically creates the required states in ioBroker.

**Current version:** `0.1.0`

**Supported protocols:**

- **Modbus TCP**
- **Modbus RTU (Serial)**
- **Modbus ASCII (Serial)**
- **M-Bus (wired, serial)**
- **MQTT** (event-based)
- **HTTP/JSON** (polling)
- **UDP** (text command/JSON, e.g. KEBA KeContact)
- **Speedwire** (SMA, UDP multicast)
- **1-Wire** (Linux sysfs)

## Community edition scope

This release focuses on typical **home/prosumer energy devices**.

**Industrial/utility templates are intentionally excluded**, e.g.:

- **TESVOLT** (Energy Manager / Vermarktung interfaces)
- **SMA Core1** and **SMA STP125**
- **Alpitronic Hypercharger** / DC fast chargers (incl. ChargePoint-alpitronic)
- Industrial I/O modules (Kmtronic, W&T Web-IO, Siemens LOGO, Filipowski)

## Requirements

- **Node.js >= 18**
- **ioBroker js-controller >= 6.0.11**
- **ioBroker admin >= 7.6.17** (7.6.20 recommended)

## Changelog

See **CHANGELOG.md**.

---

## Deutsch

**energy-bridge** ist ein eigenständiger Multi‑Protokoll‑Geräteadapter für ioBroker.
Er bietet eine **Kategorien → Hersteller → Treiber/Template**‑Konfiguration und erzeugt die
zugehörigen Datenpunkte automatisch in ioBroker.

Unterstützte Protokolle:

- **Modbus TCP**
- **Modbus RTU (Serial)**
- **MQTT** (event‑basiert)
- **HTTP/JSON** (Polling)
- **UDP** (Text-Command/JSON, z.B. KEBA KeContact)

## Community‑Edition: Umfang & Einschränkungen

Diese Veröffentlichung ist als **Community‑Edition** gedacht und fokussiert sich auf typische **Home/Prosumer‑Energie‑Geräte**.

### Unterstützte Geräte (Kurzüberblick)

- **PV_INVERTER:** FoxESS, Goodwe, KACO, Kostal, SMA (STPxx‑50, STPxx‑US‑41, Sunny Tripower X), SolaX, Solar‑Log, SunSpec, Victron
- **METER:** Janitza, Socomec, Siemens, Eastron, ABB, Carlo Gavazzi, Victron, SunSpec, M‑Bus, …
- **EVCS (Wallboxen):** go‑e, KEBA, ABL, openWB, Webasto, Heidelberg, Mennekes, SolaX, Spelsberg
- **ESS / BATTERY / BATTERY_INVERTER:** FENECON, FoxESS, Kostal, SolaX, Tesla, Soltaro, BYD, Pylontech, SMA, Victron, REFU, Sinexcel, Samsung, ADS‑TEC
- **HEAT:** TECALOR, LAMBDA, myPV, Askoma
- **IO:** Shelly (Plug/Plug S Gen1, Plug S Gen3, Plus 1PM, Shelly 1, Shelly 2.5), 1‑Wire DS18B20

> Tipp: Die vollständige Liste siehst du direkt im Admin unter **Geräte hinzufügen → Kategorie/Hersteller/Template**.

### Nicht enthalten (bewusst)

- **TESVOLT** (Energy Manager / Vermarktungs‑Schnittstellen)
- **SMA Core1** und **SMA STP125**
- **Alpitronic Hypercharger** (inkl. ChargePoint‑alpitronic)
- **Industrielle I/O‑Module** (Kmtronic, W&T Web‑IO, Siemens LOGO, Filipowski)

---

## 1) Installation aus GitHub (empfohlen)

Dieser Adapter ist **nicht** im offiziellen ioBroker‑Repository. Daher funktioniert `iobroker add ...` nicht.

Installiere ihn aus GitHub per `iobroker url` (Tarball):

```bash
# Beispiel (ersetze USER/REPO/BRANCH):
iobroker url https://github.com/USER/ioBroker.energy-bridge/tarball/main
```

Danach kannst du im Admin wie gewohnt eine Instanz anlegen.

### Hinweis: Admin‑Fehler „adminUI ist string“
Falls in deiner Installation alte Adapter‑Objekte existieren, bei denen `common.adminUI` fälschlich als String gespeichert ist (z.B. `"materialize"`),
kann der Admin beim Laden eine Exception werfen. Der Adapter enthält eine **automatische Migration**,
die solche Objekte beim Start in das neue Format konvertiert (`{ config: "materialize" }`).

---

## 2) Installation lokal (Alternative)

1. Repository/Ordner nach `/opt/iobroker/node_modules/iobroker.energy-bridge` kopieren
2. Dependencies installieren:
   ```bash
   cd /opt/iobroker/node_modules/iobroker.energy-bridge
   npm install --omit=dev
   ```
3. Admin‑Dateien hochladen:
   ```bash
   iobroker upload energy-bridge
   ```
4. Instanz im Admin anlegen.

---

## 3) Admin‑Konzept (Kategorien → Hersteller → Treiber)

Im Admin kannst du Geräte hinzufügen:

- **Kategorie** (z.B. EVCS, METER, BATTERY, HEAT …)
- **Hersteller**
- **Treiber/Template** (liefert Datenpunkte + Default‑Protokolle)
- **Protokoll** (Modbus TCP / Modbus RTU / MQTT / HTTP)
- Verbindungseinstellungen je Protokoll (z.B. IP/Port/Unit‑ID)

Die Datenpunkte des Templates werden im Modal unten als Tabelle angezeigt.

### RS485 / Modbus RTU auf ED-IPC3020

Auf der ED-IPC3020-Hardware ist die RS485-Schnittstelle typischerweise als **/dev/com2** verfügbar (COM2).
Trage diesen Pfad bei **Modbus RTU → Serial Port** ein und achte darauf, dass der ioBroker-User Zugriff auf das Gerät hat (z.B. Gruppe `dialout`).

---

## 4) Objektstruktur in ioBroker

Für jedes Gerät `<id>`:

- `energy-bridge.0.devices.<id>.info.connection`
- `energy-bridge.0.devices.<id>.info.lastError`
- `energy-bridge.0.devices.<id>.<datapointId>`

Zusätzlich erzeugt der Adapter (best‑effort) eine **stabile Alias‑API** unter:

- `energy-bridge.0.devices.<id>.aliases.*`

Schreibbare Datenpunkte werden als `write=true` angelegt. Wenn du einen State änderst (`ack=false`),
schreibt der Adapter über das passende Protokoll.

---

## 4a) Aliases (stabile Namen für andere Adapter)

Damit nachgelagerte Adapter/Logiken (z.B. Steuer‑ oder Benachrichtigungsadapter) **nicht**
für jeden Hersteller unterschiedliche Datenpunkt‑IDs kennen müssen, legt der Adapter
pro Gerät eine Alias‑Struktur unter `devices.<id>.aliases` an.

Diese Alias‑States sind bewusst **kategorienübergreifend ähnlich** und werden – sofern ein
passender Datenpunkt im Template vorhanden ist – automatisch erstellt.

### Standard (alle Geräte)

- `aliases.comm.connected` (bool) – Kommunikationsstatus zum Gerät
- `aliases.comm.lastError` (string) – letzter Kommunikationsfehler
- `aliases.alarm.offline` (bool) – `true`, wenn das Gerät nicht erreichbar ist

### PV_INVERTER (Wechselrichter)

Lesen:

- `aliases.r.power` (W) – aktuelle Wirkleistung
- `aliases.r.energyTotal` (Wh) – Gesamtertrag/Energiezähler
- `aliases.r.statusCode` (number) – Statuscode (vendor‑spezifisch, aber stabiler Ort)
- `aliases.r.gridConnectionState` (number) – Netzstatus roh (falls verfügbar)
- `aliases.r.gridConnected` (bool) – Netz verbunden (best‑effort Berechnung)

Steuern (falls Template/WR unterstützt):

- `aliases.ctrl.run` (bool) – Start/Stop bzw. Connect/Disconnect (Template‑abhängig)
- `aliases.ctrl.powerLimitPct` (number, %) – Wirkleistungsbegrenzung in %
- `aliases.ctrl.powerLimitEnable` (bool) – Begrenzung aktivieren (falls vorhanden)

Alarme/Benachrichtigungen (best‑effort):

- `aliases.alarm.fault` (bool) – Fehler aktiv
- `aliases.alarm.warning` (bool) – Warnung aktiv

> Hinweis: Einige Geräte liefern Setpoints nur **write‑only**. In diesem Fall bleibt
> `aliases.ctrl.powerLimitPct` auf dem **zuletzt geschriebenen Wert**, bis das Gerät
> einen lesbaren Feedback‑Registerwert bereitstellt.


### METER (Zähler)

Lesen (best‑effort, je nach Template verfügbar):

- `aliases.r.power` (W) – Netto‑Wirkleistung (Import positiv / Export negativ oder berechnet)
- `aliases.r.powerImport` (W) – Importleistung (Bezug)
- `aliases.r.powerExport` (W) – Exportleistung (Einspeisung)
- `aliases.r.energyImport` (Wh) – Importenergie (Bezug)
- `aliases.r.energyExport` (Wh) – Exportenergie (Einspeisung)
- `aliases.r.voltageL1/L2/L3` (V) – Spannung je Phase (bei 1‑phasigen Zählern i.d.R. nur L1)
- `aliases.r.currentL1/L2/L3` (A) – Strom je Phase (bei 1‑phasigen Zählern i.d.R. nur L1)
- `aliases.r.frequency` (Hz) – Netzfrequenz

### EVCS / EVSE / CHARGER (Ladestationen / Wallboxen)

Lesen (best‑effort, je nach Template verfügbar):

- `aliases.r.power` (W) – aktuelle Ladeleistung
- `aliases.r.energySession` (Wh/kWh) – Energie in der aktuellen Sitzung
- `aliases.r.energyTotal` (Wh/kWh) – Gesamtenergie (falls verfügbar)
- `aliases.r.statusCode` (number) – Statuscode (herstellerabhängig, aber stabiler Ort)
- `aliases.r.errorCode` (number) – Fehlercode (falls verfügbar)

Steuern (falls Template/Ladestation unterstützt):

- `aliases.ctrl.run` (bool) – Laden aktivieren/stoppen (Enable/Start)
- `aliases.ctrl.currentLimitA` (A) – Stromlimit (A; bei Geräten mit mA‑Registern erfolgt die Umrechnung automatisch)
- `aliases.ctrl.powerLimitW` (W) – Leistungsbegrenzung (W; sofern unterstützt)
- `aliases.ctrl.unlockPlug` (bool) – Stecker entriegeln (sofern unterstützt)

Alarme/Benachrichtigungen (best‑effort):

- `aliases.alarm.fault` (bool) – Fehler aktiv (z.B. `errorCode != 0`)

### BATTERY / ESS / BATTERY_INVERTER (Batteriesysteme)

Lesen (best‑effort, je nach Template verfügbar):

- `aliases.r.soc` (%) – State of Charge
- `aliases.r.soh` (%) – State of Health (falls vorhanden)
- `aliases.r.voltage` (V) – Batteriespannung
- `aliases.r.current` (A) – Batteriestrom
- `aliases.r.temperature` (°C) – Batterietemperatur (falls vorhanden)
- `aliases.r.power` (W) – Batterieleistung netto (**Konvention:** Entladen positiv, Laden negativ; best‑effort)
- `aliases.r.powerCharge` (W) – Ladeleistung (absolut, ≥0)
- `aliases.r.powerDischarge` (W) – Entladeleistung (absolut, ≥0)
- `aliases.r.energyCharge` (Wh) – Ladeenergie gesamt (falls vorhanden)
- `aliases.r.energyDischarge` (Wh) – Entladeenergie gesamt (falls vorhanden)
- `aliases.r.allowCharge` (bool) – BMS erlaubt Laden (falls vorhanden)
- `aliases.r.allowDischarge` (bool) – BMS erlaubt Entladen (falls vorhanden)
- `aliases.r.allowedChargePower` (W) – erlaubte Ladeleistung (falls vorhanden)
- `aliases.r.allowedDischargePower` (W) – erlaubte Entladeleistung (falls vorhanden)

Steuern (falls Template/Batteriesystem unterstützt):

- `aliases.ctrl.powerSetpointW` (W) – Wirkleistungs-Setpoint (batterieseitig/ESS, herstellerabhängige Semantik)
- `aliases.ctrl.powerSetpointL1/L2/L3` (W) – Setpoints je Phase (falls vorhanden)
- `aliases.ctrl.controlMode` (number) – Control Mode (vendor-spezifisch; stabiler Ort)
- `aliases.ctrl.chargeEnable` (bool) – Laden erlauben/sperren (falls vorhanden; z.B. Victron → DISABLE-Flag invertiert)

Alarme/Benachrichtigungen (best‑effort, konservativ):

- `aliases.alarm.fault` (bool) – Fehler aktiv (z.B. Error-Codes oder Alarm/Protect-Flag-Register ≠ 0)
- `aliases.alarm.warning` (bool) – Warnung aktiv (falls passende Warn-Register vorhanden)

---

## 4b) SMA PV‑Wechselrichter (Modbus) – Templates & wichtige Datenpunkte

Im Adapter sind (u.a.) folgende **PV_INVERTER**‑Templates integriert:

- **SMA STPxx‑50 (SMA Modbus) – Minimal**
  - `templateId`: `pv_inverter.sma.SmaStpxx50Minimal`
  - **Lesen (wichtig):** `W`, `TotWhOut`, `Health`, `PvGriConn`, `GriSwStt`, `SN`
  - **Steuern (wichtig):** `OpMod` (`381=Stopp`, `1467=Start`), `WLimPct` (%, write)

- **SMA STPxx‑US‑41 (SMA Modbus) – Minimal**
  - `templateId`: `pv_inverter.sma.SmaStpxxUs41Minimal`
  - **Lesen (wichtig):** `W`, `TotWhOut`, `Health`, `PvGriConn`, `GriSwStt`, `SN`
  - **Steuern (wichtig):** `FstStop` (`381=Stopp`, `1467=Start`, `1749=Full stop`), `WLimPct` (%, write)

- **SMA Sunny Tripower X (SMA Modbus) – Minimal**
  - `templateId`: `pv_inverter.sma.SmaSunnyTripowerXMinimal`
  - **Lesen (wichtig):** `W`, `TotWhOut`, `Health`, `PvGriConn`, `GriSwStt`, `SN`
  - **Steuern (wichtig):** `OpMod` (`381=Stopp`, `1467=Start`), `WLimPct` (%, write)

> Hinweis: In dieser Community‑Edition sind **SMA Core1** und **SMA STP125** bewusst **nicht** enthalten.

### Hinweis zu Register‑Offsets
Viele Herstellerdokumentationen verwenden 1‑basierte Registeradressen (z.B. `40001`).
Wenn dein Gerät mit den im Template hinterlegten Adressen „um 1 daneben“ liegt, setze im Gerät:

- `addressOffset: -1`

### SunSpec Auto-Discovery

Bei **SunSpec-Modbus** Templates (z.B. **SunSpec PV‑Inverter/Meter**) versucht der Adapter beim Connect **automatisch** die
SunSpec-Signatur **`SunS`** zu finden und setzt intern einen passenden **Offset** (und bei Bedarf auch die **Unit-ID**).

Das hilft insbesondere bei Installationen, bei denen der SunSpec-Block nicht exakt bei `40000` beginnt (z.B. `39999` oder `0`).

Wenn du die Auto-Erkennung deaktivieren oder übersteuern willst, kannst du im Device-Connection-Block (best-effort) setzen:

- `autoSunSpec: false`
- `sunSpecTemplateBase: 40000` (nur wenn du ein anderes Template-Base-Layout verwendest)

---

## 5) Geräte‑Konfiguration (devicesJson)

Die Geräte werden intern als JSON gespeichert. Beispiel:

```json
[
  {
    "id": "evcs_garage",
    "name": "Wallbox Garage",
    "enabled": true,
    "category": "EVCS",
    "manufacturer": "go-e",
    "templateId": "evcs.goe.EvcsGoeModbusImpl",
    "protocol": "modbusTcp",
    "pollIntervalMs": 1000,
    "connection": {
      "host": "192.168.1.50",
      "port": 502,
      "unitId": 1,
      "timeoutMs": 2000,
      "addressOffset": 0
    }
  }
]
```

### Wichtige Felder
- `pollIntervalMs`: optional pro Gerät; sonst globales Polling
- `addressOffset`: um 1‑basierte Registerangaben (40001‑Style) zu korrigieren, z.B. `-1`

---

## License
MIT