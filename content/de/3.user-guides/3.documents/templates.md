---
title: Vorlagen
---

Vorlagen machen die Dokumenterstellung schneller und einheitlicher.
In FiveNet verwenden Vorlagen **HTML** plus **Golang-Templating**, um dynamische Daten einzufügen.

::callout{icon="i-mdi-info-slab-circle"}
FiveNet unterstützt:
- Basisfunktionen von [Golang `html/template`](https://pkg.go.dev/html/template)
- Zusätzliche [`sprout`-Templatefunktionen](https://docs.atom.codes/sprout/registries/list-of-all-registries)
    - Hinweis: Einige `sprout`-Funktionen sind in FiveNet-Vorlagen nicht verfügbar, wie z. B. `filesystem`, `network` und `regex`; dies ist keine vollständige Liste.
::

## So funktioniert das Rendering

Wenn eine Vorlage verwendet wird, macht FiveNet Folgendes:
1. Übernimmt Ihren HTML-Inhalt.
2. Ersetzt Template-Ausdrücke wie `{{ .ActiveChar.GetFirstname }}` durch echte Werte.
3. Rendert das Ergebnis als HTML im Dokument-Editor.

Auswahlen in der Zwischenablage liefern Daten für:
- `.Users`
- `.Vehicles`
- `.Documents`

## Minimale funktionierende Vorlage

Nutzen Sie dies als sicheren Einstieg:

```templ
<p>
Erstellt von: {{ .ActiveChar.GetFirstname }} {{ .ActiveChar.GetLastname }}<br>
Datum: {{ now | date "02.01.2006" }}
</p>
```

::callout{icon="i-mdi-warning-circle" color="warning"}
Eine Vorlage muss zu gültigem HTML rendern, sonst kann die Ausgabe fehlschlagen oder falsch dargestellt werden.
::

## Zentrale Bausteine

### Variablen

```templ
{{ .ActiveChar.GetFirstname }}
```

### Bedingungen

```templ
{{ if .Users }}
<p>Benutzer ausgewählt.</p>
{{ else }}
<p>Keine Benutzer ausgewählt.</p>
{{ end }}
```

### Schleifen

```templ
<ul>
{{- range .Vehicles -}}
<li>{{ .GetPlate }} - {{ .Owner.GetFirstname }} {{ .Owner.GetLastname }}</li>
{{- end -}}
</ul>
```

### Häufig genutzte Helfer

::tip
Die Variable `$citizen` wird automatisch mit dem ersten ausgewählten Bürger befüllt. Eine eigene Zuweisung mit `{{- $citizen := first .Users -}}` ist nicht erforderlich.
::

```templ
{{ now | date "02.01.2006 15:04" }}
```

## Sofort nutzbare Snippets

### Erster ausgewählter Bürger

```templ
{{- if .Users -}}
<p>
Bürger: {{ $citizen.GetFirstname }} {{ $citizen.GetLastname }}<br>
Geburtsdatum: {{ $citizen.GetDateofbirth }}
</p>
{{- else -}}
<p>Kein Bürger ausgewählt.</p>
{{- end -}}
```

### Fahrzeugliste mit Fallback

```templ
{{ if not .Vehicles }}
<p>Keine Fahrzeuge beteiligt.</p>
{{ else }}
<ul>
{{- range .Vehicles -}}
<li>{{ .GetPlate }} - {{ .Owner.GetFirstname }} {{ .Owner.GetLastname }}</li>
{{- end -}}
</ul>
{{ end }}
```

### Signaturblock

```templ
<p>
Eingereicht von: {{ .ActiveChar.GetFirstname }} {{ .ActiveChar.GetLastname }}<br>
Rang: {{ .ActiveChar.GetJobGradeLabel }}<br>
Datum: {{ now | date "02.01.2006 15:04" }}
</p>
```

## Häufige Fehler

- Ungültige HTML-Ausgabe (fehlende/falsche Tags).
- `.activeChar` statt `.ActiveChar` verwenden.
- Listeneinträge ohne Prüfung auf vorhandene Daten verwenden.
- `<br>` für Zeilenumbrüche in Absätzen vergessen.

## Verfügbare Variablen

::callout{color="info" icon="i-mdi-information-outline"}
Die in Vorlagen verfügbaren Werte sind sogenannte Protobuf-Objekte. Greifen Sie auf deren Felder mit den generierten `Get...`-Methoden zu. Schreiben Sie zum Beispiel `{{ .ActiveChar.GetFirstname }}` statt `{{ .ActiveChar.Firstname }}`. Diese Getter liefern einen leeren beziehungsweise den Nullwert, wenn ein Wert fehlt. Für optionale verschachtelte Objekte können Sie `with` verwenden, wenn ein Fallback ausgegeben werden soll.
::

### `.Documents`

Liste der Dokumente in der Zwischenablage des Benutzers.

- `.GetId`
- `.GetCreatedAt`
- `.GetTitle`
- `.GetState`
- `.GetCreatorId`
- `.GetCreator` - Siehe [Benutzerinformationsstruktur](#benutzerinformationsstruktur).
- `.GetMeta.GetClosed` - Boolescher Wert.
- `.GetCategoryId`
- `.GetCategory`
  - `.GetName`
  - `.GetDescription`

### `.Users`

Liste der Bürger/Benutzer in der Zwischenablage des Benutzers.

- Siehe [Benutzerinformationsstruktur](#benutzerinformationsstruktur).

### `.Vehicles`

Liste der Fahrzeuge in der Zwischenablage des Benutzers.

- `.GetPlate`
- `.GetModel`
- `.GetType`
- `.GetOwner` - Siehe [Benutzerinformationsstruktur](#benutzerinformationsstruktur).

### `.ActiveChar`

Informationen zum Autor/einreichenden Benutzer.

- Siehe [Benutzerinformationsstruktur](#benutzerinformationsstruktur).

### Benutzerinformationsstruktur

- `.GetUserId`
- `.GetIdentifier`
- `.GetJob` - Bevorzugt `.GetJobLabel` verwenden.
- `.GetJobLabel`*
- `.GetJobGrade` - Bevorzugt `.GetJobGradeLabel` verwenden.
- `.GetJobGradeLabel`*
- `.GetFirstname`
- `.GetLastname`
- `.GetDateofbirth` - Im Format `DD.MM.YYYY`.
- `.GetPhoneNumber` - Optional, möglicherweise nicht immer enthalten.

(*Diese Felder sind nur in der Variablen `.ActiveChar` verfügbar.)

## Zusätzliche Snippets

### Aktive Benutzerinformationen ausgeben

```templ
{{ .ActiveChar.GetFirstname }}, {{ .ActiveChar.GetLastname }}
```

### Ersten Bürger abrufen

Die Variable `$citizen` enthält automatisch den ersten Benutzer in der Liste (erstes Element in der Zwischenablage des Benutzers).

Beispiel für den Zugriff auf Bürgerinformationen:

```templ
{{ $citizen.GetFirstname }}, {{ $citizen.GetLastname }} ({{ $citizen.GetDateofbirth }})
```

### Aktuelles Datum und Uhrzeit

```templ
{{ now | date "02.01.2006 15:04" }}
```

Weitere Informationen zu Datums- und Zeitformaten finden Sie in der [Golang-`time`-Paketdokumentation](https://pkg.go.dev/time#pkg-constants).

### Aktuelles Datum

```templ
{{ now | date "02.01.2006" }}
```

Weitere Informationen zu Datums- und Zeitformaten finden Sie in der [Golang-`time`-Paketdokumentation](https://pkg.go.dev/time#pkg-constants).

### Zeitstempel anzeigen (z. B. Feld `CreatedAt`)

```templ
{{ .GetCreatedAt | date "02.01.2006 15:04" }}
```

### Checkboxen

#### Inline-Checkbox

```html
<span data-checked="false" data-type="checkboxStandalone"><label><input type="checkbox"> </label></span>
```

Beispielverwendung:

```html
<p>Inline-Checkbox <span data-checked="false" data-type="checkboxStandalone"><label><input type="checkbox"> </label></span>mit Text</p>
```

#### Aufgabenliste (Checkbox-Liste)

```html
<ul data-type="taskList">
    <li data-checked="false" data-type="taskItem">
        <label><input type="checkbox"><span></span></label><div><p>Ihr erster Text kommt hier hin</p></div>
        <label><input type="checkbox"><span></span></label><div><p>Ihr zweiter Text kommt hier hin</p></div>
    </li>
</ul>
```

##### Checkbox-Listenelement

```html
<label><input type="checkbox"><span></span></label><div><p>Ihr Text kommt hier hin</p></div>
```

### Fahrzeugliste anzeigen

```templ
{{ if not .Vehicles }}
<p>
Keine Fahrzeuge beteiligt.
</p>
{{ else }}
<ul>
{{- range .Vehicles -}}
<li>{{ .GetPlate }} - {{ .Owner.GetFirstname }}, {{ .Owner.GetLastname }}</li>
{{- end -}}
</ul>
{{ end }}
```
